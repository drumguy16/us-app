const React = require('react')
const {Link} = require('react-router')

const CivicsQuiz = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  getInitialState () {
    return {}
  },
  render () {
    return (
      <div className='civics-wrapper'>
        <nav className='secondary-nav'>
          <ul>
            <li>
              <Link to='/civics-quiz'>Instructions</Link>
            </li>
            <li>
              <Link to='/quiz'>Take Quiz</Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
})

module.exports = CivicsQuiz
