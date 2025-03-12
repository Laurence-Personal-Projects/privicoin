import { useRef } from "react";
import SearchInput from "@/assets/js/components/core/form/SearchInput";
import SelectDropdown from "@/assets/js/components/core/form/SelectDropdown";

const DashboardBottomSection = () => {
  // Ref for input field
  const inputRef = useRef(null);

  // Static options (no need for useRef)
  const selectOptions = [
    { id: "a-z", name: "Sort A-Z" },
    { id: "z-a", name: "Sort Z-A" }
  ];

  const handleSearch = (searchValue) => {
    if (inputRef.current) {
      inputRef.current.value = searchValue; // Store searchValue in inputRef
      console.log("Input Ref:", inputRef.current); // Log the input field reference
    }
    console.log("Search Triggered:", searchValue);
  };

  const clearFilters = () => {
    console.log("Filters cleared!");
  };

  return (
    <div className="tw-flex tw-gap-[15px] tw-items-center">
      {/* Pass selectOptions directly */}
      <SelectDropdown 
        simple={true} 
        placeholder="Sort by Name" 
        options={selectOptions} 
        additionalClass="tw-min-w-[170px]" 
      />
      {/* Attach ref to SearchInput */}
      <SearchInput ref={inputRef} placeholder="Search Project" onSearch={handleSearch} />
      <button type="button" onClick={clearFilters}>Clear</button>
    </div>
  );
};

export default DashboardBottomSection;
