import { useState } from "react";
import { createContext } from "react";

const LightModeContext = createContext();

function LightModeProvider(props) {
    const [lightMode, setLightMode] = useState(true)
    const toggleLightMode = () => {
        setLightMode(!lightMode)
    }

    return (
        <div>
            <LightModeContext.Provider value={{lightMode, toggleLightMode}}>
                {props.children}
            </LightModeContext.Provider>
        </div>
    )
}

export {LightModeContext, LightModeProvider}