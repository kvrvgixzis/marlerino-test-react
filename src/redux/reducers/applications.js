import { FETCH_APPLICATIONS } from '../types';

const initialState = {
  applications: [],
};

export const applications = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATIONS:
      return { ...state, applications: action.payload };
    default:
      return state;
  }
};
