import Main from './views/Main.js'
import StartGame from './views/StartGame.js'
import Settings from './views/Settings.js'
import About from './views/About.js'
import GameTitle from './components/GameTitle.js'
import Game from './views/Game.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SoundComponent from './components/SoundComponent.js'
import {SettingsProvider} from './states/SettingsContext.js'
import BackButtonComponent from './components/BackButtonComponent.js'

const App = () => {

  return (
    <SettingsProvider>
    <Router>
      <div className='xs:container bg-image tracking-wide h-screen flex flex-col items-stretch'>
      <GameTitle />
      <SoundComponent />
      <BackButtonComponent />

      <Route path='/' exact render={(props) =>(
        <Main /> //MAINBE VMIERT HATALMAS A KEPERENYO,VAN SCROLL, KITOLJA A SOUND GOMBOT SZELERE
      )}>
      </Route>


      <Route path='/start' component={StartGame}></Route>
      <Route path='/settings' component={Settings}></Route>
      <Route path='/about' component={About}></Route>

      <Route path='/game' component={Game}></Route>

        
      </div>
    </Router>
    </SettingsProvider>
  );
}

export default App;
