const initHome = {
  contact: [],
  getId: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      contact: action.value,
    };
  }
  if (action.type === 'SET_ID') {
    return {
      ...state,
      getId: action.value,
    };
  }
  return state;
};
