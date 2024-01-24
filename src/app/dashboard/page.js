import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import "../dashboard.css"
import Link from 'next/link';
import DashBoardNav from '@/components/DashBoardNav';
import TopCards from '@/components/TopCards';
import Activities from '@/components/Activities';
import TopProducts from '@/components/TopProducts';
import AddProfile from '@/components/AddProfile';

const Page = () => {
    return (
        <div className='dashboard container-fluid p-4 '>
            <div className="row no-gutters login m-0 p-2 h-100">

                <div className="col-2 h-100  d-flex side-nav py-5 px-5">
                    <div className="d-flex flex-column justify-content-between">
                        <div className="top">
                            <h1 className="heading mb-4">Board.</h1>

                            <div>
                                <div className='d-flex align-items-center my-4'>
                                    <img className="" src="dashboard-nav.svg" alt="" />
                                    <p className='m-0 mx-2 link active'>Dashboard</p>
                                </div>

                                <div className='d-flex align-items-center my-4'>
                                    <img className="" src="dashboard-nav.svg" alt="" />
                                    <p className='m-0 mx-2 link '>Transactions</p>
                                </div>

                                <div className='d-flex align-items-center my-4'>
                                    <img className="" src="schedules.svg" alt="" />
                                    <p className='m-0 mx-2 link '>Schedules</p>
                                </div>


                                <div className='d-flex align-items-center my-4'>
                                    <img className="" src="users.svg" alt="" />
                                    <p className='m-0 mx-2 link '>Users</p>
                                </div>

                                <div className='d-flex align-items-center my-4'>
                                    <img className="" src="setting.svg" alt="" />
                                    <p className='m-0 mx-2 link '>Settings</p>
                                </div>
                            </div>
                        </div>

                        <div className="bootom">
                            <p>
                                <Link className='b-link' href="/">Help</Link>
                            </p>
                            <p>
                                <Link className='b-link' href="/">Contact Us</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-10 h-100 content pl-5">

                <DashBoardNav />
                <TopCards />
                <Activities />

                <div className="d-flex justify-content-betweenrow no-gutters m-0">
                    <div className="col ">
                <TopProducts />
                    </div>
                    <div className="col">
                        <AddProfile />
                    </div>
                </div>
                
                </div>

            </div>
        </div>
    )
}

export default Page
