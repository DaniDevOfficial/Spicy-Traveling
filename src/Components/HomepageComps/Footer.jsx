import '../../Styling/Footer.css'
import Logo from '../../assets/icons/logo.svg'
import facebook from '../../assets/icons/facebook.svg'
import insta from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedIn.svg'
export function Footer() {

    return (
        <>
            <hr className='hrforFooter' />
            <div className="FooterContainer">
                <img src={Logo} alt="" />
                <div className="FooterText">Wo Gastfreundschaft aufheizt und Erlebnisse entflammt werden!</div>
                <div className="FooterLists">
                    <li className='FooterListItem'>Startseite</li>
                    <li className='FooterListItem'>Über Uns</li>
                    <li className='FooterListItem'>Hilfe</li>
                    <li className='FooterListItem'>Hilfe</li>
                    <li className='FooterListItem'>FAQs</li>
                </div>
                <div className="FooterLists">
                    <li className='FooterListItem'><img src={facebook} alt="facebook" /></li>
                    <li className='FooterListItem'><img src={insta} alt="instagram" /></li>
                    <li className='FooterListItem'><img src={linkedin} alt="linkedin" /></li>
                </div>
            </div>
            <hr className='hrforFooter' />

            <div className="LanguagesLists">
                    <li className='LanguageListItem active'>German</li>
                    <li className='LanguageListItem'>English</li>
                    <li className='LanguageListItem'>French</li>
                </div>
        </>
    )
}