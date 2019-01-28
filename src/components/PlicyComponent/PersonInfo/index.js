import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, DatePicker} from 'antd';
import moment from 'moment'
import {plicyCompany} from '../../../constants/carInfo'
import './style.css'
class PersonInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birthday: moment(),
    }
  }

  componentDidMount() {
    document.getElementById("layout").style.background = `url(${"images/plicy/plicy-Info-Bg.png"})`
  }

  dateChange(date) {
    this.setState({
      birthday: date
    });
  }


  render() {

    let plicy_Company = []
    for (let key in plicyCompany) {
      let oneCompany = plicyCompany[key]
      plicy_Company.push(<span className="plicy-info-company-span" key={key}><p><img src={oneCompany.image}
                                                                                     onClick={() => this.props.onRight()}/></p><p
        className="plicy-info-company-name">{oneCompany.name}</p></span>)
    }

    return (
      <div className="plicy-info">
        <div className="plicy-info-heder"><span className="plicy-info-title">优质保险公司</span><span
          className="plicy-info-span"><span className="plicy-info-span-small">北京</span><span
          className="plicy-info-span-small">上海</span><span className="plicy-info-span-small"><img
          src="images/plicy/city_btn.png"/></span></span></div>
        <div className="plicy-info-heder-pic"><img className="plicy-info-heder-pic-img"
                                                   src="images/plicy/plicy-info-heder.png"/></div>
        <div className="plicy-info-company">{plicy_Company}</div>
      </div>
    )

  }
}

export default PersonInfo
