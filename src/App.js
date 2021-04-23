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
    <SettingsProvider>
    <GameProvider>
    <Loader />
    <PopUp />
    <Router>
      <div className='xs:container bg-image tracking-wide h-screen flex flex-col items-stretch'>
      <GameTitle />
      <SoundComponent />
      

      <Route path='/' exact render={(props) =>(
        <Main />
      )}>
      </Route>


     
      <Route path='/settings' component={Settings}></Route>
      <Route path='/about' component={About}></Route>
      <QuestionsProvider>
        <BackButtonComponent />
        <Route path='/start' component={StartGame}></Route>
        <Route path='/game' component={Game}></Route>
      </QuestionsProvider>


        
      </div>
    </Router>
    </GameProvider>
    </SettingsProvider>
  );
}

export default App;
