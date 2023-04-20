import React from "react";
import {x} from './test'
function Home(props) {
    return (
        <div>
            <h1>welcoom to page home</h1>
            {x}
            {props.name}
        </div>
    );
}
export default Home