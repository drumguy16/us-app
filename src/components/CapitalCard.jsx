const React = require('react')
import {Col} from 'react-bootstrap'

const CapitalCard = React.createClass({
  propTypes: {
    capital: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    correct: React.PropTypes.bool.isRequired,
    handleClick: React.PropTypes.func.isRequired
  },
  handleClick () {
    this.props.handleClick(this.props.id)
  },
  render (props) {
    return (
      <Col sm={6} md={3} lg={2}>
        <button className='lead' onClick={this.handleClick}>{this.props.capital}</button>
      </Col>
    )
  }
})

module.exports = CapitalCard
