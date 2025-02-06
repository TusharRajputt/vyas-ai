import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Nav } from 'react-bootstrap';

function Store() {
  const items = [
    {
      id: 1,
      name: "Name of something",
      description: "Description of that",
      price: 70,
      img: "https://i.ytimg.com/vi/m7WGJFU8Qf0/maxresdefault.jpg",
      disabled: false
    },
    {
      id: 2,
      name: "Name of something",
      description: "Description of that",
      price: 5000,
      img: "https://i.ytimg.com/vi/m7WGJFU8Qf0/maxresdefault.jpg",
      disabled: false
    },
    {
        id: 3,
        name: "Name of something",
        description: "Description of that",
        price: 700,
        img: "https://i.ytimg.com/vi/m7WGJFU8Qf0/maxresdefault.jpg",
        disabled: false
      },
      {
        id: 4,
        name: "Name of something",
        description: "Description of that",
        price: 1000,
        img: "https://i.ytimg.com/vi/m7WGJFU8Qf0/maxresdefault.jpg",
        disabled: false
      }
  ];

  return (
    <div className="container mx-auto px-4">
        <Navbar />
        <div className='header'>
        <div className='text'>Store</div>
        <div className='underline'></div>
      </div><br/>
      <div className="flex flex-wrap -mx-2">
        {items.map(item => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/4 p-2">
            <div className="border rounded shadow">
              <div>
                <img src={item.img} alt={item.name} className="w-full"/>
              </div>
              <div className="p-4">
                <div className="font-bold text-lg text-white">{item.name}</div>
                <p className="text-sm text-white">{item.description}</p>
              </div>
              <div className="p-4 flex justify-center items-center">
  <button
    className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
  >
    Rs. {item.price}
  </button>
</div>

            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Store;
