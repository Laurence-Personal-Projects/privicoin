import PropTypes from "prop-types";

const RoadMapList = ({ itemList = [] }) => {
  return (
    <div className="road-map-timeline">
      {itemList.map((item, index) => (
        <div className="road-map-faq-box" key={index}>
          <h4 dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, "<br>") }} />
          <ul className="road-map-list">
            {item.mapList.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// PropTypes
RoadMapList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      mapList: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};

export default RoadMapList;