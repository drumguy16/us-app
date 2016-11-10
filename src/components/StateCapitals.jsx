const React = require('react')
const capitals = require('../../public/data/capitals.json')
const StateCard = require('./StateCard')

const StateCapitals = React.createClass({
  render () {
    return (
      <div className='state-pile'>
        {capitals.states.map((state) => (
          <StateCard state={state.state} key={state.key} />
        ))}
      </div>
    )
  }
})

module.exports = StateCapitals
