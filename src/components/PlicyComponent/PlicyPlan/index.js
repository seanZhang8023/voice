import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, DatePicker} from 'antd';
import './style.css'
class PlicyPlan extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  componentDidMount() {
    console.log('挂载PlicyPlan- ---------66666666666666666')
    document.getElementById("layout").style.background = `url(${"images/plicy/plicy-plan-bg.png"})`
  }


  render() {
    return (
      <div className="plicy-plan">
        <img className="plicy-plan-pic" src="images/plicy/plicy-plan-text.png"/>
        <img className="plicy-plan-submit" onClick={() => this.props.onRight() } src="images/plicy/blue_btn.png"/>
      </div>
    )

  }
}

export default PlicyPlan
