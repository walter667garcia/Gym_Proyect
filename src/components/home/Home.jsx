import '../home/home.css'
import Header from '../header/Header'


const Home = () => {
    return (
        <div className='home'>

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

                    <div className="span">
                        In here we will help you to shape and build your ideal body
                    </div>
                </div>
            </div>

            <div className='right-h'>right side</div>

        </div>
    )
}

export default Home