import { products } from "./Products"
import jelly from '../assets/images/jellymask.jpg'

export default function JellyMasks(){

  const jellies = products.filter(product => product.name == 'HYPERBOOST JELLY MASKS')

  return(


    <>
    <section className="mask-section">
      <img className="mask" src={jelly} alt="" />
      <div className="jelly-info">
    <h3 className="jelly-h3">Hyperboost Jelly Masks</h3>
    <p>All masks contain Pectin-rich in Vitamins A & C. <br />
Pectin binds to moisture helping to keep the skin dewy and fresh, also promotes cell renewal and acts as an anti-ageing product.
<br/> These masks form a vacuum-like seal that compresses facial contours with an instant cooling, hydrating and lifting effect.</p>
</div>
    </section>
    {jellies.map((product, index) => (
      <div key={index} className="jellies">
      <p>❖ ⁕ <strong>{product.product}</strong> {product.addinfo}: {product.description }</p>
    </div>
    ))}
    </>
  )
}