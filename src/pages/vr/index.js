import './style.css'
import React, {Component} from 'react'
import {VRCarContent, RightInfoErea, CarFooter} from '../../components'
import {defaultValue,car_Color} from '../../constants/carInfo'
class NewCarContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carBrand: "Oddey",
      carType: "A6L",
      carColor: "silver",
      showOutSide: true //默认外观
    }
  }

  componentDidMount() {
    console.log('挂载NewCarContent- ---------1111111111111111')
    document.getElementById("layout").style.background = `url(${"images/VR/vr-bg.png"})`
  }

  onChangeCarType(type) {
    const {carBrand} = this.state
    let color_arr = car_Color[carBrand]
    if(carBrand=="Oddey") color_arr = color_arr[type]
     let _carColor = color_arr[0]
    this.setState({
      carType: type,
      carColor:_carColor
    })
  }

  onChangeCarColor(type) {
    this.setState({
      carColor: type
    })
  }

  onChangeCarBrand(type) {
    let {carType, carColor} = defaultValue[type]
    this.setState({
      carBrand: type,
      carType,
      carColor
    })
  }

  onChangeInOrOutSide(type) {
    let showOutSide
    if (type == 'inSide') {
      showOutSide = false
    } else {
      showOutSide = true
    }
    this.setState({
      showOutSide
    })
  }

  render() {
    const {carBrand, carType, carColor, showOutSide} = this.state
    const {changeShowType} = this.props

    return (
      <div className="newCar-container">
        <div className="newCar-container-body">
          <div className="newCar-container-vr"><VRCarContent key={carType + carColor + showOutSide} carBrand={carBrand}
                                                             carType={carType} showOutSide={showOutSide}
                                                             carColor={carColor} changeShowType={changeShowType}
                                                             onChangeCarColor={this.onChangeCarColor.bind(this)}
                                                             picInOrOutSide={this.onChangeInOrOutSide.bind(this)}/>
          </div>
          <div className="newCar-container-info"><RightInfoErea key={carBrand} carBrand={carBrand}/></div>
        </div>
        <div className="newCar-container-foot">
          <CarFooter carBrand={carBrand} carType={carType} showOutSide={showOutSide} carColor={carColor}
                     onChangeCarType={this.onChangeCarType.bind(this)}
                     onChangeCarColor={this.onChangeCarColor.bind(this)}
                     onChangeCarBrand={this.onChangeCarBrand.bind(this)}/>
        </div>
      </div>

    )


  }


}

export default NewCarContent
