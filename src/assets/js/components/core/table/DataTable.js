import { useState, useEffect } from "react";
import PropTypes from "prop-types";

//components
import BoxCard from "@/assets/js/components/BoxCard";
import SearchInput from "@/assets/js/components/core/form/SearchInput";
import Button from "@/assets/js/components/Button";

const DataTable = ({ dataItems = [], headers = [], initialCount = 6, gridCounter = 5, loading = false, onSort, resetSort = null }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount); // Show items initially based on initialCount value
  const [sortState, setSortState] = useState({});

  const loadMore = () => {
    setVisibleCount((prev) => prev + initialCount); // Load more on click
  };

  const handleSort = (header) => {
    if (!header.sortable) return;
    
    setSortState((prevState) => {
      const newSortState = prevState?.column === header.value
        ? { column: header.value, order: prevState.order === "asc" ? "desc" : "asc" }
        : { column: header.value, order: "asc" };
      onSort(header.value, newSortState.order);
      return newSortState;
    });
  };

  // determine sort icon based on column direction
  const getSortIcon = (header) => {
    if (!header.sortable) return null;
    if (!sortState || sortState.column !== header.value) return <i className="fa-solid fa-sort"></i>;
    return sortState.order === "asc" ? <i className="fa-solid fa-sort-up"></i> : <i className="fa-solid fa-sort-down"></i>;
  };

  useEffect(() => {
    setSortState(null);
  }, [resetSort]);

  return (
    <div className="tw-w-full">
      <div className="tw-w-full tw-overflow-x-auto tw-py-4">
        {/* Table Headers */}
        <div className={`tw-grid tw-w-full tw-min-w-[1200px] xl:tw-min-w-0 tw-items-center tw-gap-[14px] tw-mb-[24px] ${gridCounter ? `tw-grid-cols-[repeat(${gridCounter - 1}, minmax(0, 1fr))] tw-grid-cols-[1fr_1fr_1fr_1fr_2.1fr]` : "tw-grid-cols-1"}`}>          
          {headers.map((header, index) => (
            <div key={index} className="tw-text-[16px] tw-font-bold">
              <div 
                className={`tw-text-[#8E8E8E] tw-flex tw-flex-wrap tw-gap-[8px] ${header.sortable ? 'tw-cursor-pointer' : ''} ${header.classes}`}
                onClick={() => handleSort(header)}
              >
                {header.text} {header.sortable && getSortIcon(header)}
              </div>
            </div>
          ))}
        </div>
        {/* Table Headers */}

        {/*Table Data*/}
        <div className="tw-grid tw-w-full tw-min-w-[1200px] xl:tw-min-w-0 tw-overflow-x-auto tw-gap-[14px] tw-grid-cols-1 lg:tw-gap-[25px]">
          {dataItems.slice(0, visibleCount).map((item, index) => (
            <BoxCard key={index} className="tw-border tw-border-solid tw-border-[#4D4D4D] tw-px-[24px] tw-py-[30px] tw-text-left tw-flex tw-justify-between tw-flex-wrap tw-rounded-[27px]">

              <div className={`tw-grid tw-w-full tw-min-w-0 tw-items-center tw-gap-[14px] ${gridCounter ? `tw-grid-cols-[repeat(${gridCounter - 1}, minmax(0, 1fr))] tw-grid-cols-[1fr_1fr_1fr_1fr_2fr]` : "tw-grid-cols-1"}`}>

                {/*Column */}
                <div className="tw-flex tw-flex-wrap tw-gap-[8px] tw-items-center">
                  <div className="tw-rounded-full tw-w-[40px] tw-h-[40px] tw-bg-gray-200"></div>
                  <h4 className="tw-text-[16px] tw-font-bold tw-ml-[4px]">{item.name}</h4>
                  <span className="tw-flex tw-items-center tw-text-center tw-justify-center tw-w-[22px] tw-h-[22px] tw-rounded-full tw-bg-white tw-text-black tw-font-bold tw-text-[12px]">{item.rank}</span>
                </div>

                {/*Column */}
                <div className="tw-flex tw-justify-start tw-flex-wrap tw-gap-[16px]">
                  <div className="tw-flex tw-flex-col tw-gap-[4px]">
                    <span className={`tw-text-[16px] ${item.apr >= 0 ? "tw-text-[#00FF40]" : "tw-text-red-500"}`}>
                      <i className={`tw-pr-[2px] tw-text-[14px] fa-solid ${item.apr >= 0 ? "fa-arrow-up-long" : "fa-arrow-down-long"}`}></i>
                      {item.apr}%
                    </span>
                  </div>
                </div>

                {/*Column */}
                <div className="tw-flex tw-flex-col tw-gap-[4px] tw-justify-start">
                  <span className="tw-text-[16px] tw-font-bold">{item.totalVotes}</span>
                  <span className="tw-text-[12px] tw-text-[#8E8E8E]">{item.votePercentage}%</span>
                </div>

                {/*Column */}
                <div className="tw-flex tw-justify-between tw-flex-wrap tw-gap-[16px]">
                  <div className="tw-flex tw-flex-col">
                    <span className="tw-text-[16px]">${item.rewards}</span>
                  </div>
                </div>

                {/*Column */}
                <div className="tw-w-full tw-flex tw-items-center md:tw-items-end tw-justify-between tw-gap-[16px]">
                  <div className="tw-flex tw-flex-col tw-gap-[4px]">
                    <span className="tw-text-[16px]">{item.my_vote}</span>
                    <span className="tw-text-[12px] tw-text-[#8E8E8E]">{item.my_percentage}</span>
                  </div>

                <div className="tw-flex tw-flex-col tw-justify-end tw-text-right tw-gap-[12px]">
                  <span className="tw-text-white">Available votes: {item.available_votes}</span>

                  <div className="tw-flex tw-w-full tw-min-w-[210px] tw-flex-col md:tw-flex-row tw-items-end tw-justify-between tw-gap-[8px]">
                      <SearchInput placeholder="Enter Vote %" hasSearchButton={false} additionalClassName="tw-w-full tw-max-w-full" additionalParentClassName="tw-w-full md:tw-w-[70%]" />
                      <Button title="Max" isAnchor={false} className="dashboard-btn tw-max-w-full tw-w-[30%] tw-uppercase"/>
                    </div>
                  </div>
                </div>

              </div>
              {/*Table Data*/}
            </BoxCard>
          ))}

          {/*Loading State*/}
          {loading && Array.from({ length: initialCount }, (_, index) => (
            <div key={index} className="loading-bg tw-min-h-[140px] md:tw-min-h-[150px]"></div>
          ))}
        </div>
        {/*Table Data*/}
      </div>

        {/* Not found State */}
        { (!loading && dataItems.length === 0) && (
        <div className="tw-rounded-[26px] tw-border tw-px-[24px] tw-py-[30px] tw-border-[#4e4e4e] tw-border-solid tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-bg-[#141414] tw-flex-col">
          <h4 className="tw-text-[24px] tw-mb-[16px]">No Data Found...</h4>
          <p className="tw-text-[#8E8E8E]">Try adjusting the filter or search.</p>
        </div>
        )}


        {/* Load More Button */}
        {visibleCount < dataItems.length && (
          <div className="tw-flex tw-justify-center tw-w-full tw-mt-6">
            <Button 
              className="tw-bg-[#8737A9] tw-text-[14px] tw-text-white tw-py-2 tw-px-6 tw-rounded-full tw-transition tw-duration-300 hover:tw-bg-[#5F2482] tw-h-[40px]"
              onClick={loadMore}
              isAnchor={false}
              title="Load More"
            />
          </div>
        )}
    </div>
  );
};

// PropTypes
DataTable.propTypes = {
  dataItems: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  initialCount: PropTypes.number,
  gridCounter: PropTypes.number,
  headers: PropTypes.array,
  onSort: PropTypes.func,
  resetSort: PropTypes.string,
};

export default DataTable;