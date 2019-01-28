import React, {Component} from 'react'
import './index.css'
import Link from 'umi/link'
export default class Index extends Component {

  render() {
    return (
      <div className="Poster-page">
        <div className="Poster-content">
          <h3>云瀚股份</h3>
          <h1>Voice 平台</h1>
          <Link to="/home">
            <button>点击进入</button>
          </Link>
        </div>
      </div>
    )
  }
}


