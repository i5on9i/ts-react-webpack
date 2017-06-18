import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'



import SignUp from "./components/SignUp";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );




document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <HashRouter>
            <SignUp />
        </HashRouter>
        ,
        document.getElementById('example'));
});