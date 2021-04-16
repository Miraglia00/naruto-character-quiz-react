import Main from './views/Main.js'
import StartGame from './views/StartGame.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='full-page'>
        <Route path='/' exact render={(props)=>(
          <Main />
        )}>
        </Route>

        <Route path='/start' component={StartGame}></Route>
      </div>
    </Router>
  );
}

export default App;
