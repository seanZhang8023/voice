import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, DatePicker} from 'antd';
import './style.css'
class FinalPlan extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    console.log('挂载FinalPlan- ---------3333333333333333')
    document.getElementById("layout").style.background = `url(${"images/plicy/plicy-final-bg.png"})`
  }

  render() {
    return (
      <div className="plicy-final">
        <img className="plicy-final-pic" src="images/plicy/plicy-final-right.png"/>
        <img className="plicy-final-subtn" src="images/plicy/plicy-final-subtn.png"
             onClick={() => this.props.backFirst()}/>
      </div>
    )

  }
}

export default FinalPlan
