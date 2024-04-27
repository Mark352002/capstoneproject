import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrdersTab from './OrdersTab';

const ToShip = (props) => {
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

    // const handleRemove = (id) => {
    //     axios.get(`/saved/delete/${id}`)
    //         .then(response => {
    //             setSaved(saved.filter(saved => saved.saved_id !== id));
    //             window.alert('Remove Successfully!');
    //           }) 
    //         .catch(error => {
    //             console.error('Error deleting saved item', error);
    //         });
    // };

    return (
        <div className='container'>
            <OrdersTab/>
            {/* Pending */}
        {/* To Ship */}
        {orders.filter(order => order.status === "To Ship").length > 0 ? (
            <table className="table mt-5">
                <thead className="table-light">
                    <tr>
                    <th scope="col"><img src={require(`../images/logos/logo_like1.png`)}className='logo' alt="" /></th>
                        <th scope="col">Ordered ID</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Reference No.</th>
                        <th scope="col">Ordered Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.filter(order => order.status === "To Ship").map(order => (
                        <tr key={order.id}> 
                            <th scope="col"><img src={require(`../images/items/${order.item_image1}`)} alt="" className="logo" /></th>
                            <th scope="col"># {order.id}</th>
                            <th scope="col">{order.item_name}</th>
                            <th scope="col">{order.quantity}</th>
                            <th scope="col">{order.qr_name}</th>
                            <th scope="col">₱ {order.amount}</th>
                            <th scope="col">{order.reference_no}</th>
                            <th scope="col">{order.order_date.split(' ')[0]}</th>
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
                        <th scope="col">Ordered ID</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Reference No.</th>
                        <th scope="col">Ordered Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={8}><p className='text-center'>Your order list is empty</p></th>
                    </tr>
                </tbody>
                </table>
                
            </div>
        )}



        </div>
    )
}

export default ToShip;
