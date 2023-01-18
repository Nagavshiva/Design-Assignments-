import data from "./data";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCaretRight } from "@fortawesome/free-solid-svg-icons";

const NestedList = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleClick = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };

  const renderList = (items, level = 1) => {
    return items.map((item) => {
      return (
        <React.Fragment key={item.id}>
        <div className="nest-container">
        <div style={{ marginLeft: `${level * 20}px` }} className="nest">
            {item.name}
            {item.children && (
              <FontAwesomeIcon
                icon={expandedItems.includes(item) ? faCaretDown : faCaretRight}
                onClick={() => handleClick(item)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {expandedItems.includes(item) &&
            item.children &&
            renderList(item.children, level + 1)}
        </div>
        </React.Fragment>
      );
    });
  };

  return <div>{renderList(data)}</div>;
};
export default NestedList;