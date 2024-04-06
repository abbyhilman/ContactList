const iniStateNewContact = {
  firstName: '',
  lastName: '',
  age: null,
  photo: '',
};

export const contactReducer = (state = iniStateNewContact, action) => {
  if (action.type === 'SET_NEWCONTACT') {
    return {
      ...state,
      firstName: action.value,
      lastName: action.value,
      age: action.value,
      photo: action.value,
    };
  }

  if (action.type === 'SET_EDITCONTACT') {
    return {
      ...state,
      firstName: action.value,
      lastName: action.value,
      age: action.value,
      photo: action.value,
    };
  }

  return state;
};
