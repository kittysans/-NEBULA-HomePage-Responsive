import './Collections.css'

import FirstBox from './Assets/imgs/Collections/1.jpg'
import SecondBox from './Assets/imgs/Collections/2.jpg'
import ThirdBox from './Assets/imgs/Collections/3.jpg'
import FourthBox from './Assets/imgs/Collections/4.jpg'

import ImageComponent from './ImageComponent'

function Collections() {
    return (
        <>
            <div className="introduce-journey">
                <h1 className='text'>nebula is a journey of<br/>personal growth, following<br/>your passions and developing<br/>into the complete individual<br/>you want to be.</h1>
            </div>

            <div id='collects-container' className="collects-container">
                <div className="box">
                    {<ImageComponent src={FirstBox} index={'first-box'}/>}
                    <div className="text">
                        <h1 className='title'>new arrivals</h1>
                        <button className="view-bt">view more</button>
                    </div>
                </div>
                <div className="box">
                    {<ImageComponent src={SecondBox} index={'sec-box'}/>}
                    <div className="text">
                        <h1 className='title'>best seller</h1>
                        <button className="view-bt">view more</button>
                    </div>
                </div>
                <div className="box">
                    {<ImageComponent src={ThirdBox} index={'th-box'}/>}
                    <div className="text">
                        <h1 className='title'>collaborations</h1>
                        <button className="view-bt">view more</button>
                    </div>
                </div>
                <div className="box">
                    {<ImageComponent src={FourthBox} index={'fr-box'}/>}
                    <div className="text">
                        <h1 className='title'>collections</h1>
                        <button className="view-bt">view more</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collections