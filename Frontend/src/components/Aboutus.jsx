import React from 'react'
import Navbar from './Navbar'

const Aboutus = () => {
  return (
<>
    <Navbar />
    <div className="min-h-screen bg-white font-bold text-black p-6">
        <div className="mb-6">
        <h1 className="text-3xl font-bold text-green-600 mb-2 mt-16">About TravelPath</h1>
        <p className="text-gray-700 text-base leading-relaxed">
          Welcome to TravelPath! We are your ultimate travel companion, committed to making your journeys
          memorable and hassle-free. Whether you are looking for exotic destinations, affordable packages,
          or tailored experiences, we have got you covered. Explore the world with us and create stories
          that last a lifetime.
        </p>
      </div>
        
      <div>
        <h2 className="text-xl font-semibold text-green-600 underline mb-2">Contact Us</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-3">
          Have questions or need assistance? Reach out to us through any of the following channels:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
          <li>Email: <a href="mailto:support@travelpath.com" className="text-green-600 underline">support@travelpath.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-green-600 underline">+1 234-567-890</a></li>
          <li>Address: 123 Travel Street, Wanderlust City, Country</li>
          <li>
            Follow us on: 
            <a href="https://facebook.com/TravelPath" className="text-green-600 underline ml-1" target="_blank" rel="noopener noreferrer">Facebook</a>, 
            <a href="https://twitter.com/TravelPath" className="text-green-600 underline mx-1" target="_blank" rel="noopener noreferrer">Twitter</a>, 
            <a href="https://instagram.com/TravelPath" className="text-green-600 underline mx-1" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Aboutus
