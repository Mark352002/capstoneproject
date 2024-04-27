import React from 'react';

const Profile = (props) => {
    // create variable to hold extracted data from props
    let name, email,address, id;
    // check props if it has contents / data
    if (props.user) {
       id=props.user.id; 
       name=props.user.name; 
       address=props.user.address; 
       email=props.user.email; 
    }

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='bg-light p-5 mt-5 rounded col-lg-4 offset-lg-4'>
                    <h3 className='text-center'>User Profile</h3>
                        <ul className='list-group'>
                            <li className='list-group-item'>Id : {id}</li>
                            <li className='list-group-item'>Name : {name}</li>
                            <li className='list-group-item'>Address : {address}</li>
                            <li className='list-group-item'>Email Address : {email}</li>
                        </ul>
                </div>
            </div>
        </div>
      )
}

export default Profile