import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Film from './film/Film'

function App() {
  return (
    <div className='app'>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/film' element={<Film />} />
      </Routes>
    </div>
  );
}

export default App;