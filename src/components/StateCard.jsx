const React = require('react')

const StateCard = (props) => (
  <div className='state-card'>
    <h3 className='text-center'>{props.stateName}</h3>
  </div>
)

StateCard.propTypes = {
  stateName: React.PropTypes.string.isRequired
}

module.exports = StateCard
