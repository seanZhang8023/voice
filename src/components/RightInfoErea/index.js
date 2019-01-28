import './style.css'
import React, {Component} from 'react'
import {Popover} from 'antd';
import {getCarShopInfo} from '../../constants/carInfo'


//新车展示页面  右侧画面
class RightInfoErea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }

  }

  submit() {
    Message.info('您的预约申请已成功提交！')
  }

  cancel(e) {
    console.log(e);
  }


  render() {
    const {carBrand} = this.props
    let PopoverContent = (<div>
      <img src="images/VR/rightErea/OR-Code.png"/>
    </div>)


    return (
      <div className="rightInfoErea">
        <div className="rightInfoErea-content">
          <div id="rightInfoErea-pover-1" className="rightInfoErea-pover-1">
            <Popover
              getPopupContainer={() => document.getElementById("rightInfoErea-pover-1")}
              placement="left"
              content={PopoverContent}
              trigger="click"
              key={`${carBrand}-1`}
            ><img className="rightInfoErea-img" src={getCarShopInfo(carBrand, 1)}/></Popover>
          </div>
          <div id="rightInfoErea-pover-2">
            <Popover
              getPopupContainer={() => document.getElementById("rightInfoErea-pover-2")}
              placement="left"
              content={PopoverContent}
              trigger="click"
              key={`${carBrand}-2`}
              className="rightInfoErea-pover-2"
            ><img className="rightInfoErea-img" src={getCarShopInfo(carBrand, 2)}/></Popover>
          </div>
          <div id="rightInfoErea-pover-3">
            <Popover
              getPopupContainer={() => document.getElementById("rightInfoErea-pover-3")}
              placement="left"
              content={PopoverContent}
              trigger="click"
              key={`${carBrand}-3`}
              className="rightInfoErea-pover-3"
            ><img className="rightInfoErea-img" src={getCarShopInfo(carBrand, 3)}/></Popover>
          </div>
          <img className="rightInfoErea-banner" src="images/VR/rightErea/banner.png"/>
        </div>
      </div>
    )


  }


}

export default RightInfoErea
