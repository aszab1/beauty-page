import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import peel from '../assets/images/peel.jpg'
import TreatmentInfo from './TreatmentInfoSection'
import AccordionFunction from './Accordion'
import fadeInVariants, {fadeInVariantsTwo } from '../assets/fadeInVariants'



export default function ChemicalPeels() {

  const chemPeelRef = useRef(null)
  const infiniRef = useRef(null)

  const chemPeelInView = useInView(chemPeelRef, { once: true })
  const infiniInView = useInView(infiniRef, { once: true })

  const chemPeelItems = [
    { title: 'How do chemical peels work?', content: 'A chemical solution is applied to exfoliate the skin, causing it to peel and remove dead cells. This process helps reduce pigmentation, blemishes, acne, and the appearance of open pores.'},
    { title: 'Treatable conditions', content: 'Skin Peels are effective in treating a number of condition such as: acne, ageing skin, pigmentation, lines & wrinkles, sun damage, scars.' },
    { title: 'How many treatments?', content: 'Recommended 4 to 6 sessions 2 weeks apart.' },
    { title: 'What are the results?', content: 'New skin generally starts to appear 7-10 days after the Peel.' },
    { title: 'Is there downtime?', content: 'You may experience redness, dryness, stinging or burning, and slight swelling.  Normal activity may be resumed after the peel, however strenuous exercise and heavy sweating should be avoided for 2-3 days.' },
    { title: 'What is the aftercare?', content: 'For a few days following the treatment, try to avoid touching, picking, peeling, or prodding your face. Avoid saunas, extended sun exposure, and intense exercise sessions.' },
  ]

  const chemPeelInfo = [
    { time: '30mins', downtime: 'Varies', results: '7 days', lasts: 'Varies' }
  ]

  return (
    <>
      <section className='section'>
        <img className='peel' src={peel} alt="" />
        <motion.div ref={chemPeelRef}
          className='peel-div'
          initial='hidden'
          animate={chemPeelInView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
        >
          <h3 className='peel-p'>Chemical Peels</h3>
          <p>Chemical peels are a popular, non-invasive skin treatment designed to rejuvenate and revitalize complexion by removing layers of dull, tired skin, revealing a fresher, more radiant glow. </p>
          <p>These treatments help to improve the appearance of fine lines, wrinkles, acne scars, and pigmentation issues, providing a smoother, more even skin tone.</p>
          <p>Many clients see immediate improvements with minimal downtime, making chemical peels an ideal choice for achieving radiant, youthful-looking skin.</p>
          < TreatmentInfo items={chemPeelInfo}/>
        </motion.div>
      </section>
      <motion.section ref={infiniRef}
        className='infinity'
        initial='hidden'
        animate={infiniInView ? 'visible' : 'hidden'}
        variants={fadeInVariantsTwo}>
        <h5 className='h5-infinity'>INFINI Premium BioAgePeel</h5>
        <p>Innovative medical-grade chemical stimulator combining trichloroacetic, kojic, and mandelic acids for deep skin revitalization. This treatment intensively rejuvenates without damaging the outer layers of skin or compromising photoprotective structures, making it safe for year-round use.
          <br />It is recommended to add either LED Light Therapy and/or Jelly mask to calm the skin and speed up the healing process. </p>
      </motion.section>

      <h4 style={{ marginBottom: '1.5em', textAlign: 'center' }}>Chemical Peels FAQs</h4>

      <AccordionFunction items={chemPeelItems} />

    </>
  )
}