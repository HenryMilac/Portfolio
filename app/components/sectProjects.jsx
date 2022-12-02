

import { Link } from 'react-router-dom'
import project01 from '~/../public/images/projects/SpendingPlanner.png'
import project02 from '~/../public/images/projects/WatchesWebsite.png'
import project03 from '~/../public/images/projects/GuitarsWebsite.png'


function SectProjects() {
    return (
        <div className="latestProjects sectionSeparate" id='latestProjects'>
            
            <div className="latestProjects_title">
                <div className="title_separate title_separateLeft">
                    <h2 className='title'>Latest</h2>
                </div>
                <div className="title_separate title_separateRight">
                    <h2 className='title'>Projects</h2>
                </div>
                <div className="title_separate">
                </div>
            </div>

            <div className="latestProjects_projects">
                <div className="latestProjects_projects_project">
                    <h3 className='latestProjects_projects_project_title'>Spending Planner</h3>
                    <p className='latestProjects_projects_project_description'>Manage your monthly expenses with this App, you can also filter by types of expenses</p>
                    <p className='latestProjects_projects_project_technologies'><span><i className="ri-tools-fill"></i></span>Tailwind, React</p>
                    <div className='latestProjects_projects_project_image'>
                        <img src={project01} alt="" />
                    </div>
                    <div className="latestProjects_projects_project_btnViewProject">
                        <a target="_blank" href='https://melodious-gaufre-ab5a6d.netlify.app/'>View Project</a>
                        <i className="ri-arrow-right-line"></i>
                    </div> 
                </div>

                <div className="latestProjects_projects_project">
                    <h3 className='latestProjects_projects_project_title'>Watches WebSite</h3>
                    <p className='latestProjects_projects_project_description'>Discover many varieties of watches, this App has a minimalist and friendly design</p>
                    <p className='latestProjects_projects_project_technologies'><span><i className="ri-tools-fill"></i></span>Tailwind, JavaScript</p>
                    <div className='latestProjects_projects_project_image'>
                        <img src={project02} alt="" />
                    </div>
                    <div className="latestProjects_projects_project_btnViewProject">
                        <a target="_blank" href='https://hilarious-tartufo-d8c0ff.netlify.app/'>View Project</a>
                        <i className="ri-arrow-right-line"></i>
                    </div> 
                </div>

                <div className="latestProjects_projects_project">
                    <h3 className='latestProjects_projects_project_title'>Guitars WebSite 'Strapi'</h3>
                    <p className='latestProjects_projects_project_description'>This project works with an API created with Strapi, which makes it dynamic so the user can update the information from the Strapi dashboard</p>
                    <p className='latestProjects_projects_project_technologies'><span><i className="ri-tools-fill"></i></span>React, RemixRun, Strapi, Cloudinary</p>
                    <div className='latestProjects_projects_project_image'>
                        <img src={project03} alt="" />
                    </div>
                    <div className="latestProjects_projects_project_btnViewProject">
                        <a target="_blank" href='https://soft-sundae-2f66e3.netlify.app/'>View Project</a>
                        <i className="ri-arrow-right-line"></i>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SectProjects
