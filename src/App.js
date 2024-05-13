import Navbars from './component/Navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Destinations } from './component/Destination';
import TourPackages from './component/TourPackages';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';
import Marquee from './component/Marquee';
import FooterAll from './component/FooterAl';

function App() {
  return (
   <div className='alok'>
<Navbars/>
<Destinations />
<TourPackages/>
<Testimonials/>
<Contact/>
<Marquee/>
<FooterAll/>
</div>
  );
}

export default App;
