import React from 'react'
import Cart from './Cart/Cart'

const Home = () => {
  return (
    <>
    <h1 className='text-center'>ALL Dress</h1>
      <section className='container'>
        <div className='row justify-content'>
            <Cart title="title" desc="desc"/>
        </div>
     </section>
    </>
  )
}

export default Home