import { combineReducers } from 'redux';
import courses from './coursesreducer'

const rootReducer = combineReducers({
    courses
});

export default rootReducer;