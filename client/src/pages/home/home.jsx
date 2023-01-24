import FourSection from "./foursection"
import SectionOne from "./sectionone"
import SectrionTwo from "./sectiontwo"
import {Helmet} from "react-helmet"
import ThreeSection from "./threesection"
const HomePage = () => {
    return (
        
        <div className='homepage'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <img src="https://preview.colorlib.com/theme/notary/images/hero_bg_1.jpg.webp" alt="" style={{position:"relative"}}/>
     <div style={{position:"absolute", zIndex:"1", top:"86%", color:"white"}}>
     <h2  >  Notary Public & Legal Solutions</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    
<p> Veritatis cupiditate deserunt placeat necessitatibus a aliquam</p>
 <p>corrupti nisi odio aliquid, accusamus.</p>
     </div>
        <SectionOne/>
        <SectrionTwo/>
        <ThreeSection/>
        <FourSection/>
        </div>
    )
}

export default HomePage