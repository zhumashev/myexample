import React from 'react';
import List from '../containers/List';
import Details from '../containers/details';

const ListIns = () => (
  <div className="containers">
      <div className="row">
        <div className="col-4">
        <label>Choose bids</label>
          <List/>
        </div>
        <div className="col-7 text-right">
        <label>Your choice </label>
          <Details/>
          <div className="btn btn-primary">Submit</div>
        </div>
      </div>
  </div>
);
export default ListIns;
