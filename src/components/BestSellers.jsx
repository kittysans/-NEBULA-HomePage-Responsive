import { useEffect } from 'react'
import './BestSellers.css'

import { BestSellersPackage } from './DataPackage'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

import ImageComponent from './ImageComponent'

function BestSellers() {
    useEffect(() => {
        const moveableElement = document.getElementById('moveable-element')
        const offsetXmoveableElement = moveableElement.offsetLeft

        const lastCard = document.getElementById('last-card')
        const dragCircle = document.getElementById('drag-circle')

        const ratioMarginRight = 2
        const spaceContent = window.innerWidth * (100 - ratioMarginRight) / 100
        const leftLastElement =  window.innerWidth - moveableElement.clientWidth

        let offsetX

        function move(e) {
            moveableElement.style.left = `${e.clientX - offsetX}px`

            dragCircle.classList.add('active')
        }

        moveableElement.addEventListener('mousedown', (e) => {
            offsetX = e.clientX - moveableElement.offsetLeft

            document.addEventListener('mousemove', move)
        })

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)

            const rightLastCard = lastCard.getBoundingClientRect().right;

            // check element not out of space
            if (moveableElement.offsetLeft > offsetXmoveableElement) {
                moveableElement.style.left = `${offsetXmoveableElement}px`
            } else if (rightLastCard < spaceContent) {
                moveableElement.style.left = `${leftLastElement}px`
            }

            dragCircle.classList.remove('active')
        })

        lastCard.addEventListener('click', () => moveableElement.style.left = `${offsetXmoveableElement}px`)
    }, [])

    return (
        <>
            <div className="sell-container">
                <h1 className='title'>our bestsellers</h1>

                <div id='moveable-element' className="products-container">
                    {BestSellersPackage.map((product, index) => (
                        <div className="card" key={index}>
                            {<ImageComponent src={product.imgs.Show} index={'bestsell'}/>}
                            <div className="detail">
                                <div className="name-price">
                                    <p className='name'>{product.Name}</p>
                                    <p className='price'>{`$${product.Price} USD`}</p>
                                </div>
                                <div className="list-colors">
                                    {product.colors.map((color, index) => (
                                        <div className='color' style={{ backgroundColor: `${color}`}} key={index}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div id='last-card' className="last-card">
                        <MdArrowBackIos className='arrow'/>
                    </div>
                </div>

                <div id='drag-circle' className="circle">
                    <p className='text'><MdArrowBackIos className='arrow'/>Drag<MdArrowForwardIos className='arrow'/></p>
                </div>

                <button className="view-move-bt">view more</button>
            </div>
        </>
    )
}

export default BestSellers