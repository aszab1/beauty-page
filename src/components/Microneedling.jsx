import { products } from "./Products"

export default function Microneedling(){
  
  const microProducts = products.filter(product => product.name === 'MICRONEEDLING' && product.description)

  const formattedProducts = microProducts.map(product => ({
    ...product,
    product: product.product.replace(/^With/, 'with')
  }))

  return(
    <>
    <div className="micro-info">
    <h1>Microneedling</h1>
    <p>Microneedling uses hundreds of tiny micro-needles to stimulate the natural production of collagen and elastin under the skin&apos;s surface. </p> 
    <p>This is a premium anti-ageing treatment, helping to repair, renew and refresh tired, wrinkled or sagging facial skin, smoothing away fine lines and wrinkles and generating new skin cells. It is also an outstanding skin resurfacing treatment, ideal for treating delicate areas of the face, as well as a variety of skin conditions including acne scarring and large pores. </p>
    <p>Prior to treatment skin will be cleansed and prepared. For optimum results, we recommend a course of 3-5 full treatments, followed by regular maintenance sessions.</p>
    </div>

    {formattedProducts.map((product, index) => (
      <div key={index} className="product-info">
      <h5>Microneedling {product.product}</h5>
      {product.description && <p dangerouslySetInnerHTML={{ __html: product.description }}></p>}
    </div>
    ))}
    
    </>
  )
}