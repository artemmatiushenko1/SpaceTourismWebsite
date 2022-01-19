import React from 'react';

const Tab = ({ onSelect, content, className }) => {
  return (
    <li className={className} onClick={onSelect}>
      {content}
    </li>
  );
};

const Tabs = ({ data, onTabSelected, tabClassName, className, value }) => {
  return (
    <ul className={className}>
      {data.map((el, i) => (
        <Tab
          key={i}
          index={i}
          className={`${tabClassName} ${
            value === i ? tabClassName + '--active' : ''
          }`}
          onSelect={onTabSelected.bind(null, i)}
          content={el}
        />
      ))}
    </ul>
  );
};

export default Tabs;
