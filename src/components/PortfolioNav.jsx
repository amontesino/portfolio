import { useState } from "react"

export default function PortfolioNav(props) {
    const [expanded, setExpanded] = useState({
        state: false,
        projectIndex: -1
    })

    function ExpandedContent(text) {
        return (
            <p>{text}</p>
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
                        onClick={() => {
                            if (expanded.state) setExpanded({state: false, projectIndex: null})
                            else setExpanded({state: true, projectIndex: index})
                        }}
                    >
                        {proj.name}
                    </button>
                })}
            </div>
            {expanded.state ? "yes" : null}
        </>
    )
}