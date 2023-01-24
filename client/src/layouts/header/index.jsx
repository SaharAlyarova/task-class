// import Link from "antd/es/typography/Link"
import "./style.scss"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
        <div><h1>Notary</h1></div>
        <div>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li>Practise Areas </li>
                    <li>Testimonials</li>
                    <li>About</li>
                    <li>Contact</li>
                   <li><Link to={'/addpage'}>Add Page</Link></li>
                </ul>
            </nav>
           
        </div>
        </div>
    )
}

export default Header