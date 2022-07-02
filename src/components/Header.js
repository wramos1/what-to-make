import React from 'react'
import '../styles/Header.css'

const Header = () => {
    return (
        <nav>
            <div id='header'>

                <div>
                    <h1 id='title'>
                        What To Make...
                    </h1>
                </div>

                <div>
                    <img
                        id='foodIcon'
                        src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"
                        alt="foodIcon"
                    />
                </div>

            </div>
        </nav>
    )
}

export default Header