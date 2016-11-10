const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const {Router, Route, hashHistory, IndexRoute} = ReactRouter
const Layout = require('./components/Layout')
const Home = require('./components/Home')
const StateCapitals = require('./components/StateCapitals')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Home} />
          <Route path='state-capitals' component={StateCapitals} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
