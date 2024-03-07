import './Promotion.css'

import Bg from './Assets/imgs/Promotions/Pro Bg.jpg'

import ImageComponent from './ImageComponent'

function Promotion() {
  return (
    <>
      <div className="promotion-container">
        <ImageComponent src={Bg}/>

        <div className="text">
          <h1 className="title">new season</h1>
          <p className="subtitle">exter 15% off code: rtt34</p>
          <button className="shop-bt">shop now</button>
        </div>
      </div>
    </>
  )
}

export default Promotion