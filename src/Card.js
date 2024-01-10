import React from 'react'

function Card({user}) {
    console.log('card comp')
    console.log('props',user)
  return (
    <div className='cardContainer'>
        <p>Name: {user?.name}</p>
        <p>Age: {user?.age}</p>
        <p>Phone: {user?.phone}</p>
        <p>Email: {user?.email}</p>
    </div>
  )
}

export default Card