import React from 'react'
import Navbar from '../components/Navbar'
import Sign from '../components/Sign'
import Footer from '../components/footer'
// import list from "../../public/list.json"

function SigningUp() {
    // console.log(list);
  return (
  <>
  <Navbar />
  <div className='min-h-screen'>
  <Sign />
  </div>
  <Footer />
  </>
  )
}

export default SigningUp
