import { products } from "./Products"

export default function AddTreatments(){

  const jellies = products.filter(product => product.name == 'HYPERBOOST JELLY MASKS')

  return(


    <>
    <div className="jelly-info">
    <h2 className="jelly-h2">Hyperboost Jelly Masks</h2>
    </div>
    {jellies.map((product, index) => (
      <div key={index} className="product-info">
      <p>❖ ⁕🌸 <strong>{product.product}</strong> {product.addinfo}: {product.description }</p>
    </div>
    ))}
    <h2>LED Light Therapy</h2>
    </>
  )
}