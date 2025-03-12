import { useRef, useState } from "react";
import SearchInput from "@/assets/js/components/core/form/SearchInput";
import SelectDropdown from "@/assets/js/components/core/form/SelectDropdown";

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
  
  return (
     <div className="tw-flex tw-gap-[15px] tw-items-center tw-justify-end">
        {/* Use filterData.current.sortOptions.key as key */}
        <SelectDropdown 
          key={filterData.current.sortOptions.key}
          simple={true} 
          placeholder="Select a sort"
          onSelect={handleSortSelect}
          options={selectOptions} 
          additionalClass="tw-min-w-[170px]" 
        />
        {/* Attach ref to SearchInput */}
        <SearchInput ref={filterData.current.search} placeholder="Search Project" onSearch={handleSearch} />
        <button type="button" onClick={clearFilters}>Clear</button>
      </div>
  );
}

export default DashboardProjects;