import React from "react";
import './spinner.css'
const Spinner=()=>{
    return(
        //<div class="custom-loader"></div>
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"></div>
            <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    )
}

//css loader generator
export default Spinner;