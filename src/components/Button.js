import React from "react";

const Button = (props) => {
    return (
        <button className="bg-cyan-700 text-white hover:bg-cyan-400 font[Poppins] py-2 px-6 rounded md:ml-8 duration-500">
           {props.children}
        </button>
    )
}

export default Button
 