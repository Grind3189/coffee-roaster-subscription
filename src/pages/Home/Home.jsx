import React from 'react'
import './home.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import gran from '../../assets/home/desktop/image-gran-espresso.png'
import planalto from '../../assets/home/desktop/image-planalto.png'
import piccollo from '../../assets/home/desktop/image-piccollo.png'
import danche from '../../assets/home/desktop/image-danche.png'
import beans from '../../assets/home/desktop/icon-coffee-bean.svg'
import gift from '../../assets/home/desktop/icon-gift.svg'
import truck from '../../assets/home/desktop/icon-truck.svg'


function Home() {
  return (
    <main className='side-padding'>
      <div className="hero">
          <h1>
            Great coffee made simple.
          </h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan 
            coffees from our best roasters delivered directly to your door, at your schedule.
          </p>
            <Button color='white'>
              <Link className='create-plan' to='subscribe'>
                Create your plan
              </Link>
            </Button>
          
      </div>

      <section className="coffee-choices">
          <div className='our-collection-container'>
            <h1>our collection</h1>
          </div>
          <div className="all-coffee-container">
            <div className="coffee-content">
                <img src={gran} alt='gran coffee' />
                <div className="coffee-desc">
                  <h3>Gran Espresso</h3>
                  <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                </div>
            </div>
            <div className="coffee-content">
                <img src={planalto} alt='planalto coffee' />
                <div className="coffee-desc">
                  <h3>Planalto</h3>
                  <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                </div>
            </div>
            <div className="coffee-content">
                <img src={piccollo} alt='piccollo coffee' />
                <div className="coffee-desc">
                  <h3>Piccollo</h3>
                  <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                </div>
            </div>
            <div className="coffee-content">
                <img src={danche} alt='danche coffee' />
                <div className="coffee-desc">
                  <h3>Danche</h3>
                  <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                </div>
            </div>
          </div>
      </section>
      
      <section className="choose-us-first">
        <h1>Why choose us?</h1>
        <p>
            A large part of our role is choosing which particular
            coffees will be featured  in our range.
            This means working closely with the best coffee growers
            to give you a more impactful experience on every level.
        </p>
      </section>

      <section className="choose-us-second">
        <div className="our-service">
          <img src={beans} alt='coffee beans' />
          <div className="service-desc">
            <h2>Best quality</h2>
            <p>
              Discover an endless variety of the world’s
              best artisan coffee from each of our roasters.
            </p>
          </div>
        </div>
        <div className="our-service">
          <img src={gift} alt='gift icon' />
          <div className="service-desc">
            <h2>Exclusive benefits</h2>
            <p>
              Special offers and swag when you subscribe,
              including 30% off your first shipment.
            </p>
          </div>
        </div>
        <div className="our-service">
          <img src={truck} alt='truck icon' />
          <div className="service-desc">
            <h2>Free Shipping</h2>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className='tutorial-container'>
          <h1>How it works</h1>
          <div className="line-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
              <path d="M0 1H466" stroke="#FDD6BA" stroke-width="2"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
              <path d="M0 1H466" stroke="#FDD6BA" stroke-width="2"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
            </svg>
          </div>
          <div className="step-tutorial-container">
            <div className="step-tutorial-content">
              <h1>01</h1>
              <h2>Pick your coffee</h2>
              <p>
                Select from our evolving range of artisan coffees.
                Our beans are ethically sourced and we pay fair prices for them.
                There are new coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div className="step-tutorial-content">
              <h1>02</h1>
              <h2>Choose the frequency</h2>
              <p>
                Customize your order frequency, quantity, even your roast style and grind type.
                Pause, skip or cancel your subscription with no commitment through our online portal.
              </p>
            </div>
            <div className="step-tutorial-content">
              <h1>03</h1>
              <h2>Receive and enjoy!</h2>
              <p>
                We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                world-class coffees curated to provide a distinct tasting experience.
              </p>
            </div>
          </div>
          <Button color='#FEFCF7'>
            <Link className='create-plan' to='subscribe'>Create your plan</Link>
          </Button>
      </section>

    </main>


  )
}

export default Home