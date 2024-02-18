import '../testimonials/testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'
const Testimonials = () => {

  const [slected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">
          What they
        </span>
        <span>
          say about us
        </span>
        <span>
          {testimonialsData[slected].review}
        </span>
        <span>
          <span id='name-testimonials'>
            {testimonialsData[slected].name}
          </span> {"  - "}
          {testimonialsData[slected].status}
        </span>
      </div>
      <div className="right-t">

        <div></div>
        <div></div>
        <img src={testimonialsData[slected].image} alt="" />
        <div className='arrows'>
          <img
            onClick={() => (
              slected === 0 ? setSelected(tLenght - 1) :
                setSelected((prev) => prev - 1)
            )}
            src={LeftArrow} alt="" />
          <img
            onClick={() => (
              slected === tLenght - 1 
              ? setSelected(0) :
                setSelected((prev) => prev + 1)
            )}
            src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials