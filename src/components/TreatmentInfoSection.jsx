import { Icon } from '@iconify/react'

export default function TreatmentInfo({ items }) {
  return (
    <>
      <section className='treatment-info'>
        {items.map((item, index) => (
          <div key={index} className='treatment-info-section'>
            <p><Icon className='time-icon' icon='ri:time-line'></Icon> Time: {item.time}</p>
            <p><Icon className='downtime-icon' icon='icons8:down-round'></Icon> Downtime: {item.downtime}</p>
            <p><Icon className='results-icon' icon='iconamoon:eye'></Icon> Results: {item.results}</p>
            <p><Icon className='lasts-icon' icon='uiw:loading'></Icon> Lasts: {item.lasts}</p>
          </div>
        ))}
      </section>
    </>
  )
}