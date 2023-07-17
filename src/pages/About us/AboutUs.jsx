import React from 'react'
import './about-us.css'
import uk from '../../assets/about/desktop/illustration-uk.svg'
import canada from '../../assets/about/desktop/illustration-canada.svg'
import australia from '../../assets/about/desktop/illustration-australia.svg'

function AboutUs() {
  return (
    <main className='side-padding'>
        <section className="a-hero">
                <h1>About Us</h1>
                <p>
                    Coffeeroasters began its journey of exotic discovery in 1999,
                    highlighting stories of coffee from around the world.
                    We have since been dedicated to bring the perfect cup
                    - from bean to brew - in every shipment.
                </p>
        </section>

        <section className="commitment">
            <div className='coffee-making-img' />
            <div className="commitment-desc">
                <h1>Our commitment</h1>
                <p>
                    We’re built on a simple mission and a commitment to doing good along the way.
                    We want to make it easy for you to discover and brew the world’s best coffee at home.
                    It all starts at the source. To locate the specific lots we want to purchase,
                    we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places.
                    We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks.
                    We also offer training, support farm community initiatives,
                    and invest in coffee plant science. Curating only the finest blends,
                    we roast each lot to highlight tasting profiles distinctive to their native growing region.
                </p>
            </div>
        </section>

        <section className="quality">
            <div className="coffee-img" />
            <div className="quality-desc">
                <h1>Uncompromising quality</h1>
                <p>
                    Although we work with growers who pay close attention to all stages of harvest and processing,
                    we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry.
                    Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
                    consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
            </div>
        </section>

        <section className="headerquarters">
            <h2>Our headquarters</h2>
            <div className="hq-container">
                <div className="headerquarter">
                    <img src={uk} alt='uk map' />
                    <h2>United Kingdom</h2>
                    <p>
                        68  Asfordby Rd <br />
                        Alcaston <br />
                        SY6 1YA <br />
                        +44 1241 918425 <br />
                    </p>
                </div>
                <div className="headerquarter">
                    <img src={canada} alt='canada map' />
                    <h2>Canada</h2>
                    <p>
                        1528  Eglinton Avenue <br />
                        Toronto <br />
                        Ontario M4P 1A6 <br />
                        +1 416 485 2997 <br />
                    </p>
                </div>
                <div className="headerquarter">
                    <img src={australia} alt='australia map' />
                    <h2>Australia</h2>
                    <p>
                        36 Swanston Street <br />
                        Kewell <br />
                        Victoria <br />
                        +61 4 9928 3629 <br />
                    </p>
                </div>
            </div>
        </section>
       
    </main>
  )
}

export default AboutUs