import fatdissolving from '../assets/images/fatdissolving.webp'
import TreatmentInfo from './TreatmentInfoSection'

export default function FatDissolving(){

  const fatDisInfo = [
    { time: '', downtime: '', results: '', lasts: '' }
  ]

  return(
    <>
    <section className='section'>
      <img className='fatdissolving' src={fatdissolving} alt="" />
      <div className='fatdis-info'>
        <h2 style={{ fontStyle: 'italic'}}>Fat Dissolving Injections</h2>
        <p>Fat-dissolving injections are non-surgical treatments designed to reduce localized pockets of fat in targeted areas of the body.</p>
        <p>These injections use a specially formulated solution that breaks down fat cells, which are then naturally eliminated by the body’s metabolic processes over time. Often used on areas like the chin, abdomen, thighs, and flanks, they provide a minimally invasive alternative to liposuction, with minimal downtime and gradual, natural-looking results.</p>
      <TreatmentInfo items={fatDisInfo} />
      </div>
    </section>
    <section className='fatdis-options'>
    <h5 style={{fontWeight: '700'}}>The lemon Bottle</h5>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti rerum vel aspernatur facere, odio soluta! Cum, corporis beatae consequatur recusandae dolorem nihil qui officia facere, eius veniam illum iure aperiam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio at et optio nam libero, hic odit accusamus, cum magnam culpa iste doloremque quia iure excepturi neque? Quibusdam, nostrum voluptatibus?</p>
    <h5 style={{fontWeight: '700'}}>Aqualyx</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta commodi eum quia? Voluptas totam quam possimus, quos voluptates quibusdam et eum? Quas, ab aliquid! Quidem id eos atque non in?</p>
    </section>
    </>
  )
}