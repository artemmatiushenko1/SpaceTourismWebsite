const tabsReducer = (state, action) => {
  switch (action.type) {
    case 'TAB_SELECTED': {
      return { ...state, activeTabIndex: action.value };
    }
    case 'KEYDOWN_RIGHT': {
      const updatedTabIndex = state.activeTabIndex + 1;
      if (updatedTabIndex > state.maxTabIndex)
        return { ...state, activeTabIndex: 0 };
      return { ...state, activeTabIndex: updatedTabIndex };
    }
    case 'KEYDOWN_LEFT': {
      const updatedTabIndex = state.activeTabIndex - 1;
      if (updatedTabIndex < 0)
        return { ...state, activeTabIndex: state.maxTabIndex };
      return { ...state, activeTabIndex: updatedTabIndex };
    }
    default: {
      return state;
    }
  }
};

export default tabsReducer;
