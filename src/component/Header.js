import React from 'react'
import profile from '../static/img/profile.jpg'

const Header = () => {
    return (
        <div>

            <div className="container-fluid bg-dark">
            <div className="card-body">
            <h1 className="text-center text-white">Portfolio</h1>
            </div>
            </div>
            <br/>
            <div className="text-center"><img src={profile} width="250px"/></div>

        </div>
    )
}

export default Header