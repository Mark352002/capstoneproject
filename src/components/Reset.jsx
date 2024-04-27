import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Reset = () => {
   // set the state of variables using useState hook
   const [state,setState]=useState({
    token: '',
    email: '', // empty muna
    password: '',
    password_confirmation: '',
    message: '',//for error message from laravel
});
// formsubmit for login with api
const formSubmit = (e)=>{
    e.preventDefault();// para d mag refress pag nag submit
    // create  data to hold the values to be passed in to axios
    const data ={
        token:state.token,
        email:state.email,
        password:state.password,
        password_confirmation:state.password_confirmation
    };
    // Include post axios template
    // axios.post('/user',  change to route /login this is the axios default and it will add in /login >> http://localhost:8000/api
    //      {
    //    firstName: 'Fred',
    //    lastName: 'Flintstone'
    //    }) change this to data from const data
    axios.post('/resetpassword', data)
     .then((response) => {
        // console.log(response);
        setState({ ...state, message: response.data.message});
        document.getElementById('submitform').reset();
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

// 
return (
<div>
    <div className='row'>
        <div className='bg-light p-5 mt-5 rounded col-lg-4 offset-lg-4'>
            <h3 className='text-center'>Reset Account Password</h3>
            
            <form onSubmit={formSubmit} id='submitform'>
            {err_message}
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Pin Code</label>
                {/* display err_message */}
                <input type="text" className="form-control" name='token'
                //setState ito ung pang update sa state 
                //need ng ganto pag array {}. 
                //need ng ganto ...state para d mawala or mareset ung state ng email if ng input ka sa ibang input box
                required onChange={(e)=> setState({...state, token: e.target.value})}
                />
                </div>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                {/* display err_message */}
                <input type="email" className="form-control" name='email'
                //setState ito ung pang update sa state 
                //need ng ganto pag array {}. 
                //need ng ganto ...state para d mawala or mareset ung state ng email if ng input ka sa ibang input box
                required onChange={(e)=> setState({...state, email: e.target.value})}
                />
                </div>
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">New Password</label>
                <input type="password" className="form-control" name='password' 
                required onChange={(e)=> setState({...state, password: e.target.value})}
                />
                </div>
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='password_confirmation' 
                required onChange={(e)=> setState({...state, password_confirmation: e.target.value})}
                />
                </div>
                <div className='d-grid gap-2 mb-2'>
                    <button type="submit" className="btn btn-primary">Reset Password</button>
                </div>
                <p>Have an account? <Link to="/login">Login here</Link></p>
                <p>Forgot My Password <Link to="/forget">Click here</Link></p>
            </form>
        </div>
    </div>
</div>
)
}

export default Reset