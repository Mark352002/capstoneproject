import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SavedItem = (props) => {
    const [saved, setSaved] = useState([]);
    let user_id;
    if (props.user) {
        user_id = props.user.id;
    }

    useEffect(() => {
        axios.get(`/saved/${user_id}`)
            .then(response => {
                setSaved(response.data)
            })
            .catch(error => {
                console.error('Error fetching data', error);
            })
    }, []);

    const handleRemove = (id) => {
        axios.get(`/saved/delete/${id}`)
            .then(response => {
                setSaved(saved.filter(saved => saved.saved_id !== id));
                window.alert('Remove Successfully!');
              }) 
            .catch(error => {
                console.error('Error deleting saved item', error);
            });
    };

    return (
        <div className='container'>
      <p className='mt-5'>&nbsp;</p>

            <center className='mt-4'>
            <hr className="hr-title" />
            <h4 className="mb-3">SAVED</h4>
            </center>
            <table className="table mt-5">
                <thead className="table-light">
                    <tr>
                        <th scope="col"><img src={require(`../images/logos/logo_like1.png`)}className='logo' alt="" /></th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {saved.map(saved => (
                        <tr key={saved.saved_id}>
                            <th scope="col">
          <img src={require(`../images/items/${saved.item_image1}`)} alt="" className="logo" />
                                
                                </th>
                            <th scope="col">{saved.item_name}</th>
                            <th scope="col">₱ {saved.item_price}</th>
                            <th scope="col">
                                <button className='btn btn-danger' onClick={() => handleRemove(saved.saved_id)}>Remove</button>
                                <Link to={`/item/${saved.id}`} className='btn btn-success'>Buy</Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SavedItem;
