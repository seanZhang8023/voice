import './style.css'
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import React, {Component} from 'react'
const Element = BannerAnim.Element;
import {PersonInfo, PlicyPlan, FinalPlan} from '../../components'
import {dataArray} from '../../constants/carInfo'


class PlicyContent extends Component {

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        {translateX: [0, 300], opacity: [1, 0]},
        {translateX: [0, -300], opacity: [1, 0]},
      ],
    };
    this.oneEnter = false;
  }


  componentDidMount() {
    let _this = this
    var div = document.getElementById("plicy-content");
    div.onmousedown = function (e) {
      var a1 = e.screenX;
      div.onmouseup = function (e) {
        var a2 = e.screenX;
        if (a1 > a2) {
          _this.state.showInt && _this.onLeft()
        }
        if (a1 < a2) {
          _this.state.showInt < dataArray.length - 1 && _this.onRight()
        }
      }
    }
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({delay: 300});
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      {translateX: [0, -300], opacity: [1, 0]},
      {translateX: [0, 300], opacity: [1, 0]},
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({showInt, imgAnim});
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      {translateX: [0, 300], opacity: [1, 0]},
      {translateX: [0, -300], opacity: [1, 0]},
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({showInt, imgAnim});
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };

  backFirst = () => {
    const imgAnim = [
      {translateX: [0, 300], opacity: [1, 0]},
      {translateX: [0, -300], opacity: [1, 0]},
    ];
    this.setState({showInt: 0, imgAnim});
    this.bannerImg.next();
    this.bannerText.next();
  }

  render() {
    const imgChildren = dataArray.map((item, i) => (
      <Element key={i} leaveChildHide>
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >

          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <img src={item.pic}/>
          </div>
        </QueueAnim>
      </Element>));
    const textChildren = dataArray.map((item, i) => {
      return (<Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          { i == 0 ? <PersonInfo onRight={this.onRight.bind(this)}/> : i == 1 ?
              <PlicyPlan onRight={this.onRight.bind(this)}/> : i == 2 ?
                <FinalPlan backFirst={this.backFirst.bind(this)}/> : " " }
        </QueueAnim>
      </Element>);
    });
    return (
      <div id="plicy-content">
        <div
          className={`${this.props.className}-wrapper`}
        >
          <div className={this.props.className}>
            <BannerAnim
              prefixCls={`${this.props.className}-img-wrapper`}
              style={{background: `url(${dataArray[this.state.showInt].background})`}}
              sync
              type="across"
              duration={1000}
              ease="easeInOutExpo"
              arrow={false}
              thumb={false}
              ref={(c) => {
                this.bannerImg = c;
              }}
              onChange={this.onChange}
              dragPlay={false}
            >
              {imgChildren}
            </BannerAnim>
            <BannerAnim
              prefixCls={`${this.props.className}-text-wrapper`}
              sync
              type="across"
              duration={1000}
              arrow={false}
              thumb={false}
              ease="easeInOutExpo"
              ref={(c) => {
                this.bannerText = c;
              }}
              onChange={this.onChange}
              dragPlay={false}
            >
              {textChildren}
            </BannerAnim>
          </div>
        </div>
      </div>);
  }
}

export default PlicyContent
