import './style.css'
import React, {Component} from 'react'
import {Card, Col, Row, Modal} from 'antd';

class OtherContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      openFirst: true
    }

  }

  showModal = () => {
    this.setState({
      visible: true,
      openFirst: false
    });
  }

  hideModal = () => {
    this.setState({
      visible: false
    });
  }

  componentDidUpdate(preProps, preState) {
    const {openFirst} = preState
    const {visible} = this.state
    if (!openFirst) {
      var myVideo = document.getElementById("my_video")
      if (!visible) {
        myVideo.pause()
      } else {
        myVideo.play();
      }
    }
  }


  componentDidMount() {
    console.log('挂载OtherContent- ---------555555555555555555')
    document.getElementById("layout").style.background = `url(${"images/other/other-bg.png"})`
  }

  render() {
    return (
      <div className="other-Container" key="other">
        <div className="other-content">
          <Row gutter={24}>
            <Col span={8}>
              <Card
                bordered={false}
                onClick={this.showModal.bind(this)}
                cover={<img alt="example" src="images/other/other-1.png"/>}
              >
              </Card>
            </Col>
            <Col span={8}>
              <Card
                bordered={false}
                cover={<img alt="example" src="images/other/other-2.png"/>}
              >
              </Card>
            </Col>
            <Col span={8}>
              <Card
                bordered={false}
                cover={<img alt="example" src="images/other/other-3.png"/>}
              >
              </Card>
            </Col>
          </Row>
        </div>
        <Modal
          footer={[]}
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          wrapClassName="other-Container-modal"
          key="video_Modal"
        >
          <video id="my_video" width="1660" height="900" controls="controls" autoPlay="autoPlay">
            <source src="video/Benz-AMG.mp4" type="video/mp4"/>
          </video>
        </Modal>
      </div>
    )


  }


}

export default OtherContent
