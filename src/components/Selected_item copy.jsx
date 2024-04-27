import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Selected_item = (props) => {
    const [item, setItem] = useState();
    const { id } = useParams();
    const [qrcode, setQrCode] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [referenceNo, setReferenceNo] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const [address, setAddress] = useState('');

    let user_id;
    if (props.user) {
        user_id = props.user.id;
    }

    useEffect(() => {
        axios.get(`/items/${id}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error('Error fetching item data', error);
            });

        axios.get('/qrcode')
            .then(response => {
                setQrCode(response.data);
            })
            .catch(error => {
                console.error('Error fetching QR code data', error);
            });
    }, [id]);

    const handleSelectionChange = (event) => {
        const selectedOptionId = parseInt(event.target.value);
        setSelectedOption(selectedOptionId); // Set selectedOption to the id of the selected QR code
        const selectedQrCode = qrcode.find(qr => qr.id === selectedOptionId);
        if (selectedQrCode) {
            setSelectedImage(selectedQrCode.qr_image);
        } else {
            setSelectedImage('');
        }
    };

    const calculateTotalAmount = () => {
        if (item) {
            return (parseFloat(item.item_price) * quantity).toLocaleString();
        }
        return '0.00';
    };

    const handleBuy = () => {
        // Check if no payment method is selected
        if (!selectedOption) {
            // If no payment method is selected, show a window alert
            window.alert('Choose Your Payment Method');
            return; // Stop further execution
        }
        
        // Check if the item stock is less than the selected quantity
        if (item.item_stock < quantity) {
            // If stock is less, show a window alert
            window.alert('LOW IN STOCK');
            return; // Stop further execution
        }

        // Check if the reference number is empty
        if (!referenceNo.trim()) {
            // If reference number is empty, show a window alert
            window.alert('Enter The Reference Number!');
            return; // Stop further execution
        }

        if (!address.trim()) {
            window.alert('Enter Your Address!');
            return;
        }
        // Calculate the updated item_stock
        const updatedStock = item.item_stock - quantity;

        // Update the item_stock on the server
        axios.post(`/items/stock/${id}`, { item_stock: updatedStock })
            .then(response => {
                console.log('Item stock updated successfully!', response.data);
                // Proceed with placing the order
                axios.post('/order', {
                    user_id: user_id,
                    item_id: id,
                    qr_id: selectedOption,
                    quantity: quantity,
                    order_received: 'On Going',
                    reference_no: referenceNo,
                    amount: calculateTotalAmount(),
                    status: 'Pending',
                    address: address // Include the address state here
                })
                    .then(response => {
                        console.log('Order placed successfully!', response.data);
                        // Show window alert for successful order placement
                        window.alert('Ordered Successfully!');
                        // Navigate to the home page
                        navigate('/');
                        // Add any further logic here after successful order placement
                    })
                    .catch(error => {
                        console.error('Error placing order', error);
                    });
            })
            .catch(error => {
                console.error('Error updating item stock', error);
            });
    };

    const handleSaved = () => {
        // Check if user_id and item_id are available
        if (!user_id || !id) {
            console.error('User ID or Item ID is missing');
            return;
        }
    
        // Check if the user has already saved the item
        axios.get(`/savedall/${user_id}`)
            .then(response => {
                const savedItems = response.data;
                // Check if the current item_id is already in the savedItems array
                if (savedItems.some(item => item.item_id === parseInt(id))) { // Ensure id is parsed to integer for comparison
                    // If item_id is already saved, show a window alert
                    window.alert('Item already added to Saved!');
                } else {
                    // If item_id is not saved, proceed to save it
                    axios.post('/saved', {
                        user_id: user_id,
                        item_id: id,
                    })
                        .then(response => {
                            console.log('Added To Save Later Successfully!', response.data);
                            // Show window alert for successful item addition
                            window.alert('Added To Save Later Successfully!');
                        })
                        .catch(error => {
                            console.error('Error saving item', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error fetching saved items', error);
            });
    };
    
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className='container'>
            <div className="row">
                <div className='col-lg-6 col-md-12 col-12 mt-7'>
                    {item ? (
                        <div> 
                            <img
                                src={require(`../images/items/${selectedImage || item.item_image1}`)}
                                alt=""
                                className="img-fluid w-100"
                                id="ProductImg"
                            />
                            <div className="small-img-group mt-1">
                                <div className="small-img-col">
                                    <img
                                        src={require(`../images/items/${item.item_image1}`)}
                                        width="100%"
                                        className="small-img"
                                        alt=""
                                        onClick={() => handleImageClick(item.item_image1)}
                                    />
                                </div>
                                <div className="small-img-col">
                                    <img
                                        src={require(`../images/items/${item.item_image2}`)}
                                        width="100%"
                                        className="small-img"
                                        alt=""
                                        onClick={() => handleImageClick(item.item_image2)}
                                    />
                                </div>
                                <div className="small-img-col">
                                    <img
                                        src={require(`../images/items/${item.item_image3}`)}
                                        width="100%"
                                        className="small-img"
                                        alt=""
                                        onClick={() => handleImageClick(item.item_image3)}
                                    />
                                </div>
                                <div className="small-img-col">
                                    <img
                                        src={require(`../images/items/${item.item_image4}`)}
                                        width="100%"
                                        className="small-img"
                                        alt=""
                                        onClick={() => handleImageClick(item.item_image4)}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className='col-lg-6 col-md-12 col-12 mt-5'>
                    {item ? (
                        <div className='mt-5'>
                            <h2>{item.item_name}</h2>
                            <h6>{item.item_category}</h6>
                            <h6>{item.item_info}</h6>
                            <h6 className='text-secondary'>Available stock: {item.item_stock}</h6>
                            <h6>₱ {parseFloat(item.item_price).toLocaleString()}</h6>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <div className="row">
                        <div className='col-6'>
                            <label htmlFor="quantity" className="mt-2">
                                <h5>Quantity</h5>
                            </label>
                            <select
                                className="form-select"
                                id="quantity"
                                name="quantity"
                                aria-label="Default select example"
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                value={quantity}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                        <button className='btn btn-dark mt-2' onClick={handleSaved}>Add To Cart</button>

                        </div>
                        
                        <h5 className='mt-2'>Total Amount: ₱ {calculateTotalAmount()}</h5>

                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <div>
                            <label htmlFor="payment"><h5>Select a Payment Option:</h5></label>
                            <select
                                id="payment"
                                onChange={handleSelectionChange}
                                value={selectedOption}
                            >
                                <option value="">Select an option</option>
                                {qrcode.map(qr => (
                                    <option key={qr.id} value={qr.id}>
                                        {qr.qr_name}
                                    </option>
                                ))}
                            </select>

                            {selectedImage && (
                                <div className="selected-image">
                                    <img
                                        src={require(`../images/payment_method/${selectedImage}`)}
                                        alt={selectedOption}
                                        style={{ maxWidth: '300px' }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="mb-3 mt-2 col-12">
                            <label htmlFor="ref" className="form-label"><h5>Reference no.</h5></label>
                            <input
                                type="text"
                                className="form-control"
                                id="ref"
                                placeholder="Enter Reference no."
                                value={referenceNo}
                                onChange={(e) => setReferenceNo(e.target.value)}
                            />
                        </div>

                        <button className='btn btn-dark' onClick={handleBuy}>Buy</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selected_item;
