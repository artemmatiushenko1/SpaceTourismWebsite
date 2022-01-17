import React, { useState } from 'react';

const Tab = ({ onSelect, index, content, className }) => {
  return (
    <li className={className} onClick={onSelect.bind(null, index)}>
      {content}
    </li>
  );
};

const Tabs = ({ data, onTabSelected, tabClassName, className }) => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabSelectHandler = (id) => {
    setActiveTab(id);
    onTabSelected(id);
  };

  return (
    <ul className={className}>
      {data.map((el, i) => (
        <Tab
          key={i}
          index={i}
          className={`${tabClassName} ${
            activeTab === i ? tabClassName + '--active' : ''
          }`}
          onSelect={onTabSelectHandler}
          content={el}
        />
      ))}
    </ul>
  );
};

export default Tabs;
