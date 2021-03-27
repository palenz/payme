import { useHistory, Link } from 'react-router-dom';
import Group1 from '../Group1.png'
import FU from '../fu.png'

const Menu = () => {

    let history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem("id")
        history.push('/signin')
    }


    return(
        <>
        <div className="nav">
        <Link to='/dashboard'>
        <img src={Group1} alt="Logo" className="logo"/>
        </Link>
        <nav>
        <ul id="menu">
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/docs'>Docs</Link></li>
            <li><Link to='/' onClick={handleLogOut}>Log out</Link></li>
        </ul>
        </nav>
        </div>
        <div className="hero">
        <div className="herowrap">
        <Link to='/dashboard'>
        <img src={FU} alt="fu" className="fu"/>
        </Link>
        <h5>THE NO-NONSENSE INVOICING SERVICE</h5>
        </div>
        </div>
        </>
    )
}

export default Menu;