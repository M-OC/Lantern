'use strict';
const {extend} = require('lodash');

const {
  START_TRIP_SUCCESS,
  START_TRIP_ID,
  CHECK_IN,
  ADD_WAYPOINT,
  LOAD_TRIP,
  LOAD_ACTIVE_TRIP,
  RESET_DELAY,
  ADD_DESTINATION,
  ADD_START
} = require('../constants/action-types');

const initialState = {
  id: null,
  startTime: null,
  eta: null,
  overdueTime: null,
  origin: {},
  destination: {},
  waypoints: []
};

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case START_TRIP_SUCCESS:
      return extend({}, state, payload);
    case START_TRIP_ID:
      return extend({}, state, payload);
    case CHECK_IN:
      return null;
    case ADD_WAYPOINT:
      return extend({}, state, {waypoints:state.waypoints.concat([payload])});
      // return waypointReducer(state, {type, action});
    case LOAD_ACTIVE_TRIP:
      const nstate = extend({}, state, {
        id: payload.id,
        startTime: payload.startTime,
        eta: payload.eta,
        overdueTime: payload.overdueTime,
        origin: payload.origin,
        destination: payload.destination,
        waypoints: state.waypoints.concat(payload.waypoints)
      });
      console.log('IN THE REDUCER ACTIVE TRIP LOAD ACTIVE TRIP', nstate);
      return nstate;
    case RESET_DELAY:
      return extend({}, state, {endTime:new Date});
      // TO DO: DOUBLE CHECK THIS LOGIC
    case ADD_START:
      return extend({}, state, {origin:payload});
    case ADD_DESTINATION:
      return extend({}, state, {destination:payload})
    default:
      return state;
  }
}
