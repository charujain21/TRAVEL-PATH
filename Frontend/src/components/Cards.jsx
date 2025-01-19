import React from 'react'

function Cards({ item }) {
    // console.log(item);
  return (
<>
<div className='py-8'>
<div className="card card-compact bg-white w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-600 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <button className="btn bg-pink-500 text-white">{item.button}</button>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Cards
