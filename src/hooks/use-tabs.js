import { useState } from 'react';

const useTabs = (data) => {
  const [tabData, setTabData] = useState(data[0]);

  const onTabSelectedHandler = (index) => {
    setTabData(data[index]);
  };

  return {
    tabData,
    onTabSelectedHandler,
  };
};

export default useTabs;
