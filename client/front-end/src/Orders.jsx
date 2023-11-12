// Orders.jsx
import React from 'react';
import './Orders.css'; // Import the CSS file for styling

const Orders = () => {
    // Define an array of order history data
    const orders = [
        {
            id: 1,
            businessName: 'Restaurant A',
            dateOrdered: '2023-11-15',
            foodType: 'Pizza',
            quantity: 2,
            cost: 30.0,
            accepted: true,
        },
        {
            id: 2,
            businessName: 'Cafe B',
            dateOrdered: '2023-11-14',
            foodType: 'Burger',
            quantity: 1,
            cost: 12.5,
            accepted: false,
        },
        {
            id: 3,
            businessName: 'Pizzeria C',
            dateOrdered: '2023-11-13',
            foodType: 'Pasta',
            quantity: 3,
            cost: 25.0,
            accepted: true,
        },
        {
            id: 4,
            businessName: 'Bakery D',
            dateOrdered: '2023-11-12',
            foodType: 'Croissant',
            quantity: 2,
            cost: 8.0,
            accepted: true,
        },
        {
            id: 5,
            businessName: 'Sushi Bar E',
            dateOrdered: '2023-11-11',
            foodType: 'Sushi Rolls',
            quantity: 4,
            cost: 45.0,
            accepted: false,
        },
        {
            id: 6,
            businessName: 'Burger Joint F',
            dateOrdered: '2023-11-10',
            foodType: 'Chicken Burger',
            quantity: 1,
            cost: 9.5,
            accepted: true,
        },
        {
            id: 7,
            businessName: 'Mexican Restaurant G',
            dateOrdered: '2023-11-09',
            foodType: 'Tacos',
            quantity: 3,
            cost: 22.0,
            accepted: false,
        },
        {
            id: 8,
            businessName: 'Coffee Shop H',
            dateOrdered: '2023-11-08',
            foodType: 'Latte',
            quantity: 2,
            cost: 7.0,
            accepted: true,
        },
        // Add more order objects
    ];

    return (
        <div className="orders-container">
            <h1>Your Order History</h1>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Business Name</th>
                        <th>Date Ordered</th>
                        <th>Food Type</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Accepted</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.businessName}</td>
                            <td>{order.dateOrdered}</td>
                            <td>{order.foodType}</td>
                            <td>{order.quantity}</td>
                            <td>${order.cost.toFixed(2)}</td>
                            <td>{order.accepted ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
