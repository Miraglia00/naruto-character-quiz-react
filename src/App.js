import Main from './views/Main.js'
import StartGame from './views/StartGame.js'
import Settings from './views/Settings.js'
import About from './views/About.js'
import Game from './views/Game.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {QuestionsProvider} from './states/QuestionsContext.js'
import {GameProvider} from './states/GameContext'
import Loader from './components/Loader.js'
import PopUp from './components/PopUp.js'
import Header from './components/Header.js'

import {useContext} from 'react'
import { SettingsContext } from './states/SettingsContext.js'

const App = () => {

  const [getSettings, setSettings] = useContext(SettingsContext)

  return (
    <div className="container-fluid">
      <GameProvider>
      <Loader />
      <PopUp />
      <QuestionsProvider>
      <Router>
      <div className={`col-12 max-h d-flex flex-column ${(getSettings.popup.show || getSettings.loader) ? 'blur' : ''}`}>
        <div className="row">
          <Header />
        </div>
        <div className="row flex-grow-1">
          <Route path='/' exact render={(props) =>(
            <Main />
          )}>
          </Route>



          <Route path='/settings' component={Settings}></Route>
          <Route path='/about' component={About}></Route>

          <Route path='/start' component={StartGame}></Route>
          <Route path='/game' component={Game}></Route>
        </div>
      </div>
  
      </Router>
      </QuestionsProvider>
      </GameProvider>
    </div>
  );
}

export default App;
