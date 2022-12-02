import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '~/../public/images/Logo.png'


function SectNav() {

    const [btnState, setBtnState] = useState(false)
    function handleClic(){
        setBtnState(btnState => !btnState) 
    }
    let show_menu = btnState ? 'show_menu' : ''
    let close_menu = btnState ? 'close_menu' : ''

    return (
        <nav className="nav_container">
            <div className="nav">
                <div className="nav_logo">
                    <img src={logo} alt="" />
                    {/* <Link className="logo" to="/">Henry Ramirez</Link> */}
                    <a className="logo" href="#header">Henry Ramirez</a>
                </div>

                <div className="nav_contacMe---menu">

                    <div className="nav_contactMe">
                        {/* <Link className="nav_contactMe_btn btn_contactMe" to='/'>Contact Me</Link> */}
                        <a target="_blank" className="nav_contactMe_btn btn_contactMe" href="https://henrymilac.github.io/cv/">CV - App</a>
                    </div>

                    <div className="nav_menu">
                        <div className="nav_menu_menuBtn" onClick={handleClic}>
                            <i className="ri-menu-line"></i>
                        </div>

                        <div className={`nav_menu_cuadro ${show_menu}`}>
                            <div className={`nav_menu_cuadro_close ${close_menu}`} onClick={handleClic}>
                                <i className="nav_menu_cuadro_close_btn ri-close-line"></i>
                            </div>
                            <div className="nav_menu_cuadro_links">
                                {/* <Link className="enlace_menuCuadro" to='/' onClick={handleClic}>Home</Link>
                                <Link className="enlace_menuCuadro" to='/' onClick={handleClic}>Latest Projects</Link>
                                <Link className="enlace_menuCuadro" to='/' onClick={handleClic}>Skins</Link>
                                <Link className="enlace_menuCuadro" to='/' onClick={handleClic}>Contact Me</Link> */}
                                <a className="enlace_menuCuadro" href="#header" onClick={handleClic}>Home</a>
                                <a className="enlace_menuCuadro" href="#latestProjects" onClick={handleClic}>Latest Projects</a>
                                <a className="enlace_menuCuadro" href="#skins" onClick={handleClic}>Skins</a>
                                <a className="enlace_menuCuadro" href="#contactMe" onClick={handleClic}>Contac Me</a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </nav>
    )
}

export default SectNav




























