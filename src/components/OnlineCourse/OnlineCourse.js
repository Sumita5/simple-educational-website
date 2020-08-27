import React, { useState} from 'react';
import fakeData from '../fakeData/TotalData';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
// import { Alert } from 'bootstrap';
// fake data call
const OnlineCourse = () => {
    const data = fakeData;
    const [courses, setCourses] = useState(data); 
    const [cart, setCart] = useState([]);

    const addToEnroll = (course) => { //Add course to cart function
        const totalCartItem = [...cart, course];
        setCart(totalCartItem);
    }
    // get total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0); 

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-3 text-success">Welcome To Online Courses</h1>
            <div className="row">
                <div className="col-md-3 cart">
                    <h2 className="text-center">Total Cart Item : {cart.length} </h2>
                    <ul className="list-group">
                        {
                            cart.map(item => <Cart key={item.id * Math.random()} item={item} />)
                        }
                    </ul>
                    Checkout <span className="badge badge-light">$ {totalPrice}</span>
                </div>
                <div className="col-md-9 row border-left course-item">
                    {
                        courses.map(item => <Courses key={item.id} course={item} addToEnroll={addToEnroll} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OnlineCourse;