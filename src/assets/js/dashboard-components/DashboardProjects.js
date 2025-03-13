import { useRef, useState, useEffect } from "react";
import SearchInput from "@/assets/js/components/core/form/SearchInput";
import SelectDropdown from "@/assets/js/components/core/form/SelectDropdown";

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
  });

  // State to trigger re-render when key changes
  const [, forceRenderState] = useState(0);

  // Static options
  const selectOptions = [
    { id: "sortName", name: "Sort by Name" },
    { id: "sortApr", name: "Sort by APR" },
    { id: "sortTotalVotes", name: "Sort by Total Votes" },
    { id: "sortRewards", name: "Sort by Rewards" },
    { id: "sortVotes", name: "Sort by My Votes" },
  ];

  /*** Function Methods ***/

  // Function - handleSearch - handle searching
  const handleSearch = (searchValue) => {
    if (filterData.current.search.current) {
      filterData.current.search.current.value = searchValue; // the the searchValue into the search ref
      console.log("Data search is:", filterData.current.search.current.value);
    }
  };
  
  // Function - HandleSortSelect - selection of dropdown option
  const handleSortSelect = (selectedOption) => {
    filterData.current.sortOptions.data = selectedOption; // Store selected option in ref
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
    
    // Force React to re-render
    forceRenderState(prev => prev + 1);

    console.log("search cleared:", filterData.current.search.current.value);
    console.log("sortOptions cleared:", filterData.current.sortOptions);
  };

  /*** END >> Function Methods ***/

  /*Tabs - Config*/
  const activeTab = useRef(null);
  /*End>> Tabs - Config*/

  // State to hold fetched data
  const [dataItems, setDataItems] = useState([]);

  //formatter function for large Numbers
  const formatterNumber = (num) => {
    if (Number.isInteger(num)) {
      return num.toLocaleString(); // if whole number dont include 2 decimal places
    }
    return (num ?? 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Function - Fetch data using Axios

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [response, errorMessage] = await fetchProjects();
      
      if (response && response.data) {
        setLoading(false);
        const apiData = response.data; // fetch response data

        // Map API data to match map data in the component
        const formattedData = apiData.map((item) => ({
          name: item.name,
          rank: item.market_cap_rank ?? 0,
          totalVotes: item.market_cap ? `${formatterNumber(item.market_cap)}M` : "0M",
          votePercentage: item.atl ?? 0,
          description: item.description ?? "Automated market maker (AMM) for stable asset swaps with concentrated liquidity positions",
          apr: formatterNumber(item.atl_change_percentage) ?? 0,
          rewards: item.current_price ? item.current_price.toLocaleString() : "0",
          myVote: formatterNumber(item.ath) ?? 0,
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
  };

  // refresh data and clear applied filters
  const resetAndRefreshData = () => {
    clearFilters();
    fetchData();
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="tw-w-full">
        <div className="tw-flex tw-gap-[15px] tw-justify-end tw-flex-col">
          <div className="tw-flex tw-gap-[15px] tw-items-center tw-justify-end">
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
            <DataTable id="dataTable" />
          </TabSwitcher>
        </div>
    </div>
  );
}

export default DashboardProjects;