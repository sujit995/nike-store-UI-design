import React from 'react'
import {
    CustomerReviews,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
  } from "../sections";
  import { Button } from "../components";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
        <div className='mt-11'>
          <Link to="/shop">
          <Button label='View More' />
          </Link>
        </div>
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </>
  )
}

export default Home