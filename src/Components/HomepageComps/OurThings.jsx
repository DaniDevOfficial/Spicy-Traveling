import '../../Styling/OurThings.css'
import strom from '../../assets/icons/freiwillig/strom.svg'
import parkplatz from '../../assets/icons/freiwillig/parkplatz.svg'
import frühstück from '../../assets/icons/freiwillig/fruehstueck.svg'
import swimmingpool from '../../assets/icons/freiwillig/swimmingpool.svg'
import weitere from '../../assets/icons/freiwillig/weitere.svg'
import wlan from '../../assets/icons/freiwillig/wlan.svg'
export function OurThings() {

    return (
        <div className="ThingsContainer">

            <div className="ThingsText">
                <div className="ThingsTitle">
                    Unsere Annehmlichkeiten auf einen Blick
                </div>
                <div className="ThingsContent">
                    Wir setzen alles daran, Ihnen erstklassige Einrichtungen zu bieten. Ihr Komfort ist unsere Priorität. Willkommen bei ChiliHotels.
                </div>

            </div>
            
            <div className="ThingsGrid">
                <div className="ThingsGridThing">
                    <img src={wlan} alt="" />
                    <div className="Bottomtext">Kostenloses Wlan</div>
                </div>
                <div className="ThingsGridThing">
                    <img src={frühstück} alt="" />
                    <div className="Bottomtext">Frühstück</div>
                </div>
                <div className="ThingsGridThing">
                    <img src={parkplatz} alt="" />
                    <div className="Bottomtext">Parkplatz</div>
                </div>
                <div className="ThingsGridThing">
                    <img src={strom} alt="" />
                    <div className="Bottomtext">Kostenloser Strom</div>
                </div>
                <div className="ThingsGridThing">
                    <img src={swimmingpool} alt="" />
                    <div className="Bottomtext">Swimming Pool</div>
                </div>
                <div className="ThingsGridThing">
                    <img src={weitere} alt="" />
                    <div className="Bottomtext">Weiteres</div>
                </div>
            </div>
        </div>
    )
}