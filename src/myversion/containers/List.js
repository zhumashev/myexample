import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'

class List extends Component {
  showList() {
    return this.props.insurance.map((insurance) => {
      return (
          <li onClick={() => this.props.select(insurance)} key = {insurance.id}> {insurance.name} </li>
      );
    });
  }

  render() {
    return (
      <ol>
          {this.showList()}
       </ol>
    );
  }
}

function mapStateToProps (state) {
  return{
    insurance: state.insurance
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select},dispatch)
}

export default connect (mapStateToProps,matchDispatchToProps)(List);
