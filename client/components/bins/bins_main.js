import React, {Component} from 'react';

class BinsMain extends Component{
  render(){
      console.log(this.props.params.binId);
      return(
      <div>BinsMain</div>
      );
  }
}

export default BinsMain;