import * as ActionTypes from '../actionTypes/actions';
// The above import takes care of importing all action types.


export const setDetails = (data) => {
  return {
    type: ActionTypes.DETAILS,
    payload: {data}
  };
};

export const filterWorlds = (endpoint, key) => {
  return {
    type: ActionTypes.FILTER_WORLDS,
    payload: {endpoint, key}
  };
};

export const filterFilms = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_FILMS,
    payload: {endpoints: endpoint, key}
  };
};

export const filterStarships = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_STARSHIPS,
    payload: {endpoints: endpoint, key}
  };
};

export const stateReset = (key) => {
  return {
    type: ActionTypes.RESET,
    payload: {key}
  };
};
