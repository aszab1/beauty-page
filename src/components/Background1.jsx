import SvgBackground from "./SvgBackground1"

const Background = () => {
  return (
    <div className="background-container">
      <div className="svg-left">
        <SvgBackground  className='lily-left'/>
      </div>
      <div className="svg-right">
        <SvgBackground className='lily-right' />
      </div>
    </div>
  )
}

export default Background
