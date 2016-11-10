const React = require('react')

const StateCard = (props) => (
  <div className='state-card'>
    <h3 className='state-name'>{props.state}</h3>
  </div>
)

StateCard.propTypes = {
  state: React.PropTypes.string.isRequired
}

module.exports = StateCard
