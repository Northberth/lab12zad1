import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import NoMatch from './components/NoMatch';
import US from './components/contact/US';
import PL from './components/contact/PL';
import DE from './components/contact/DE';
const Main = () => {
return (         
    <Routes>
    <Route index element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='services' element={<Services/>} />
    <Route path='contact' element={<Contact/>}>
        <Route path='us' element={<US/>}/>
        <Route path='pl' element={<PL/>}/>
        <Route path='de' element={<DE/>}/>
        <Route path="*" element={<NoMatch />} />
    </Route> 
    <Route path="*" element={<NoMatch />} />
  </Routes>
);
}
export default Main;