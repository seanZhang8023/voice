import React, {Component, PropTypes} from 'react'
import './style.css'
import {Icon} from 'antd'
import Link from 'umi/link'
class BaseLayOut extends Component {
  constructor(props) {
    super(props);
    console.log("constructor App", props.location.pathname);

  }


  render() {
    console.log('进入dashboard组件---------', this.props.location.pathname, this.props.children)
    let leftSide
    if (this.props.location.pathname == "/" || this.props.location.pathname == "/home") {
      leftSide = <div className="layout-content-left"></div>
    }
    else {
      leftSide = <div className="layout-content-left"><Link to="/home"><img src="images/backHome.png"/></Link></div>
    }

    return (
      <div className="layout" id="layout">
        <div className="layout-header"></div>
        <div className="layout-content">
          {leftSide}
          <div className="layout-content-mid">{this.props.children}</div>
          <div className="layout-content-right"></div>
        </div>
        <div className="layout-footer"></div>
      </div>
    )
  }
}


export default BaseLayOut
