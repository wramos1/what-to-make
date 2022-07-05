import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterURLs from "./RouterURLs";


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <RouterURLs />
            </BrowserRouter>
        </div>
    )
}

export default App;