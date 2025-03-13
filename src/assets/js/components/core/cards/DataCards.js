import { useState } from "react";
import PropTypes from "prop-types";

//components
import BoxCard from "@/assets/js/components/BoxCard";
import SearchInput from "@/assets/js/components/core/form/SearchInput";
import Button from "@/assets/js/components/Button";

const DataCards = ({ dataItems = [], initialCount = 6, loading = false }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount); // Show items initially based on initialCount value

  const loadMore = () => {
    setVisibleCount((prev) => prev + initialCount); // Load more on click
  };

  return (
    <div className="tw-w-full">
      <div className="tw-grid tw-gap-[16px] tw-grid-cols-1 lg:tw-gap-[25px] lg:tw-grid-cols-2 xl:tw-grid-cols-3">
        {dataItems.slice(0, visibleCount).map((item, index) => (
          <BoxCard key={index} className="dashboard-box-card tw-px-[24px] tw-py-[30px] tw-text-left tw-flex tw-justify-between tw-flex-wrap">
            <div className="tw-w-full tw-flex-col">
              {/* Top Details */}
              <div className="tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-gap-[16px]">
                <div className="tw-flex tw-flex-wrap tw-gap-[8px] tw-items-center">
                  <div className="tw-rounded-full tw-w-[40px] tw-h-[40px] tw-bg-gray-200"></div>
                  <h4 className="tw-text-[16px] tw-font-bold tw-ml-[4px]">{item.name}</h4>
                  <span className="tw-flex tw-items-center tw-text-center tw-justify-center tw-w-[22px] tw-h-[22px] tw-rounded-full tw-bg-white tw-text-black tw-font-bold tw-text-[12px]">{item.rank}</span>
                </div>
                <button type="button" className="tw-rounded-[4px] tw-py-[8px] tw-px-[12px] tw-transition tw-duration-300 hover:tw-bg-[#8737A9]">View</button>
              </div>
              {/* Separator */}
              <div className="tw-w-full tw-h-[1px] tw-bg-[#424242] tw-my-[12px]"></div>
              {/* Separator */}

              {/* Top Middle Details */}
              <div className="tw-flex tw-justify-between tw-flex-wrap tw-gap-[16px]">
                <h6 className="tw-text-[16px]">Total Votes</h6>
                <div className="tw-flex tw-flex-col tw-gap-[12px] tw-justify-end tw-text-right">
                  <span className="tw-text-[16px] tw-font-bold">{item.totalVotes}</span>
                  <span className="tw-text-[12px] tw-text-[#8E8E8E]">{item.votePercentage}%</span>
                </div>
              </div>

              {/* Separator */}
              <div className="tw-w-full tw-h-[1px] tw-bg-[#424242] tw-my-[12px]"></div>
              {/* Separator */}

              {/* Description */}
              <div className="tw-my-[34px] tw-text-[12px] tw-w-full lg:tw-w-[68%]">{item.description}</div>

              {/* Bottom Content Details */}
              <div className="tw-flex tw-justify-between tw-flex-col tw-flex-wrap tw-gap-[16px]">
                <div className="tw-flex tw-justify-between tw-flex-wrap tw-gap-[16px]">
                  <h6 className="tw-text-[16px]">APR</h6>
              
                  <div className="tw-flex tw-flex-col tw-gap-[12px]">
                    <span className={`tw-text-[16px] ${item.apr >= 0 ? "tw-text-[#00FF40]" : "tw-text-red-500"}`}>
                      <i className={`tw-pr-[2px] tw-text-[14px] fa-solid ${item.apr >= 0 ? "fa-arrow-up-long" : "fa-arrow-down-long"}`}></i>
                      {item.apr}%
                    </span>
                  </div>
                </div>
                {/* Separator */}
                <div className="tw-w-full tw-h-[1px] tw-bg-[#424242]"></div>
                {/* Separator */}

                <div className="tw-flex tw-justify-between tw-flex-wrap tw-gap-[16px]">
                  <h6 className="tw-text-[16px]">Rewards</h6>
                  <div className="tw-flex tw-flex-col tw-gap-[12px]">
                    <span className="tw-text-[16px]">${item.rewards}</span>
                  </div>
                </div>
                {/* Separator */}
                <div className="tw-w-full tw-h-[1px] tw-bg-[#424242]"></div>
                {/* Separator */}

                <div className="tw-flex tw-justify-between tw-flex-wrap tw-gap-[16px]">
                  <h6 className="tw-text-[16px]">My Vote</h6>
                  <div className="tw-flex tw-flex-col tw-gap-[12px]">
                    <span className="tw-text-[16px]">{item.myVote}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex tw-w-full tw-flex-col md:tw-flex-row tw-items-end tw-justify-between tw-gap-[16px] tw-mt-[30px]">
              <SearchInput placeholder="Enter Vote %" hasSearchButton={false} additionalClassName="tw-w-full tw-max-w-full" additionalParentClassName="tw-w-full md:tw-w-[70%]" />
              <Button title="Max" isAnchor={false} className="dashboard-btn tw-max-w-full tw-w-[30%] tw-uppercase"/>
            </div>
          </BoxCard>
        ))}

        {/*Loading State*/}
        {loading && Array.from({ length: initialCount }, (_, index) => (
          <div key={index} className="loading-bg tw-min-h-[300px] md:tw-min-h-[400px]"></div>
        ))}

      </div>

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
DataCards.propTypes = {
  dataItems: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default DataCards;