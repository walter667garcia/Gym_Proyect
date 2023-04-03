import '../hero/hero.css'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className='hero'>

            <div className='left-h'>
                <Header />

                {/* the best ad */}
                <div className="the-best-ad">
                    <div>

                    </div>
                    <span>
                        The best fitness club in the town
                    </span>
                </div>

                {/* hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <span>Ideal Body </span>
                    </div>

                    <div>
                        <span className="span">
                            In here we will help you to
                            shape and build your ideal body
                        </span>

                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+80</span>
                        <span>expert coachs</span>
                    </div>

                    <div>
                        <span>+1578</span>
                        <span>menbers joined</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>

                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started </button>
                    <button className="btn">Learn More</button>
                </div>

            </div>

            <div className='right-h'>

                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>~ 123 bpm</span>
                </div>
                {/* hero images */}

                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />

                {/* Colories  */}
                <div className="calories">

                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>182 kcal</span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Hero