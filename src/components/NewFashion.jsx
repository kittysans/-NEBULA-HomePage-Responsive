import './NewFashion.css'

import AsideBg from './Assets/imgs/NewFashion/Fashion Bg.jpg'

import ImageComponent from './ImageComponent'

function NewFashion() {
  return (
    <>
        <div className="new-fashion-container">
            <div className='aside-bg'>
              {<ImageComponent src={AsideBg}/>}
            </div>

            <div className="text">
                <p className="title">new in fashion</p>
                <h1 className='content'>stay one step<br/>ahead in standout<br/>spring style.</h1>
                <button className="shop-bt">shop now</button>
            </div>
        </div>
    </>
  )
}

export default NewFashion