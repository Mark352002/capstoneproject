import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import axios from 'axios';

const Item = () => {
    const [item, setItem] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('/items')
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    let filteredItems = item.filter(item =>
        item.item_stock !== 0 &&
        (item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item_category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item_price.toString().includes(searchQuery))
    );

    let cards;

    if (localStorage.getItem('token')) {
        cards = (
            <Row>
                {filteredItems.map(item => (
                    <div className="col-12 col-md-6 col-lg-4 mx-auto d-flex ha justify-content-center mb-5" key={item.id}>
                        <Link to={`/item/${item.id}`} className='link'>
                            <div className="card shadow-lg" style={{ width: '18rem' }}>
                                <div className="img-hover position-relative collection-img">
                                    <img src={require(`../images/items/${item.item_image1}`)} alt="" className="w-100" />
                                    <span className="price position-absolute text-white d-flex align-items-center justify-content-center">₱ {Number(item.item_price).toLocaleString()}</span>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">{item.item_name} ({item.item_category})</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Row>
        );
    } else {
        cards = (
            <Row>
                {filteredItems.map(item => (
                    <div className="col-12 col-md-6 col-lg-4 mx-auto d-flex ha justify-content-center mb-5" key={item.id}>
                        <Link to={``} onClick={() => alert('Sign-in First')} className='link'>
                            <div className="card shadow-lg" style={{ width: '18rem' }}>
                                <div className="img-hover position-relative collection-img">
                                    <img src={require(`../images/items/${item.item_image1}`)} alt="" className="w-100" />
                                    <span className="price position-absolute text-white d-flex align-items-center justify-content-center">₱ {Number(item.item_price).toLocaleString()}</span>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">{item.item_name} ({item.item_category})</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Row>
        );
    }

    return (
        <>
            <div className='search container'>
                <div className="col-lg-12 shadow bg-white p-5 mt-5 rounded">
                    
                    <p style={{ textAlign: 'center' }}>
      <img src={require('../images/index/search.png')} alt="" style={{ width: '90px' }}/>

                    </p>
                    <input type="text" placeholder='Search Shoes' className='form-control mt-5' value={searchQuery} onChange={handleInputChange} />
                </div>
            </div>

            <div className='container'>
                {cards}
            </div>


        </>
    )
}

export default Item;
