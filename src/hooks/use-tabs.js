import { useEffect, useReducer } from 'react';
import tabsReducer from '../reducers/tabs-reducer';

const useTabs = (data) => {
  const initialTabsState = { activeTabIndex: 0, maxTabIndex: data.length - 1 };
  const [state, dispatch] = useReducer(tabsReducer, initialTabsState);

  const onTabSelectedHandler = (index) => {
    dispatch({ type: 'TAB_SELECTED', value: index });
  };

  useEffect(() => {
    const keydownHandlers = new Map([
      [39, dispatch.bind(null, { type: 'KEYDOWN_RIGHT' })],
      [37, dispatch.bind(null, { type: 'KEYDOWN_LEFT' })],
    ]);

    const onKeyDownHandler = ({ keyCode }) => {
      const handler = keydownHandlers.get(keyCode);
      if (!handler) return;
      handler();
    };

    document.addEventListener('keydown', onKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
    };
  }, []);

  return {
    tabIndex: state.activeTabIndex,
    onTabSelectedHandler,
  };
};

export default useTabs;
