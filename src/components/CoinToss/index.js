// Write your code here
import './index.css'

import {Component} from 'react'

const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    resultImg: headUrl,
  }

  getResult = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({total: prevState.total + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({head: prevState.head + 1}))
      this.setState({
        resultImg: headUrl,
      })
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
      this.setState({
        resultImg: tailUrl,
      })
    }
  }

  render() {
    const {total} = this.state
    const {head} = this.state
    const {tail} = this.state
    const {resultImg} = this.state

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <div className="img-container">
            <img src={resultImg} className="res-img" alt="toss result" />
            <button className="button" type="button" onClick={this.getResult}>
              Toss Coin
            </button>
          </div>
          <div className="result-container">
            <p className="result">Total:{total}</p>
            <br />
            <p className="result">Heads:{head}</p>
            <br />
            <p className="result">Tails:{tail}</p>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
