import React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import microneeding from '../assets/images/microneedling.jpg'
import { products } from '../assets/products'
import fadeInVariants from "../assets/fadeInVariants"
import TreatmentInfo from "./TreatmentInfoSection"


export default function Microneedling(){
  
  const microProducts = products
    .filter(product => product.name === 'MICRONEEDLING' && product.description)
    .map(product => ({
      ...product,
      product: product.product.replace(/^With/, 'with'),
    }))

    const microRef = useRef(null)
    const microInView = useInView(microRef, {once: true})

    const microInfo = [
      { time: '30mins', downtime: 'Varies', results: '7 days', lasts: 'Varies' }
    ]

  return(
    <>
    <section className='section'>
      <img className='micro' src={microneeding} alt="" />
    <div className='micro-info'>
    <h2 style={{fontStyle: 'italic'}}>Microneedling</h2>
    <motion.div ref={microRef}
    initial='hidden'
    animate={microInView ? 'visible' : 'hidden'}
    variants={fadeInVariants}
    >
    <p>Microneedling uses hundreds of tiny micro-needles to stimulate the natural production of collagen and elastin under the skin&apos;s surface. </p> 
    <p>This is a premium anti-ageing treatment, helping to repair, renew and refresh tired, wrinkled or sagging facial skin, smoothing away fine lines and wrinkles and generating new skin cells. It is also an outstanding skin resurfacing treatment, ideal for treating delicate areas of the face, as well as a variety of skin conditions including acne scarring and large pores. </p>
    <p>Prior to treatment skin will be cleansed and prepared. For optimum results, we recommend a course of 3-5 full treatments, followed by regular maintenance sessions.</p>
    <TreatmentInfo items={microInfo} />
    </motion.div>
    </div>
    </section>

    {microProducts.map(({ product, description }, index) => (
      <div key={index} className='product-info'>
        <h5>Microneedling {product}</h5>
        {description && description.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    ))}
  </>
  )
}