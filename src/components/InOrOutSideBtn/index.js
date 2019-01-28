import './style.css'
import React, {Component} from 'react'
import {Button} from 'antd';

class InOrOutSideBtn extends Component {
  constructor(props) {
    super(props)
  }


  changeType(type) {
    this.props.changePic(type)

  }

  render() {
    const {changeShowType, showOutSide} = this.props
    let showBtn
    if (showOutSide) {
      showBtn = <span><button className="side-btn-left btn-checked-left" disabled={true}
                              onClick={this.changeType.bind(this, 'outSide')}>外观</button><button
        className="side-btn-right " onClick={this.changeType.bind(this, 'inSide')}>内饰</button></span>
    } else {
      showBtn = <span><button className="side-btn-left" onClick={this.changeType.bind(this, 'outSide')}>外观</button><button
        className="side-btn-right btn-checked-right" disabled={true}
        onClick={this.changeType.bind(this, 'inSide')}>内饰</button></span>
    }
    return (
      <div className="in-out-side-btn">
        {showBtn}
      </div>
    )


  }


}

export default InOrOutSideBtn
