import React from 'react'

const DashBoardNav = () => {
    return (
        <div className="d-flex justify-content-between nav my-2">
            <p className='heading'>Dashboard</p>

            <div className='d-flex'>
                <div className='search-box'>
                    <input placeholder='Search...' type="text" />
                    <img className='icon' src="search.svg" alt="" />
                </div>
                <img className="mx-4" src="notification.svg" alt="" />
                <img src="profile.svg" alt="" />
            </div>
        </div>
    )
}

export default DashBoardNav
