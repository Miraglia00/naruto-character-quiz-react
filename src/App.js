import Main from './views/Main.js'
import StartGame from './views/StartGame.js'
import Settings from './views/Settings.js'
import About from './views/About.js'
import GameTitle from './components/GameTitle.js'
import Game from './views/Game.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SoundComponent from './components/SoundComponent.js'
import {SettingsProvider} from './states/SettingsContext.js'
import {QuestionsProvider} from './states/QuestionsContext.js'
import {GameProvider} from './states/GameContext'
import BackButtonComponent from './components/BackButtonComponent.js'
import Loader from './components/Loader.js'
import PopUp from './components/PopUp.js'

const App = () => {

  return (
    <div class="container">
      <SettingsProvider>
      <GameProvider>
      <Loader />
      <PopUp />
      <QuestionsProvider>
      <Router>
        <section className='header'>
          <BackButtonComponent />
          <GameTitle />
          <SoundComponent />
        </section>

        <Route path='/' exact render={(props) =>(
          <Main />
        )}>
        </Route>


      
        <Route path='/settings' component={Settings}></Route>
        <Route path='/about' component={About}></Route>
        
        <Route path='/start' component={StartGame}></Route>
        <Route path='/game' component={Game}></Route>


          
      </Router>
      </QuestionsProvider>
      </GameProvider>
      </SettingsProvider>
    </div>
  );
}

export default App;
