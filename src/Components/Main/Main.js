import React from 'react';
import "./Main.css"
import aylogo from '../Navbar/img/1200px-Apple_gray_logo 1.svg'
import apon from '../Navbar/img/iphone14promax.svg'
import vector from '../Navbar/img/Vector.svg'
import vector1 from '../Navbar/img/Vector1.svg'
import vector2 from '../Navbar/img/Vector2.svg'
import vector3 from '../Navbar/img/Vector3.svg'
import vector4 from '../Navbar/img/Vector4.svg'
import vector5 from '../Navbar/img/camera.png'
import vector7 from '../Navbar/img/Vector7.svg'
import vector8 from '../Navbar/img/Vector8.svg'

function Main() {
    const box_data = [
        {
            image: vector,
            title: "Phones",
        },
        {
            image: vector1,
            title: "Computers",
        },
        {
            image: vector2,
            title: "SmartWatch",
        },
        {
            image: vector5,
            title: "Camera",
        },
        {
            image: vector3,
            title: "HeadPhones",
        },
        {
            image: vector4,
            title: "Gaming",
        },
        {
            image: vector7,
            title: "Heart",
        },
    ]
    let res = box_data?.map((el) =>
    <div className="box">
    <img src= {el.image} alt="" />
    <p>{el.title}</p>
</div>
)
const data = [
    {
        image:' https://openshop.uz/public/storage/uploads/products/photos/202210/LAeHdDTNTM9Ao4rMLczeZGQMJRrcvdrkNPtEebcn.jpg',
        title: "Iphone 14",
        price: "$ 12000",
    },
    {
        image: "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-X-256GB-Factory-Unlocked-Smartphone-Refurbished-Good_9b5ec8b2-9665-463b-adc5-64829ba72da6.1b496e5a8fcee76fdad69bae12b54745.jpeg",
        title: "Iphone x",
        price: " $ 10000",

    },
    {
        image:"https://m.media-amazon.com/images/I/71TIOhVWQ5L.jpg",
        title: "SmartWatch",
        price: " $ 1000",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU59P3WstIxNO64rNDxWpWKxj5Hve3Z1_MlT9gfic98w&s",
        title: "Camera",
        price: "$ 8000",
    },
    {
        image: "https://media.wired.com/photos/65e0d28f18fecb6ce8a78d27/1:1/w_1800,h_1800,c_limit/Best-Wireless-Headphones-Gear-GettyImages-1329971784.jpg",
        title: "HeadPhones",
    },
    {
        image: "https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712275200&semt=sph",
        title: "Gaming",
        price: "$ 1000",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORNb9moOO-dUxKvtwRnl82LqNcBjQGT0LW3FOE-YPaw&s",
        title: "Heart",
        price: "$ 20000",
    },
    {
        image:"https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
        title: " Dog ",
        price: " $ 100",
    },

]
let cardss = data?.map((el) =>
        <div className="card">
        <img className="cc" src={el.image} alt="" />
        <div className="hi">
            <h3>{el.title}</h3>
        </div>
        <div className="top">
            <p>{el.price}</p>
            <img src={vector8} alt="" />
        </div>
            </div>
)
    return (
        <div className="main conteiner">
            <div className="iphon">
                <div className="ip2">
                    <div className="ip3">
                        <img src={aylogo} alt="iphone" />
                        <p>iPhone 14 Series</p>
                    </div>
                    <div className="k">
                        <p>Up to 10% off Voucher</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="o">
                    <img src={apon} alt="" />
                </div>
            </div>

            <div className="catigories">
                <div className="cat">
                    <button></button>
                    <p>Categories</p>
                </div>
                <p className='pp'>Browse By Category</p>
            </div>

            <div className="boxes">
              {res}
            </div>
            <div className="catigories">
                  <div className="cat">
                    <button></button>
                    <p>Our Products</p>
                </div>
            </div>

            <div className="cards">
                {cardss}
            </div>
            <div className="btn">
                <button>View All Products</button>
            </div>
        </div>
    )
}

export default Main;