import React, { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
const Login = (props) => {
    // set the state of variables using useState hook
    const [state,setState]=useState({
        email: '', // empty muna
        password: '',
        message: '',//for error message from laravel
        loggedIn: false,// false muna sya un ung state nya before mag login
        navigate: useNavigate()//parang link pero iba

    });
    // formsubmit for login with api
    const formSubmit = (e)=>{
        e.preventDefault();// para d mag refress pag nag submit
        // create  data to hold the values to be passed in to axios
        const data ={
            email:state.email,
            password:state.password
        };
        // Include post axios template
        // axios.post('/user',  change to route /login this is the axios default and it will add in /login >> http://localhost:8000/api
        //      {
        //    firstName: 'Fred',
        //    lastName: 'Flintstone'
        //    }) change this to data from const data
        axios.post('/login', data)
          .then((response) => {
            // console.log(response);
            // store the token in the localStorage
            localStorage.setItem('token',response.data.token);//response.data.token from console {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …
            // set loggedIn status as reference for profile page
            setState({...state, loggedIn:true});
            //pass the response data user to props user for header
            props.setUser(response.data.user);


          })
          .catch((error) => {
            // console.log(error);
            setState({ ...state, message: error.response.data.message});
            document.getElementById('submitform').reset();
          });
    };
    // show error messages for frontend
    let err_message="";
    if (state.message) {
        err_message=(
            <div className="alert alert-danger" role="alert">
               {state.message}
            </div>
        );
    }
    // after loggedIn redirect to profile
    if(state.loggedIn){
        return state.navigate("/");
    }
    // redirect to profile if still logged or with token
    if (localStorage.getItem('token')) {
        return <Navigate replace to={'/profile'}/>
    }

    // 
  return (
    <div  className='mt-5 pt-5 register container'>
        <center>
            <span className="title-sign" style={{ fontSize: '25px', fontWeight: 500 }}>Sign In</span>
            <img src={require('../images/logos//logo_like.png')} style={{ width: '100px' }} alt=""  />
            
        </center>

   
                
                <form onSubmit={formSubmit} id='submitform'>
                    <div className="row d-flex justify-content-center pb-3 mb-5">
                                <div className="mb-3 mt-3 col-8">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                {/* display err_message */}
                                {err_message}
                                <input type="email" className="form-control" name='email'
                                //setState ito ung pang update sa state 
                                //need ng ganto pag array {}. 
                                //need ng ganto ...state para d mawala or mareset ung state ng email if ng input ka sa ibang input box
                                required onChange={(e)=> setState({...state, email: e.target.value})}
                                />
                                </div>

                                <div className="mb-3 mt-3 col-8">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' 
                                required onChange={(e)=> setState({...state, password: e.target.value})}
                                />
                                </div>
                                <div className="col-8 mt-3 mb-4 text-center">
                                don't have an account? <Link to="/register">Sign Up</Link><br />

                                    <button type="submit" className="btn btn-dark col-11 mt-3  btn-sign">Login</button>
                                </div>
                                <div className="col-8 text-center">
                                Forgot My Password <Link to="/forget">Click here</Link>
                                </div>
                    </div>
                </form>
    </div>
    
  )
}

export default Login