


import logoBootstrap from '~/../public/images/logos/bootstrap.webp'
import logoTailwind from '~/../public/images/logos/tailwind.webp'
import logoSass from '~/../public/images/logos/sass.webp'
import logoReact from '~/../public/images/logos/react.webp'
import logoNextJS from '~/../public/images/logos/nextjs.webp'
import logoRemixRun from '~/../public/images/logos/RemixRun.png'
import logoStrapi from '~/../public/images/logos/strapi.webp'

import logoNotion from '~/../public/images/logos/notion.webp'
import logoFigma from '~/../public/images/logos/figma.webp'
import logoGitHub from '~/../public/images/logos/github.webp'
import logoGit from '~/../public/images/logos/Git.png'


function SectSkins() {
    return (
        <div className="skins sectionSeparate" id='skins'>
            
            <div className="contact_Title">
                <h2 className='title title_center'>Skins</h2>
            </div>

            <div className="skins_Logo">
                <div className="skins_Logo_Programming">
                    <img src={logoBootstrap} alt="" />
                    <img src={logoTailwind} alt="" />
                    <img src={logoSass} alt="" />
                    <img src={logoReact} alt="" />
                    <img src={logoNextJS} alt="" />
                    <img src={logoRemixRun} alt="" />
                </div>
                <div className="skins_Logo_Programming_Tools">
                    <img src={logoStrapi} alt="" />
                    <img src={logoGit} alt="" />
                </div>
                <div className="skins_Logo_Tools">
                    <img src={logoNotion} alt="" />
                    <img src={logoFigma} alt="" />
                    <img src={logoGitHub} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectSkins
