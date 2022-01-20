import { useState, useCallback } from 'react';

const useTabs = (defaultTabIndex) => {
  const [activeTab, setActiveTab] = useState(defaultTabIndex);
  const onTabChangeHandler = useCallback((tabIndex) => {
    setActiveTab(tabIndex);
  }, []);

  return {
    activeTab,
    onTabChangeHandler,
  };
};

export default useTabs;
