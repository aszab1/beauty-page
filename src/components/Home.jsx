import salon from '../assets/images/stock-photo1.webp'
import dee from '../assets/images/dee.jpeg'

export default function Home(){

  return(
    <>
    <img className='salon' src={salon} alt="pocture of salon" />
    <section className='intro'>
      <div className='intro-text'>
      <h3 className='welcome'>Welcome to</h3>
      <h4 className='beauty'>Enhance My Natural Beauty</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate totam, nostrum cum eligendi cumque tenetur quod dignissimos, odio atque magni architecto vel laboriosam, laborum maxime ab culpa debitis veniam repellat?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit quam blanditiis commodi at veniam sunt illo excepturi itaque, repudiandae alias accusantium accusamus mollitia sit ipsa dicta? Laborum, quis laudantium.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias vel sit earum neque officia. Perferendis impedit quibusdam iste ipsum assumenda voluptate, ad facere eligendi ipsa ducimus numquam quisquam ratione? Totam!</p>
      </div>
      <img className='dee' src={dee} alt="picture of Dee" />
    </section>

      </>
  )
}