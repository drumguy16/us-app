const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const {Router, Route, browserHistory, IndexRoute} = ReactRouter
const Layout = require('./components/Layout')
const Home = require('./components/Home')
const StateCapitals = require('./components/StateCapitals')
const CivicsQuiz = require('./components/CivicsQuiz')
const CivicsInstructions = require('./components/CivicsInstructions')
const CivicsQuestions = require('./components/CivicsQuestions')

const App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Home} />
          <Route path='state-capitals' component={StateCapitals} />
          <Route path='civics-quiz' component={CivicsQuiz}>
            <IndexRoute component={CivicsInstructions} />
            <Route path='/quiz' component={CivicsQuestions} />
          </Route>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
