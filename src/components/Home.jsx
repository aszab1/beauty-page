import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import salon from '../assets/images/stock-photo1.webp'
import dee from '../assets/images/dee.jpeg'

export default function Home() {

  const deeImgRef = useRef(null)
  const paragraphsRef = useRef(null)

  const deeImgInView = useInView(deeImgRef, { once: true })
  const paragraphsInView = useInView(paragraphsRef, { once: true })
  
  const [isLoaded, setIsLoaded] = useState(false)

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }
  }
  

  return (
    <>
      <img className='salon' src={salon} alt="picture of salon" />
      <section className='intro'>

        <div className='intro-text'>
          <h3 className='welcome'>Welcome to</h3>
          <h4 className='beauty'>Enhance My Natural Beauty</h4>
          <motion.div
            ref={paragraphsRef}
            initial="hidden"
            animate={paragraphsInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate totam, nostrum cum eligendi cumque tenetur quod dignissimos, odio atque magni architecto vel laboriosam, laborum maxime ab culpa debitis veniam repellat?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit quam blanditiis commodi at veniam sunt illo excepturi itaque, repudiandae alias accusantium accusamus mollitia sit ipsa dicta? Laborum, quis laudantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias vel sit earum neque officia. Perferendis impedit quibusdam iste ipsum assumenda voluptate, ad facere eligendi ipsa ducimus numquam quisquam ratione? Totam!</p>
        </motion.div>
        </div>

        <motion.img
          ref={deeImgRef}
          className='dee'
          src={dee}
          alt="picture of Dee"
          onLoad={() => setIsLoaded(true)}
          initial={{ maskImage: 'repeating-linear-gradient( 90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={
            isLoaded && deeImgInView
              ? { maskImage: 'repeating-linear-gradient( 90deg, black 0%, black 100%, transparent 100%, transparent 100%)' }
              : {}}
          transition={{ duration: 2, ease: 'easeInOut' }} />
      </section>

    </>
  )
}