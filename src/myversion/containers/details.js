import React,{Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component{
  render () {
    if(!this.props.insurance) {
      return (<p>Please choose offer</p>)
    }
    return (
      <div>
          <h2>{this.props.insurance.name}</h2>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return{
    insurance: state.active
  };
}
export default connect(mapStateToProps)(Details);
