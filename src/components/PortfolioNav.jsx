import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Expand } from "../pages/Portfolio"

export default function PortfolioNav(props) {
    let expand = useContext(Expand)

    return (
        <>
            <div className={'portfolio-nav'}>
                {props.projectData.map(proj => {
                    // return <Link
                    //     className="portfolio-navlink"
                    //     to={proj.pathName}
                    //     // to={`../${proj.pathName}`}
                    //     // add back later when projects are successfully ported to React
                    // >
                    //     {proj.name}
                    // </Link>
                    return <button
                        className="portfolio-navlink"
                        onClick={() => (expand = !expand)}
                    >
                        {proj.name}
                    </button>
                })}
            </div>
            {expand ? "expanded" : null}
        </>
    )
}