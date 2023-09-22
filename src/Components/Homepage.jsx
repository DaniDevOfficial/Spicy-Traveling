import '../Styling/Homepage.css'
import { LandingPage } from "./HomepageComps/LandingPage";
import { Searchbar } from "./HomepageComps/Searchbar";
import { Navbar } from "./HomepageComps/Navbar";
import { AllHotels } from './HomepageComps/AllHotels';
import { Footer } from './HomepageComps/Footer';
export default function Homepage () {


    return (
      <div>
        <Navbar />
        <LandingPage />
        <Searchbar />
        <AllHotels />
        <Footer />
        </div>
    );
  }