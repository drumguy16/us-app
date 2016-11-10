const React = require('react')
const {Link} = require('react-router')

const Layout = (props) => (
  <div className='app-container'>
    <div className='header-container'>
      <header>
        <nav className='main-nav'>
          <ul>
            <li>
              <Link to='/' className='brand'>Home</Link>
            </li>
            <li>
              <Link to='state-capitals' className='nav-link'>State Capitals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    {props.children}
  </div>
)

const {element} = React.PropTypes

Layout.propTypes = {
  children: element
}

module.exports = Layout
