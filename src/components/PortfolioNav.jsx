import { useState } from "react"
import { motion } from "framer-motion"

export default function PortfolioNav(props) {
    const [expanded, setExpanded] = useState({
        state: false,
        projectIndex: -1
    })

    function checkExpansion(index) {
        if (expanded.state) {
            if (index != expanded.projectIndex) setExpanded({state: true, projectIndex: index})
            else setExpanded({state: false, projectIndex: null})
        }
        else setExpanded({state: true, projectIndex: index})
    }

    function ExpandedContent(props) {
        return (
            <motion.div className="project-information">
                <h1 className="project-info-header">{props.projData.name}</h1>
                <div className="proj-info-flex">
                    <img className="project-info-image" src={`${props.projData.image}`}/>
                    <p>{props.projData.description}</p>
                    <a className="body-link center" href={props.projData.pathName}>Check it out here!</a>
                </div>
            </motion.div>
        )
    }

    return (
        <>
            <div className={'portfolio-nav'}>
                {props.projectData.map((proj, index) => {
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
                        // onClick={() => setExpanded({
                        //     state: true,
                        //     projectIndex: index
                        // })}
                        onClick={() => checkExpansion(index)}
                    >
                        {proj.name}
                    </button>
                })}
            </div>
            {expanded.state ?
            <ExpandedContent
                projData={props.projectData[expanded.projectIndex]}
            />
            : null}
        </>
    )
}