import peel from '../assets/images/peel.jpg'
import { Icon } from '@iconify/react'

export default function ChemicalPeels(){

  return(
    <>
    <section className='section'>
      <img className='peel' src={peel} alt="" />
    <div className='peel-div'>
    <h3 className='peel-p'>Chemical Peels</h3>
    <p>Chemical Peels are designed to remove layers of tired, lackluster or dull looking skin, even-out skin tone and reveal new layers of fresher, brighter, glowing skin underneath. 
      <br />Recommended 4 to 6 sessions 2 weeks apart.</p>
      <section className='treatment-info-section'>
      <p><Icon className='time-icon' icon='ri:time-line'></Icon> Time: 30 mins</p>
      <p><Icon className='downtime-icon' icon='icons8:down-round'></Icon> Downtime: Varies</p>
      <p><Icon className='results-icon' icon='iconamoon:eye'></Icon> Results: 7 days</p>
      <p><Icon className='lasts-icon' icon='uiw:loading'></Icon> Lasts: Varies</p>
      </section>
      </div>
      </section>
      <section className='infinity'>
    <h5 className='h5-infinity'>INFINI Premium BioAgePeel</h5>
    <p>Innovative medical-grade chemical stimulator combining trichloroacetic, kojic, and mandelic acids for deep skin revitalization. This treatment intensively rejuvenates without damaging the outer layers of skin or compromising photoprotective structures, making it safe for year-round use.
    <br />It is recommended to add either LED Light Therapy and/or Jelly mask to calm the skin and speed up the healing process. </p>
    </section>
    
    </>
  )
}