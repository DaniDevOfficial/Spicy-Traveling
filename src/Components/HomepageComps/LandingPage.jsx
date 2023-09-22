import '../../Styling/Landingpage.css'
import mainImage from '../../assets/img/hero-image.jpg'
export function LandingPage () {

    return(
        <div className="LandingContainer">
            <div className="LandingText">

                <div className="MainTitle">
                Finden Sie Ihren perfekten Aufenthaltsort
                </div>
                <div className="MainText">
                SpicyTraveling – Wo Ihr Traumaufenthalt Wirklichkeit wird
                </div>
            </div>
            <div className="LandingImage">
                <img src={mainImage} alt="" />
            </div>
        </div>
    )
}