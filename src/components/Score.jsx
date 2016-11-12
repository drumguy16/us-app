const React = require('react')

const Score = (props) => (
  <div className='score-container'>
    <h3 className='score text-center'>{props.score}</h3>
  </div>
)

Score.propTypes = {
  score: React.PropTypes.number.isRequired
}

module.exports = Score
