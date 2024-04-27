import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrdersTab from './OrdersTab';

const Pending = (props) => {
    const [orders, setorders] = useState([]);
    let user_id;
    if (props.user) {
        user_id = props.user.id;
    }

    useEffect(() => {
        axios.get(`/order/${user_id}`)
            .then(response => {
                setorders(response.data)
            })
            .catch(error => {
                console.error('Error fetching data', error);
            })
    }, [user_id]);

    const CancelOrder = (id) => {
        axios.post(`/order/cancel/${id}`, { status: 'Cancelled' })
            .then(response => {
                // Update the status in the local state
                setorders(orders.map(order => 
                    order.id === id ? { ...order, status: 'Cancelled' } : order
                    
                ));
                window.alert('Cancelled Successfully!');
            })
            .catch(error => {
                console.error('Error cancelling order', error);
            });
    };


    return ( 
        <div className='container'>
            
            <OrdersTab/>
            {/* Pending */}
          {orders.filter(order => order.status === "Pending").length > 0 ? (
            <table className="table mt-5">
                <thead className="table-light">
                    <tr>
                    <th scope="col"><img src={require(`../images/logos/logo_like1.png`)}className='logo' alt="" /></th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Reference No.</th>
                        <th scope="col">Ordered Date</th>
                        <th scope="col">Status</th> 
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.filter(order => order.status === "Pending").map(order => (
                        <tr key={order.id}> 
                            <th scope="col"><img src={require(`../images/items/${order.item_image1}`)} alt="" className="logo" /></th>
                            <th scope="col">{order.item_name}</th>
                            <th scope="col">{order.quantity}</th>
                            <th scope="col">{order.qr_name}</th>
                            <th scope="col">₱ {order.amount}</th>
                            <th scope="col">{order.reference_no}</th>
                            <th scope="col">{order.order_date.split(' ')[0]}</th>
                            <th scope="col">{order.status}</th>
                            <th scope="col">
                            <button className='btn btn-danger' onClick={() => CancelOrder(order.id)}>Cancel</button>
                            
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <div>
                <table className="table mt-5">
                <thead className="table-ligh">
                    <tr>
                        <th scope="col"><img src={require(`../images/logos/logo_like1.png`)}className='logo' alt="" /></th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Reference No.</th>
                        <th scope="col">Ordered Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={9}><p className='text-center'>Your order list is empty</p></th>
                    </tr>
                </tbody>
                </table>
                
            </div>
            
            )}

            {/* cancelled */}
            {orders.filter(order => order.status === "Cancelled").length > 0 ? (
            <table className="table mt-5">
                <thead className="table-light">
                    <tr>
                        <th scope="col"><img src={require(`../images/logos/logo_like1.png`)}className='logo' alt="" /></th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Reference No.</th>
                        <th scope="col">Ordered Date</th>
                        <th scope="col">Status</th> 
                    </tr>
                </thead>
                <tbody>
                    {orders.filter(order => order.status === "Cancelled"|| order.status === "Declined").map(order => (
                        <tr key={order.id}> 
                            <th scope="col"><img src={require(`../images/items/${order.item_image1}`)} alt="" className="logo" /></th>
                            <th scope="col">{order.item_name}</th>
                            <th scope="col">{order.quantity}</th>
                            <th scope="col">{order.qr_name}</th>
                            <th scope="col">₱ {order.amount}</th>
                            <th scope="col">{order.reference_no}</th>
                            <th scope="col">{order.order_date.split(' ')[0]}</th>
                            <th scope="col">{order.status}</th>
                            <th scope="col">
                            
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <div>
                <table className="table mt-5">
                <thead className="table-light">
                    <tr>
                        <th scope="col"><img src={require(`../images/logos/logo_like1.png`)}className='logo' alt="" /></th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Reference No.</th>
                        <th scope="col">Ordered Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={9}><p className='text-center'>Your order list is empty</p></th>
                    </tr>
                </tbody>
                </table>
                
            </div>
            
            )}



        </div>
    )
}

export default Pending;
