import {combineReducers} from 'redux';
import InsuranceReducers from './insurance';
import InsuranceActive from './insurance-active'
const allReducers = combineReducers({
  insurance: InsuranceReducers,
  active: InsuranceActive

});
export default allReducers;
