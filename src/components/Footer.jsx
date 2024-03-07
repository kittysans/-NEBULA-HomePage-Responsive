import './Footer.css'

import Bg from './Assets/imgs/Footer/Footer Bg.jpg'

import ImageComponent from './ImageComponent'

function Footer() {
  return (
    <>
        <div className="design-by-continer">
            <div className="bg">
                {<ImageComponent src={Bg}/>}
            </div>
            <h1 className='text'>designed in manchester, england with the<br/>highest level of detail and care, manufactured<br/>by ethical suppliers worldwide.<br/><br/>we aim to evolve our unique identity globally.</h1>
        </div>

        <div className="footer">
            <div className="row-container">
                <p className='row'><span>nebula</span><span>nebula</span><span>nebula</span><span>nebula</span></p>
                <p className='row'><span>nebula</span><span>nebula</span><span>nebula</span><span>nebula</span></p>
            </div>

            <div className="order-email">
                <h1>10% off for your first order</h1>
                <p>recive special discounts, exclusive access<br/>to new releases and muchmore.</p>

                <input type="text" placeholder='Enter your Email'/>
                <button className="sub-bt">subscribe</button>
            </div>

            <div className="info-service">
                <div className="info-container">
                    <h1>information</h1>
                    <p>size chart</p>
                    <p>account</p>
                    <p>klarna</p>
                    <p>laybuy</p>
                </div>

                <div className="service-container">
                    <h1>customer service</h1>
                    <p>shopping</p>
                    <p>returns</p>
                    <p>terms & conditions</p>
                    <p>pravacy policy</p>
                    <p>contact us</p>
                    <p>help</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer