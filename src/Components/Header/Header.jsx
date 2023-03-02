import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import user from '../../images/client-1.png'
export default function Header() {
    return (
        <>
            {/* <!-- Navbar start --> */}
            <div className=' '>
                <div className=' container-fluid bg-white py-4  '>
                    <div className='row '>
                        <div className="col-md-4 text-center">
                            <Link className="h_logo navbar-brand " to={'home'}>
                                <span className="h1 text-uppercase text_logo bg-dark px-2">Multi</span>
                                <span className="h1 text-uppercase text-dark bg_logo px-2 ml-n1">Shop</span>
                            </Link>
                        </div>

                        <div className="col-md-4  my-lg-0 my-md-5 my-sm-5">
                            <div className="h_serch m-auto w-75">
                                <div className="input-group mb-3 text-center">
                                    <input type="text" className="form-control" placeholder="Search for products" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="sr_style text_logo bg-black btn btn-dark" type="button" id="button-addon2">
                                        <i className="fa-solid fa-magnifying-glass" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 text-lg-end text-sm-center  text-md-center H_profile ">
                            <div className="h_cs">
                                <Link to="profile">
                                    <img src={user} className=' user me-2 ' alt="" />
                                    <p className='fw-bold mb-0 '>Client Name</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-dark bg-secondary navbar-expand-lg mb-4">
                    <div className="container-fluid m-0  ">
                        <div className="dropdown ">
                            <button className=" dropdown-toggle dropdown_style" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className='dropdown_style d-flex align-items-center  justify-content-between  container  py-3 '>
                                    <h6 className="text-dark m-0 pe-5 me-5 fw-bold"><i className="fa fa-bars mr-2 me-2" />Categories</h6>
                                </div>
                            </button>
                            <ul className="dropdown-menu menu_style" aria-labelledby="dropdownMenuButton1">
                                <Link className="H_li py-2 fw-bold " to={"Dresses"}><li className='ms-3 mt-3'>Dresses </li></Link>
                                <Link className="H_li py-2 fw-bold " to={"Shirts"}><li className='ms-3 mt-3'>Shirts </li></Link>
                                <Link className="H_li py-2 fw-bold " to={"Jeans"}><li className='ms-3 mt-3'>Jeans </li></Link>
                                <Link className="H_li py-2 fw-bold " to={"Swimwear"}><li className='ms-3 mt-3'>Swimwear </li></Link>
                                <Link className="H_li py-2 fw-bold " to={"Sportswear"}><li className='ms-3 mt-3'>Sportswear </li></Link>
                                <Link className="H_li py-2 fw-bold " to={"Blazers"}><li className='ms-3 mt-3'>Blazers </li></Link>
                                <Link className="H_li fw-bold   py-2" data-bs-toggle="dropdown" to={"Shoes"}> <li className='ms-3 mt-3'>Shoes </li></Link>
                            </ul>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item fw-bold">
                                    <Link className='nav-link  ' to="login">login</Link>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link className='nav-link  ' to="register">register</Link>
                                </li>
                            </ul>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="navbar-nav m-auto py-0">
                                    <Link to={"home"} className="nav-item nav-link fs-5 fw-bold px-3">Home</Link>
                                    <Link to={"shop"} className="nav-item nav-link fs-5 fw-bold px-3">Shop</Link>
                                    <Link to={"Contact"} className="nav-item nav-link fs-5 fw-bold px-3">Contact</Link>
                                </div>
                            </div>
                            <div>
                                <Link to="">
                                    <span className='fs-5 me-2'> <i className="fas fa-heart   text_logo" /> <span className='text-white'>0</span></span>
                                </Link>
                                <Link to="cart">
                                    <span className='fs-5 me-5'> <i className="fas fa-shopping-cart text_logo " /> <span className='text-white'>0</span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* <!-- Navbar End --> */}
        </>
    )
}
