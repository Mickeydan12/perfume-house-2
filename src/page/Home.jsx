import React, { useEffect } from 'react';
import Product from '../components/Product';
import Cart from '../components/Cart';

const Home = () => {
  useEffect(()=>{
    document.title = "perfune || house"
  })
  return (
    <>
      <main className='container  '>
        <section className='row'>
          <div className='col-lg-9'>
            <Product/>
          </div>
          <div className='col-lg-3'>
            <Cart/>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
