import '../Styling/Homepage.css'
import { LandingPage } from "./HomepageComps/LandingPage";
import { Searchbar } from "./HomepageComps/Searchbar";
import { Navbar } from "./HomepageComps/Navbar";
import { AllHotels } from './HomepageComps/AllHotels';
import { Footer } from './HomepageComps/Footer';
import { OurThings } from './HomepageComps/OurThings';
export default function Homepage () {


    return (
      <div>
        <Navbar />
        <LandingPage />
        <Searchbar />
        <AllHotels />
        <OurThings /> 
        <Footer />
        </div>
    );
  }