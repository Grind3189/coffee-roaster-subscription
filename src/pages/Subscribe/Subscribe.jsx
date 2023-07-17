import React, { useState, useContext } from 'react'
import './subscribe.css'
import { checkTruthyData } from '../../utils'
import Subscription from '../../components/Subscription/index'
import Categories from './Categories'
import OrderSummary from './OrderSummary'
import OrderModal from './OrderModal'
import Button from '../../components/Button/Button'
import { SubscriptionContext } from '../../components/Subscription/SubscriptionContext'

function Subscribe() {
    const [order, setOrder] = useState(false)
    const {subscriptionData} = useContext(SubscriptionContext)

    const showOrder = () => {
        setOrder(true)
    }
    const hideOrder = () => {
        setOrder(false)
    }
    
    
  return (
    <main className='side-padding'>
        <section className="s-hero">
            <h1>Create a plan</h1>
            <p>
                Build a subscription plan that best fits your needs. We offer an assortment of the best 
                artisan coffees from around the globe delivered fresh to your door.
            </p>
        </section>

        <section className="how-to">
            <div className="line-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" stroke-width="2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
                <path className='hr-line' d="M0 1H466" stroke="#FDD6BA" stroke-width="2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" stroke-width="2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
                <path className='hr-line' d="M0 1H466" stroke="#FDD6BA" stroke-width="2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" stroke-width="2"/>
                </svg>
            </div>
            <div className="step-by-step">
                <div className="step">
                    <h1>01</h1>
                    <h3>Pick your coffee</h3>
                    <p>
                        Select from our evolving range of artisan coffees.
                        Our beans are ethically sourced and we pay fair prices for them. 
                        There are new coffees in all profiles every month for you to try out.
                    </p>
                </div>
                <div className="step">
                    <h1>02</h1>
                    <h3>Choose the frequency</h3>
                    <p>
                        Customize your order frequency, quantity, even your roast style and grind type. 
                        Pause, skip or cancel your subscription with no commitment through our online portal.
                    </p>
                </div>
                <div className="step">
                    <h1>03</h1>
                    <h3>Receive and enjoy!</h3>
                    <p>
                        We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                        world-class coffees curated to provide a distinct tasting experience.
                    </p>
                </div>
            </div>
        </section>

        <section className='subscription'>
            <Categories subscriptionData={subscriptionData} />

            <div className="subscription-content">
                <Subscription>
                    <div className="s-title">
                        <label>How do you drink your coffee?</label>
                        <Subscription.Button />
                    </div>
                    <Subscription.Menu>
                        <div className="s-items">
                            <Subscription.Item 
                                name='preferences'
                                title='Capsule'
                                >Compatible with Nespresso systems and similar brewers
                            </Subscription.Item>
                            <Subscription.Item 
                                name='preferences'
                                title='Filter'
                                >For pour over or drip methods like Aeropress, Chemex, and V60
                            </Subscription.Item>
                            <Subscription.Item 
                                name='preferences'
                                title='Espresso'
                                >Dense and finely ground beans for an intense, flavorful experience
                            </Subscription.Item>
                        </div>
                    </Subscription.Menu>
                </Subscription>
                <Subscription>
                <div className="s-title">
                    <label>What type of coffee?</label>
                    <Subscription.Button />
                </div>
                <Subscription.Menu>
                    <div className="s-items">
                        <Subscription.Item 
                            name='beanType'
                            title='Single Origin'
                            >Distinct, high quality coffee from a specific family-owned farm
                        </Subscription.Item>
                        <Subscription.Item 
                            name='beanType'
                            title='Decaf'
                            >Just like regular coffee, except the caffeine has been removed
                        </Subscription.Item>
                        <Subscription.Item 
                            name='beanType'
                            title='Blended'
                            >Combination of two or three dark roasted beans of organic coffees
                        </Subscription.Item>
                    </div>
                </Subscription.Menu>
                </Subscription>
                <Subscription>
                    <div className="s-title">
                        <label>How much would you like?</label>
                        <Subscription.Button />
                    </div>
                    <Subscription.Menu>
                        <div className="s-items">
                            <Subscription.Item 
                                name='quantity'
                                title='250g'
                                >Perfect for the solo drinker. Yields about 12 delicious cups.
                            </Subscription.Item>
                            <Subscription.Item 
                                name='quantity'
                                title='500g'
                                >Perfect option for a couple. Yields about 40 delectable cups.
                            </Subscription.Item>
                            <Subscription.Item 
                                name='quantity'
                                title='1000g'
                                >Perfect for offices and events. Yields about 90 delightful cups.
                            </Subscription.Item>
                        </div>
                    </Subscription.Menu>
                </Subscription>
                <Subscription>
                    <div className="s-title">
                        <label>Want us to grind them?</label>
                        <Subscription.Button />
                    </div>
                    <Subscription.Menu>
                        <div className="s-items">
                            <Subscription.Item 
                                name='grind'
                                title='Wholebean'
                                >Best choice if you cherish the full sensory experience
                            </Subscription.Item>
                            <Subscription.Item 
                                name='grind'
                                title='Filter grind'
                                >For drip or pour-over coffee methods such as V60 or Aeropress
                            </Subscription.Item>
                            <Subscription.Item 
                                name='grind'
                                title='Cafetiére'
                                > Course ground beans specially suited for french press coffee
                            </Subscription.Item>
                        </div>
                </Subscription.Menu>
                </Subscription>
                <Subscription>
                    <div className="s-title">
                        <label>How often should we deliver?</label>
                        <Subscription.Button />
                    </div>
                    <Subscription.Menu>
                        <div className="s-items">
                            <Subscription.Item 
                                name='deliveries'
                                title='Every week'
                                >$7.20 per shipment. Includes free first-class shipping.
                            </Subscription.Item>
                            <Subscription.Item 
                                name='deliveries'
                                title='Every 2 weeks'
                                >$9.60 per shipment. Includes free priority shipping.
                            </Subscription.Item>
                            <Subscription.Item 
                                name='deliveries'
                                title='Every month'
                                >$12.00 per shipment. Includes free priority shipping.
                            </Subscription.Item>
                        </div>
                    </Subscription.Menu>
                </Subscription>
                <div className="order-summary">
                    <OrderSummary />
                </div>


                <Button 
                    color='white' 
                    fontSize='18px' 
                    fontWeight='900' 
                    handleClick={showOrder}
                    name='s-create-plan'
                    isDisabled={checkTruthyData(subscriptionData)}
                >
                    {checkTruthyData(subscriptionData) ? 'Place order' : 'Create my plan!' }
                </Button>
            </div>
        </section>

        

        {order && <OrderModal handleClick={hideOrder} />}
        

    </main>
  )
}

export default Subscribe