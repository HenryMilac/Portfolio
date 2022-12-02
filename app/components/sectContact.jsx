import { Link } from "react-router-dom"




function SectContact() {
    return (
        <div className="contact sectionSeparate" id="contactMe">
            <div className="contact_Title">
                <div className="title_separate title_separateLeft">
                    <h2 className='title'>Contact</h2>
                </div>
                <div className="title_separate title_separateRight">
                    <h2 className='title'>Me</h2>
                </div>
            </div>

            <Link className="contact_Btn btn_contactMe" to='/'>Say Hello <i className="ri-mail-send-line"></i></Link>

            <div className="contact_SocialMedia">
                {/* <Link className="link" to='/'><i className="icon_socialMedia ri-facebook-fill"></i></Link>
                <Link className="link" to='/'><i className="icon_socialMedia ri-instagram-fill"></i></Link>
                <Link className="link" to='/'><i className="icon_socialMedia ri-whatsapp-fill"></i></Link>
                <Link className="link" to='/'><i className="icon_socialMedia ri-github-fill"></i></Link>
                <Link className="link" to='/'><i className="icon_socialMedia ri-linkedin-box-fill"></i></Link> */}
                <a target="_blank" className="link"href="https://www.facebook.com/henry.ramirez.102/"><i className="icon_socialMedia ri-facebook-fill"></i></a>
                <a target="_blank" className="link"href="https://www.instagram.com/henry._.rami/"><i className="icon_socialMedia ri-instagram-fill"></i></a>
                <a target="_blank" className="link"href="https://wa.link/tlmile"><i className="icon_socialMedia ri-whatsapp-fill"></i></a>
                <a target="_blank" className="link"href="https://github.com/HenryMilac"><i className="icon_socialMedia ri-github-fill"></i></a>
                <a target="_blank" className="link"href="https://www.linkedin.com/in/henry-ramirez-17299b236/"><i className="icon_socialMedia ri-linkedin-box-fill"></i></a>

            </div>
        </div>
    )
}

export default SectContact
