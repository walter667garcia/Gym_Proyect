import '../Reasons/reasons.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'


const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} className='left-img' alt="" />
                <img src={image2} className='left-img' alt="" />
                <img src={image3} className='left-img' alt="" />
                <img src={image4} className='left-img' alt="" />
            </div>

            <div className="right-r">

                <span>some reasons</span>
                <div>
                    <span className="stroke-text">Why </span>
                    <span>choose us?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTED AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>REALIABLE PARTNERS</span>
                    </div>

                </div>
                <h3 className='our'>
                    OUR PARTNERS
                </h3>
                <div className="partners">
                    <img src={adidas} alt="" />
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Reasons