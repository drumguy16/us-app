const React = require('react')
const {Button} = require('react-bootstrap')

const GameEnd = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    reset: React.PropTypes.func.isRequired
  },
  render (props) {
    return (
      <div className='game-end'>
        <h1>{this.props.message}</h1>
        <Button bsSize='large' bsStyle='info' onClick={this.props.reset} >Play Again?</Button>
      </div>
    )
  }
})

module.exports = GameEnd
