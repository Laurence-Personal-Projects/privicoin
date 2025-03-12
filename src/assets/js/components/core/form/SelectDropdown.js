import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SelectDropdown = ({ 
  options = [], 
  selectedOption = "", 
  placeholder = "Select",
  onSelect,
  simple = false,
  height = "48px",
  additionalClass = "",
  additionalParentClass  = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // when handleSelect is triggered get the selected option
  const handleSelect = (id) => {
    const selectedObj = options.find(opt => opt.id === id);
    setSelected(id);

    setIsOpen(false); // Close dropdown after selection
    
    if (onSelect) {
      onSelect(simple ? id : selectedObj); // if simple is true, pass only the `id`. if not pass `id` and `name` as an object
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`tw-flex tw-flex-col tw-relative ${additionalParentClass}`}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className={`tw-flex tw-rounded-full tw-justify-between tw-border tw-items-center tw-border-solid tw-border-[#4D4D4D] tw-py-[7px] tw-px-[16px] tw-bg-transparent placeholder:tw-text-white tw-gap-[16px] tw-h-[${height}] ${additionalClass}`}
      >
        <span>
          {options.find((opt) => opt.id === selected)?.name || placeholder}
        </span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="tw-border tw-border-[#4D4D4D] tw-border-solid tw-rounded-md tw-text-left tw-flex tw-flex-col tw-top-full tw-absolute tw-w-full tw-mt-2 tw-z-[20] tw-bg-black">
          {options.map((option) => (
            <li
              key={option.id}
              className={`tw-p-3 tw-cursor-pointer hover:tw-bg-[#8737A9] ${
                selected === option.id ? "tw-bg-[#8737A9] tw-text-white" : "tw-bg-transparent"
              } tw-flex tw-justify-between`}
              onClick={() => handleSelect(option.id)}
            >
              {option.name} {selected === option.id && <i className="fa-solid fa-check"></i>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// PropTypes
SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  selectedOption: PropTypes.string,
  placeholder: PropTypes.string,
  additionalClass: PropTypes.string,
  additionalParentClass: PropTypes.string,
  onSelect: PropTypes.func,
  simple: PropTypes.bool
};

export default SelectDropdown;
