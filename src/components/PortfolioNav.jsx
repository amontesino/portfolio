import { Link } from "react-router-dom"

export default function PortfolioNav(props) {
    return (
        <div className={'portfolio-nav'}>
            {props.projectData.map(proj => {
                return <Link
                    className="portfolio-navlink"
                    to={proj.pathName}
                    // to={`../${proj.pathName}`}
                    // add back later when projects are successfully ported to React
                >
                    {proj.name}
                </Link>
            })}
    </div>
    )
}