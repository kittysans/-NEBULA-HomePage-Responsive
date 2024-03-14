import './BestSellers.css'

import { BestSellersPackage } from './DataPackage'

import ImageComponent from './ImageComponent'

function BestSellers() {
    return (
        <>
            <div className="sell-container">
                <div className="bar">
                    <h1 className='title'>our bestsellers</h1>
                    <button className="view-move-bt">view more</button>
                </div>

                <div className="products-container">
                    {BestSellersPackage.map((product, index) => (
                        <div className="card" key={index}>
                            <div className="img-section">
                                <ImageComponent src={product.imgs.Show}/>
                            </div>
                            <div className="details">
                                <p className="member">member product</p>
                                <p className='name'>{product.Name}</p>
                                <p className='category'>men's sheos</p>
                                <p className='price'>$115</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BestSellers