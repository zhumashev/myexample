import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active'
const allReducers = combineReducers({
  car: CarsReducers,
  active: ActiveCar
  
});
export default allReducers;
