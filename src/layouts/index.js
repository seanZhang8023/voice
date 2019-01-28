import React, {Component} from 'react'
import BaseLayout from './baseLayout';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

class LayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }


  render() {
    return (
      <React.Fragment>
        <LocaleProvider locale={zh_CN}>
          <BaseLayout {...this.props} />
        </LocaleProvider>
      </React.Fragment>
    )
  }
}

export default LayOut
