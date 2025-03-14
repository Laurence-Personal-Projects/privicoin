import { useRef, useState, useEffect, useCallback } from "react";
import SearchInput from "@/assets/js/components/core/form/SearchInput";
import SelectDropdown from "@/assets/js/components/core/form/SelectDropdown";
import { debouncer, formatterNumber } from '@/assets/js/services/helper.js';

//core components
import TabSwitcher from "@/assets/js/components/core/tabs/TabSwitcher";
import DataCards from "@/assets/js/components/core/cards/DataCards";
import DataTable from "@/assets/js/components/core/table/DataTable";

//api import
import { fetchProjects } from "@/assets/js/services/FetchProjectsServices";

const DashboardProjects = () => {

  // Ref for filter data
  const filterData = useRef({
    search: useRef(null),
    sortOptions: {
      key: 0,
      data: null,
    },
    sort: null,
  });

  // Usestates
  const [resetSort, setResetSort] = useState(false); //reset sorting
  const [, forceRenderState] = useState(0); // State to trigger re-render when key changes
  const [dataItems, setDataItems] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(false); // loading state

  // headers - for DataTable
  // eslint-disable-next-line no-unused-vars
  const [headers, setHeaders] = useState([
    { classes: 'tw-text-left', text: 'Project', value: 'project', sortable: true },
    { classes: 'tw-text-left', text: 'APR', value: 'apr', sortable: true },
    { classes: 'tw-text-left', text: 'Total Votes', value: 'total_votes', sortable: true },
    { classes: 'tw-text-left', text: 'Rewards', value: 'rewards', sortable: true },
    { classes: 'tw-text-left', text: 'My Vote', value: 'my_vote' },
  ]);

  // Static options
  const selectOptions = [
    { id: "sortName", name: "Sort by Name" },
    { id: "sortApr", name: "Sort by APR" },
    { id: "sortTotalVotes", name: "Sort by Total Votes" },
    { id: "sortRewards", name: "Sort by Rewards" },
    { id: "sortVotes", name: "Sort by My Votes" },
  ];

  /*** Function Methods ***/

  // Function - handleSort - for DataTable
  const handleSort = (column, direction) => {
    filterData.current.sort = { [column]: direction };
    console.log("sort:", filterData.current.sort);
    fetchData();
  };

  // Function - handleSearch - handle searching
  const handleSearch = (searchValue) => {
    if (filterData.current.search.current) {
      filterData.current.search.current.value = searchValue; // the the searchValue into the search ref

      debouncer(() => {
        fetchData();  // re-fetch api data when filter changed
      }, 600)(); // adjust delay as needed

      console.log("Data search is:", filterData.current.search.current.value);
    }
  };
  
  // Function - HandleSortSelect - selection of dropdown option
  const handleSortSelect = (selectedOption) => {
    filterData.current.sortOptions.data = selectedOption; // Store selected option in ref

    debouncer(() => {
      fetchData();  // re-fetch api data when filter changed
    }, 600)(); // adjust delay as needed

    console.log("Data:", filterData.current.sortOptions.data);
  };

  // Function - Clearing Filters
  const clearFilters = () => {
    if (filterData.current.search.current) {
      filterData.current.search.current.value = null;
    }
    
    // clear the sortOptions and force re-render when key is incremented
    filterData.current.sortOptions.data = null;
    filterData.current.sortOptions.key += 1;

    // Clear sort filter
    filterData.current.sort = null;
    setResetSort(prev => !prev); // Toggle state to trigger reset

    fetchData();  // re-fetch api data when filter changed
    
    // Force React to re-render
    forceRenderState(prev => prev + 1);

    console.log("search cleared:", filterData.current.search.current.value);
    console.log("sortOptions cleared:", filterData.current.sortOptions);
  };

  /*** END >> Function Methods ***/

  /*Tabs - Config*/
  const activeTab = useRef(null);
  /*End>> Tabs - Config*/
  
  // Function - Fetch data using Axios
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      let params = getFilterParams();
      const [response, errorMessage] = await fetchProjects(params);
      
      if (response && response.data) {
        setLoading(false);
        const apiData = response.data; // fetch response data

        // Map API data to match map data in the component
        const formattedData = apiData.map((item) => ({
          name: item.name,
          rank: item.market_cap_rank ?? 0,
          totalVotes: item.market_cap ? formatterNumber(item.market_cap) : "0",
          votePercentage: item.atl ?? 0,
          description: item.description ?? "Automated market maker (AMM) for stable asset swaps with concentrated liquidity positions",
          apr: formatterNumber(item.atl_change_percentage) ?? 0,
          rewards: item.current_price ? item.current_price.toLocaleString() : "0",
          my_vote: formatterNumber(item.price_change_percentage_24h) + '%' ?? 0 + '%',
          my_percentage: formatterNumber(item.ath_change_percentage) + '%' ?? 0 + '%',
          available_votes: formatterNumber(item.market_cap_rank) + '%' ?? 0 + '%',
        }));

        setDataItems(formattedData); // Update state with formatted data
      }

      //get the error message
      if (errorMessage) {
        console.log('Error Data', errorMessage);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // structure params to be sent in api
  const getFilterParams = () => {
    return {
      search: filterData.current.search.current.value ?? null,
      sort_data_card: filterData.current.sortOptions.data,
      sort: filterData.current.sort,
    };
  };

  // refresh data and clear applied filters
  const resetAndRefreshData = () => {
    clearFilters();
  };

  useEffect(() => {
    fetchData();  // Fetch data on component mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="tw-w-full">
        <div className="tw-flex tw-gap-[15px] tw-justify-end tw-flex-col">
          <div className="tw-flex tw-gap-[15px] tw-flex-wrap tw-items-center tw-justify-end">
            {/* Use filterData.current.sortOptions.key as key */}
            <SelectDropdown 
              key={filterData.current.sortOptions.key}
              simple={true} 
              placeholder="Select a sort"
              onSelect={handleSortSelect}
              options={selectOptions} 
              additionalClass="tw-min-w-[170px] tw-h-[48px]" 
            />
            {/* Attach ref to SearchInput */}
            <SearchInput ref={filterData.current.search} placeholder="Search Project" onSearch={handleSearch} />
          </div>
          <div className="tw-flex tw-justify-end">
            <button type="button" onClick={clearFilters}>Clear</button>
          </div>
        </div>

        <div className="tw-w-full">
          <TabSwitcher
            ref={activeTab}
            tabs={[
              { name: "dataCard", label: "Data Cards", icon: "fa-solid fa-grip" },
              { name: "dataTable", label: "Data Table", icon: "fa-solid fa-list" },
            ]}
            mainTitle="Projects"
            hasIcon={true}
            hideLabel={true}
            addtionalTopClass="tw-mt-[20px] xl:tw-mt-[-82px] tw-py-[3px]"
            addtionalContentClass="tw-mt-[60px]"
            onTabChange={resetAndRefreshData}
          >
            <DataCards id="dataCard" dataItems={dataItems} loading={loading} />
            <DataTable 
              id="dataTable" 
              dataItems={dataItems} 
              loading={loading} 
              headers={headers} 
              onSort={handleSort} 
              resetSort={resetSort}
            />

          </TabSwitcher>
        </div>
    </div>
  );
}

export default DashboardProjects;