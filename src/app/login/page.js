import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="row no-gutters login m-0">

                <div className="col-md left">
                    <div className="h-100 p-5 d-flex flex-column justify-content-between">
                        <p className='heading'>LOGO</p>

                        <p className='board align-self-center'>Board.</p>

                        <div className='d-flex mx-auto'>
                            <img className='mx-3' src="github.svg" alt="" />
                            <img className='mx-3' src="tweeter.svg" alt="" />
                            <img className='mx-3' src="linkedin.svg" alt="" />
                            <img className='mx-3' src="discord.svg" alt="" />

                        </div>

                    </div>
                </div>


                <div className="col-md right d-flex align-items-center p-5 py-3">

                    <div>
                        <h2 className='signin-heading mt-4'>Sign In</h2>
                        <p>Sign in to your account</p>

                        <div className='d-flex my-4'>
                            <div className="google d-flex align-items-center">
                                <img className='mx-4' src="google.svg" alt="" />
                                <p className='text-secondary m-0'>Sign in with Google</p>
                            </div>

                            <div className="mx-5 appale d-flex align-items-center">
                                <img className='mx-3' src="apple.svg" alt="" />
                                <p className='text-secondary m-0'>Sign in with Apple</p>
                            </div>
                        </div>

                        <div className='px-5 my-5 py-3'>
                            <form>

                                <div className="email-box">
                                    <label className='d-block my-2' htmlFor="email">Email address</label>
                                    <input type="text" id='email' />
                                </div>

                                <div className="password-box my-3">
                                    <label className='d-block my-2' htmlFor="password">Password</label>
                                    <input type="password" id='password' />
                                </div>
                                <div className="forgot my-3">
                                    <Link href="/">Forgot password?</Link>
                                </div>
                                <div>
                                    <button className='signin-btn'>Sign In</button>
                                </div>

                                <div className="register mt-5">
                                    <p className='register'>Don&apos;t have an account?<Link href="/"> Register here</Link></p>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page
