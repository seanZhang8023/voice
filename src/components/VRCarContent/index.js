import './style.css'
import React, {Component} from 'react'
import {Card, Col, Row, Button, Icon} from 'antd';
import {InOrOutSideBtn} from '../../components'
import {car_Color, getCarInsidePics, getCarOutSidePics} from '../../constants/carInfo'
import _ from 'lodash'
//新车展示页面 左侧画面
class VRCarContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInSide: false,//是否显示车辆内饰, 默认显示车辆外观
      isFullScreen: false // /检测全屏状态
    }

  }


  componentDidMount() {

    const {carBrand, carType, carColor, showOutSide} = this.props

    if (showOutSide) {  //外观
      let src = getCarOutSidePics(carBrand,carType, carColor)
      document.getElementById('container1').src = src
      document.getElementById('container1').style.display = ""

    } else { //内饰
      let src = getCarInsidePics(carBrand,carType)
      document.getElementById('container1').src = src
      document.getElementById('container1').style.display = ""

    }
    document.getElementById("layout").style.background = `url(${"images/VR/vr-bg.png"})`
  }

  changeCarColor(type) {
    this.props.onChangeCarColor(type)
  }

  render() {
    const {carBrand, carType, carColor, changeShowType, picInOrOutSide, showOutSide} = this.props
    let carColorContent = []
    let one_car_color = car_Color[carBrand]
    if(carBrand=="Oddey") one_car_color=one_car_color[carType]
    if (showOutSide) {
      _.forEach(one_car_color, item => {
        if (item == carColor) {
          carColorContent.push(<span key={item}><img className="car-color" src={`images/VR/color/${item}.png`}/></span>)
        } else {
          carColorContent.push(<span key={item} onClick={this.changeCarColor.bind(this, item)}><img
            className="car-color" src={`images/VR/color/${item}.png`}/></span>)
        }

      })
    }
    return (
      <div className="VR-content" id="VR-content">
        <InOrOutSideBtn changePic={picInOrOutSide} className="in-out-btn" changeShowType={changeShowType}
                        showOutSide={showOutSide}/>
        <iframe id="container1"
                allowFullScreen
                className="VR-content-iframe"
                style={{display: 'none'}}
                scrolling="no"
        />
        <div className="color-changer-div">{carColorContent}</div>
      </div>

    )

  }


}

export default VRCarContent
