import React from 'react'
import Navbar from './Navbar'

const Traveltips = () => {
  return (
<>
<Navbar />
<div className="min-h-screen bg-white font-bold text-black p-6">
        {/* Home Page Content */}
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to Travel Path</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your ultimate guide to travel tips, advice, and destination recommendations. Whether you're a frequent traveler or just starting your adventure, we've got you covered.
        </p>
      </div>

      {/* Travel Tips Section */}
      <div className="text-center p-6 bg-gray-200 mt-6">
        <h2 className="text-3xl font-bold text-green-500">Essential Travel Tips</h2>
        <p className="mt-4 text-lg text-gray-700 mx-auto max-w-xl">
          Travel can be a life-changing experience, but it requires planning and preparation. Here are some essential tips to ensure your trip is smooth and enjoyable:
        </p>
        <ul className="mt-6 space-y-4 text-lg text-left mx-auto max-w-lg">
          <li>Always have a photocopy of your important documents like passport and visa.</li>
          <li>Get travel insurance to cover unexpected events like cancellations or medical emergencies.</li>
          <li>Learn a few basic phrases in the local language of your destination.</li>
          <li>Keep a power bank handy for charging your devices on the go.</li>
          <li>Carry a reusable water bottle to stay hydrated while minimizing plastic waste.</li>
        </ul>
      </div>

      {/* Packing Tips Section */}
      <div className="text-center p-6 bg-gray-100 mt-6">
        <h2 className="text-3xl font-bold text-blue-500">Packing Tips for Your Trip</h2>
        <p className="mt-4 text-lg text-gray-700 mx-auto max-w-xl">
          Packing efficiently can make your trip much more comfortable. Here's a list of packing tips to ensure you're ready for your adventure:
        </p>
        <ul className="mt-6 space-y-4 text-lg text-left mx-auto max-w-lg">
          <li>Use packing cubes to organize your clothes and save space in your luggage.</li>
          <li>Roll clothes instead of folding them to minimize wrinkles and maximize space.</li>
          <li>Pack versatile clothing that can be mixed and matched for multiple outfits.</li>
          <li>Include a lightweight jacket for unpredictable weather conditions.</li>
          <li>Don’t forget chargers and adaptors for your electronic devices.</li>
          <li>Pack a small first-aid kit with essentials like pain relievers, band-aids, and antiseptic wipes.</li>
        </ul>
      </div>

      {/* Health and Safety Tips Section */}
      <div className="text-center p-6 bg-gray-200 mt-6">
        <h2 className="text-3xl font-bold text-red-500">Health and Safety Tips</h2>
        <p className="mt-4 text-lg text-gray-700 mx-auto max-w-xl">
          Your health and safety are the top priority while traveling. Here are some key tips to ensure you're safe and healthy during your trip:
        </p>
        <ul className="mt-6 space-y-4 text-lg text-left mx-auto max-w-lg">
          <li>Stay hydrated and avoid drinking tap water in foreign countries unless you're sure it's safe.</li>
          <li>Carry hand sanitizers and disinfectant wipes to keep your hands clean.</li>
          <li>Wear sunscreen to protect your skin from harmful UV rays, especially in tropical locations.</li>
          <li>Use insect repellent to avoid bites and potential diseases in tropical regions.</li>
          <li>Be cautious with street food – make sure it’s freshly prepared and from a reliable source.</li>
        </ul>
      </div>

      {/* Destination Recommendations Section */}
      <div className="text-center p-6 bg-gray-100 mt-6">
        <h2 className="text-3xl font-bold text-purple-500">Top Travel Destinations</h2>
        <p className="mt-4 text-lg text-gray-700 mx-auto max-w-xl">
          Exploring new destinations can be an enriching experience. Here are some of the top travel destinations you might want to consider for your next trip:
        </p>
        <ul className="mt-6 space-y-4 text-lg text-left mx-auto max-w-lg">
          <li>Kyoto, Japan – A perfect blend of ancient culture and beautiful nature.</li>
          <li>Paris, France – The city of love, art, and exceptional cuisine.</li>
          <li>New York City, USA – A bustling metropolis full of culture, landmarks, and excitement.</li>
          <li>Reykjavik, Iceland – Stunning landscapes with volcanic formations and hot springs.</li>
          <li>Cape Town, South Africa – A scenic coastal city with diverse wildlife and beaches.</li>
        </ul>
      </div>

      {/* Conclusion Section */}
      <div className="text-center p-6 bg-gray-200 mt-6">
        <h2 className="text-3xl font-bold text-blue-500">Start Your Adventure Today!</h2>
        <p className="mt-4 text-lg text-gray-700">
          Travel has the power to open your eyes to new cultures, perspectives, and experiences. Start planning your trip today and make unforgettable memories!
        </p>
      </div>
      </div>
</>
  )
}

export default Traveltips
