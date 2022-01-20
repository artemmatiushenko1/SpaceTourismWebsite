import React, { useReducer, useEffect } from 'react';
import tabsReducer from 'reducers/tabs-reducer';

const Tab = ({ onSelect, content, className }) => {
  return (
    <li className={className} onClick={onSelect}>
      {content}
    </li>
  );
};

const Tabs = ({ data, onChange, tabClassName, className, value }) => {
  const initialTabsState = {
    activeTabIndex: value,
    maxTabIndex: data.length - 1,
  };

  const [state, dispatch] = useReducer(tabsReducer, initialTabsState);

  const onTabSelectedHandler = (index) => {
    dispatch({ type: 'TAB_SELECTED', value: index });
  };

  useEffect(() => {
    onChange(state.activeTabIndex);
  }, [state.activeTabIndex, onChange]);

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

  return (
    <ul className={className}>
      {data.map((el, i) => (
        <Tab
          key={i}
          index={i}
          className={`${tabClassName} ${
            state.activeTabIndex === i ? tabClassName + '--active' : ''
          }`}
          onSelect={onTabSelectedHandler.bind(null, i)}
          content={el}
        />
      ))}
    </ul>
  );
};

export default Tabs;
