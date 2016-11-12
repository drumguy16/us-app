const React = require('react')
const capitals = require('../../public/data/capitals.json')
const {Row, Col} = require('react-bootstrap')
const CapitalCard = require('./CapitalCard')
const StateCard = require('./StateCard')

const capitalsPile = capitals.states
const statesPile = capitals.states.slice()
const cardShuffle = (pile) => (
  pile.sort(() => (0.5 - Math.random()))
)

const StateCapitals = React.createClass({
  getInitialState () {
    return {
      capitalsPile: cardShuffle(capitalsPile), // refactor way of abstracting this method out to prevent duplicated code
      statesPile: cardShuffle(statesPile),
      topCard: statesPile[statesPile.length - 1]
    }
  },
  _handleClick (clickedCardId) {
    if (clickedCardId === this.state.topCard.key) {
      this.state.statesPile.pop()
      this.setState({
        statesPile: this.state.statesPile,
        topCard: this.state.statesPile[this.state.statesPile.length - 1]
      })
    } else {
      alert("you're fucking wrong")
    }
  },
  render () {
    return (
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
            if (this.state.topCard.id === stateCard.id) {
              return <CapitalCard capital={stateCard.capital} id={stateCard.key} handleClick={this._handleClick} key={stateCard.key} correct />
            } else {
              return <CapitalCard capital={stateCard.capital} id={stateCard.key} handleClick={this._handleClick} key={stateCard.key} />
            }
          })}
        </Row>
      </div>
    )
  }
})

module.exports = StateCapitals
