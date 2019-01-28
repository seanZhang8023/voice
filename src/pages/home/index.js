import './style.css'
import React, {Component} from 'react'
import {Card, Col, Row, Carousel} from 'antd';
import Link from 'umi/link'
class MainWeb extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    document.getElementById("layout").style.background = `url(${"images/home_bg.jpg"})`
  }

  render() {
    return (
      <div className="mainWeb-Container" id="mainWeb-Container">
        <div className="mainWeb-content">
          <Row gutter={128}>
            <Col span={8}>
              <Link to="/vr">
                <Card
                  bordered={false}
                  cover={<img className="mainWeb-content-pic" src="images/mainWeb/main-1.png"/>}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to="/plicy">
                <Card
                  bordered={false}
                  cover={<img className="mainWeb-content-pic" src="images/mainWeb/main-2.png"/>}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to="/other">
                <Card
                  bordered={false}
                  cover={<img className="mainWeb-content-pic" src="images/mainWeb/main-3.png"/>}
                >
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    )


  }


}

export default MainWeb
