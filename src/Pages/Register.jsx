import React from 'react'
import '../Styles/Register.css'

export default function Register() {
    return (
        <>
            <div className=' container RG_form  text-center'>
                <form action="">
                    <h1 className='mb-5 mt-5  text-warning'> Sign Up</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 ">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="UserName" placeholder='UserName' />
                                <label htmlFor="UserName">User Name</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="Email" placeholder='Email' />
                                <label htmlFor="Email">Email address</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="phone" placeholder='phone' />
                                <label htmlFor="phone">phone</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 ">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="Address" placeholder='Address' />
                                <label htmlFor="Address">Address</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 ">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="Age" placeholder='Age' />
                                <label htmlFor="Age">Age</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 ">
                            <select className="form-select p-3 mb-3" aria-label="Default select example">
                                <option disabled selected>Gender</option>
                                <option value="1">male</option>
                                <option value="2">female</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-2 ">
                            <select className="form-select p-3 mb-3" aria-label="Default select example">
                                <option disabled selected>Role</option>
                                <option value="1">seller</option>
                                <option value="2">customer</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="Password" placeholder='Password' />
                                <label htmlFor="Password">Password</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="Cpassword" placeholder='Cpassword' />
                                <label htmlFor="Cpassword">Confirm Password</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <button type="submit" className="btn btn-primary p-3 w-100">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
