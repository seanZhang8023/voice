import './style.css'
import React, {Component} from 'react'
import {Button, Popover, Tabs, Badge} from 'antd';
import {Link} from 'react-router';
import _ from 'lodash'
import {car_Type, car_Brand, carLogo, getCarTypeImg,car_type_Oddey} from '../../constants/carInfo'
const TabPane = Tabs.TabPane;

class CarFooter extends Component {
  constructor(props) {
    super(props)

  }


  changeCarBrand(type) {
    this.props.onChangeCarBrand(type)
  }

  changeCarType(type) {
    this.props.onChangeCarType(type)
  }

  changeCarColor(type) {
    this.props.onChangeCarColor(type)
  }

  render() {
    const {carBrand, carType} = this.props
    let carBrandContent = []
    _.forEach(car_Brand, (brand_item, brand_index) => {
      let one_car_type = car_Type[brand_item]
      let logo = carLogo[brand_item], carTypeContent = [], one_car_brand
      if (brand_index <= 3) {
        if (brand_item == carBrand) {
          one_car_brand = (
            <span key={brand_item} className="carBrand-span"><img className="carBrand-log checked" src={logo}/></span>)
          _.forEach(one_car_type, (item, index) => {
            let car_Type_Logo = getCarTypeImg(brand_item, item)
            if(carBrand=="Oddey"){
              let back_position = car_type_Oddey[item]
              if (item == carType) {
                carTypeContent.push(<span key={item + index} className="car-type-log1 car_checked" style={{backgroundPosition:back_position}}/>)
              } else{
                carTypeContent.push(<span key={item + index} className="car-type-log1" onClick={this.changeCarType.bind(this,item)} style={{backgroundPosition:back_position}}/>)
              }
            }else {
              if (item == carType) {
                carTypeContent.push(<span key={item + index}><img className="car-type-log0 car_checked" src={car_Type_Logo}/></span>)
              } else {
                carTypeContent.push(<span key={item + index} className="car-type-span"><Badge count={"未上线"}><img
                  className="car-type-log0 checked" src={car_Type_Logo}/></Badge></span>)
              }
            }
          })

        } else {
          one_car_brand = (<span key={brand_item + brand_index} className="carBrand-span"
                                 onClick={this.changeCarBrand.bind(this, brand_item)}><img className="carBrand-log"
                                                                                           src={logo}/></span>)
        }
        carBrandContent.push(<TabPane className="tab-panel" tab={one_car_brand} key={brand_item}>
          <div className="tab-panel-div">{carTypeContent}</div>
        </TabPane>)
      } else {
        one_car_brand = (<span key={brand_item + brand_index} className="carBrand-span"><Badge count={"未上线"}
                                                                                               style={{background: "#989a97"}}><img
          className="carBrand-log" src={logo}/></Badge></span>)
        carBrandContent.push(<TabPane className="tab-panel" disabled tab={one_car_brand} key={brand_item}>
          {carTypeContent}
        </TabPane>)
      }

    })
    let tabContent = (<Tabs tabPosition="bottom" defaultActiveKey={carBrand}>
      {carBrandContent}
    </Tabs>)
    console.log("车辆类型---5555555555555", carBrandContent)
    return (
      <div className="car-footer">
        {tabContent}
      </div>
    )


  }


}

export default CarFooter
