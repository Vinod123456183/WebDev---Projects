import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';

import './Styles/App.scss';
import './Styles/Header.scss'
import './Styles/Home.scss'
import './Styles/footer.scss'
import './Styles/Contact.scss'
import './Styles/Services.scss';
import './Styles/MediaQuery.scss';


// import './Styles/.scss'

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes >
        <Route path='/' element = {<Home />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/services' element = {<Services />}/>
      </Routes>
      <Footer />
    </Router>
  )
}
