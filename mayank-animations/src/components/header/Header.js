import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className="Header">
            {/* https://ryancv.bslthemes.com/ve1/#home-e */} 
            {
                Array(2).fill("").map(()=><div className="Header__child"> <h2>Hellooo from The Other Side</h2> </div>)
            }
        </div>
    )
}

export default Header
