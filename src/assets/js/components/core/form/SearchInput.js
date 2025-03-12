import { useRef, forwardRef } from "react";
import PropTypes from "prop-types";

const SearchInput = forwardRef(({ placeholder = "", onSearch, hasSearchButton = true, disabled = false, additionalClassName = "", additionalParentClassName = "" }, ref) => {
  const inputRef = useRef(null); // Local ref for input field

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const searchValue = inputRef.current.value;
      if (onSearch) {
        onSearch(searchValue); // Emit the search value
      }
    }
  };

  return (
    <div className={`${disabled ? "tw-cursor-not-allowed" : ""} tw-rounded-full tw-flex tw-items-center tw-border tw-border-solid tw-border-[#4D4D4D] tw-py-[7px] tw-px-[16px] tw-bg-transparent placeholder:tw-text-white ${additionalParentClassName}`}>
      {/* Input field */}
      <input
        ref={(inputElement) => {
          inputRef.current = inputElement; // Assign local ref
          if (typeof ref === "function") ref(inputElement);
          else if (ref) ref.current = inputElement; // Assign parent ref
        }}
        type="text"
        onKeyUp={handleSearch}
        placeholder={placeholder}
        disabled={disabled}
        className={`${disabled ? "tw-cursor-not-allowed" : ""} tw-pr-[10px] tw-bg-transparent tw-h-[30px] placeholder:tw-text-white focus-visible:tw-outline-none tw-min-w-0 ${additionalClassName}`}
      />

      {/* Search button - only hide button if hasSearchButton is false */}
      {
        hasSearchButton &&
        <button type="button" onClick={handleSearch}>
          <i className="tw-text-[18px] tw-w-full tw-max-w-full fa-solid fa-magnifying-glass text-gray-500"></i>
        </button>
      }
    </div>
  );
});

// PropTypes
SearchInput.propTypes = {
  placeholder: PropTypes.string,
  hasSearchButton: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  additionalClassName: PropTypes.string,
  additionalParentClassName: PropTypes.string,
};

export default SearchInput;
