import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const getDatafromLs = () => {
  const data = localStorage.getItem('bookingData');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}
const Booking = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([])

  useEffect(() => {
    const data = getDatafromLs();
    setData(data);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { name, phone, email };
    setData([...data, newData]);
  };


  useEffect(() => {
    if (data)
      localStorage.setItem('bookingData', JSON.stringify(data));
  }, [data])

  const location = useLocation()
  const { movie } = location.state;

  return (
    <>
      <form onSubmit={handleSubmit} className='w-5/6 mx-auto my-4 p-4 border-2 border-gray-500 shadow-md'>
        <div className="mb-6">
          <div className="title text-center text-3xl">{movie.name}</div>
          <div className="genres flex flex-wrap">
            <div className="text-lg">{movie.genres.join(", ")}</div>
          </div>
          <div className="language text-lg">Language: {movie.language}</div>
          <div className="duration text-lg">Duration: {movie.runtime} Mins</div>
          <div className='schedule gap-2 flex sm:justify-between'>
            <div className="time text-xl">Time: {movie.schedule.time}</div>
            <div className="date text-xl">Days: {movie.schedule.days.join(", ")}</div>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
          <input type="text" id="Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(e) => { setName(e.target.value) }} value={name} required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
          <input type="text" id="mobile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(e) => { setPhone(e.target.value) }} value={phone} required />
        </div>

        <div className="mb-6">
          <h2 className='text-lg'>Total Amount To Be Paid: $12</h2>
        </div>
        <label htmlFor="paymentOption" className="block mb-2 text-sm font-medium text-gray-900 ">Select Payment Option</label>
        <select id="paymentOption" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option value='' >Choose an option</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>UPI</option>
          <option>Wallet</option>
          <option>Net Banking</option>
        </select>
        <div className="btns flex gap-4 justify-center">
          <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
          <button type="reset" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset</button>
        </div>
      </form>
      <div className="ticket block mt-1 text-4xl leading-tight font-medium text-gray-800">
        <h2>Previous Booking Details</h2>
        {data&&data.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4 text-xl">
            <div className="movie-details">
            <h3 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline title">Movie: {movie.name}</h3>
            <h4 className="language ">Language: {movie.language}</h4>
            <p className="time ">Time: {movie.schedule.time}</p>
            <p className="date ">Days: {movie.schedule.days.join(", ")}</p>  
            </div>      
            <p className="font-medium">Name: {item.name}</p>
            <p className="font-medium">Phone: {item.phone}</p>
            <p className="font-medium">Email: {item.email}</p>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Booking