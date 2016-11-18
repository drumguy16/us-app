const React = require('react')
const capitals = require('../../public/data/capitals.json')
const {Row, Col} = require('react-bootstrap')
const CapitalCard = require('./CapitalCard')
const StateCard = require('./StateCard')
const Score = require('./Score')
const GameEnd = require('./GameEnd')

const cardShuffle = (pile) => (
  pile.sort(() => (0.5 - Math.random()))
)
const stateCapitalsDeck = capitals.states
const maxIncorrect = 0.3 * stateCapitalsDeck.length
const winMessage = 'Fart Box!'
const failMessage = 'Shit Snacks!'

const StateCapitals = React.createClass({
  getInitialState () {
    const capitalsPile = stateCapitalsDeck
    const statesPile = stateCapitalsDeck.slice()

    return {
      capitalsPile: cardShuffle(capitalsPile), // refactor way of abstracting this method out to prevent duplicated code
      statesPile: cardShuffle(statesPile),
      topCard: statesPile[statesPile.length - 1],
      correctScore: 0,
      incorrectScore: 0,
      message: '',
      inPlay: true
    }
  },
  _handleClick (clickedCardId) {
    if (clickedCardId === this.state.topCard.key) {
      this.state.statesPile.pop()
      this.state.correctScore += 1
      this.setState({
        correctScore: this.state.correctScore,
        topCard: this.state.statesPile[this.state.statesPile.length - 1],
        statesPile: this.state.statesPile
      })
      if (this.state.correctScore === stateCapitalsDeck.length) {
        this.setState({
          message: winMessage,
          inPlay: false
        })
        this.clearBoard()
      }
    } else {
      this.state.incorrectScore += 1
      this.setState({incorrectScore: this.state.incorrectScore})
      if (this.state.incorrectScore > maxIncorrect) {
        this.setState({
          message: failMessage,
          inPlay: false
        })
        this.clearBoard()
      }
    }
  },
  clearBoard () {
    this.setState({
      capitalsPile: [],
      statesPile: []
    })
  },
  gameReset () {
    this.setState(this.getInitialState)
  },
  render () {
    let partial
    if (this.state.inPlay) {
      partial = (
        <div>
          <Row className='state-pile'>
            <Col sm={4} smOffset={4}>
              {this.state.statesPile.map((stateCard) => (
                <StateCard stateName={stateCard.stateName} id={stateCard.key} key={stateCard.key} /> // refactor this repeated code
              ))}
            </Col>
          </Row>
          <Row>
            {this.state.capitalsPile.map((stateCard) => {
              if (this.state.topCard.key === stateCard.key) {
                return <CapitalCard capital={stateCard.capital} id={stateCard.key} handleClick={this._handleClick} key={stateCard.key} correct />
              } else {
                return <CapitalCard capital={stateCard.capital} id={stateCard.key} handleClick={this._handleClick} key={stateCard.key} />
              }
            })}
          </Row>
        </div>
      )
    } else {
      partial = (
        <GameEnd message={this.state.message} reset={this.gameReset} />
      )
    }
    return (
      <div id='state-game'>
        <Row>
          <Col sm={3}>
            <Score score={this.state.correctScore} />
          </Col>
          <Col sm={3} smOffset={6}>
            <Score score={this.state.incorrectScore} />
          </Col>
        </Row>
        {partial}
      </div>
    )
  }
})

module.exports = StateCapitals
