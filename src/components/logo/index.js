import * as React from 'react';
import logo from '../../img/vortex_math_logo_white.png';

export default function Logo() {
    return <img style={
        {
            position: "absolute",
            top: "0",
            left: "0",
            maxWidth: "200px",
        }
    } src={logo}></img>;
}
