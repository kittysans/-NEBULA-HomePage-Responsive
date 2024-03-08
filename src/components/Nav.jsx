import { useEffect } from 'react'
import './Nav.css'

import { TbHeart } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { PiNotePencil } from "react-icons/pi";
import { TbLogin2 } from "react-icons/tb";

import { LiaBarsSolid } from "react-icons/lia";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function nav() {
    useEffect(() => {
        const navContainer = document.getElementById('nav-container')
        const openMenuBt = document.getElementById('open-menu-bt')
        const closeMenuBt = document.getElementById('close-menu-bt')

        function toggleMenu() {
            navContainer.classList.toggle('active')
        }

        closeMenuBt.addEventListener('click', toggleMenu)
        openMenuBt.addEventListener('click', toggleMenu)
    }, [])
  return (
    <>
       <div id='nav-container' className="effect-blur-nav">
            <div className="nav">
                <AiOutlineClose id='close-menu-bt' className='close-icon'/>

                <div className="row-1">
                    <p className="login-text">Become a Nike Member for the best products, inspiration and stories in sport. <span>Learn more</span></p>

                    <div className="regster">
                        <p>regster</p>
                        <PiNotePencil className='icon'/>
                    </div>

                    <div className="text">
                        <p>free shippng on orders over us$190</p>
                    </div>

                    <div className="login">
                        <p>login</p>
                        <TbLogin2 className='icon'/>
                    </div>
                </div>

                <div className="row-2">
                    <div className="categorys">
                        <p className='item'>woman <MdArrowForwardIos className='arrow' /></p>
                        <p className='item'>man <MdArrowForwardIos className='arrow' /></p>
                        <p className='item'>kids <MdArrowForwardIos className='arrow' /></p>
                    </div>

                    <div className="brand">nebula</div>

                    <div className="activities">
                        <TbHeart className='icon'/>
                        <TbSearch className='icon'/>
                        <TbShoppingBag className='icon'/>
                    </div>
                </div>

                <div className='row-3'>
                    <div>new arrivals</div>
                    <div>designers</div>
                    <div>clothing</div>
                    <div>shoes</div>
                    <div>accessores</div>
                    <div>collaborations</div>
                    <div>sale</div>
                </div>
            </div>
       </div>

       {/* nav phone layout */}
       <div className="nav-phone-container">
            <div className="header">
                <div className="brand">nebula</div>
                <div className="activities">
                    <TbHeart className='icon'/>
                    <TbSearch className='icon'/>
                    <TbShoppingBag className='icon'/>
                    <LiaBarsSolid id='open-menu-bt' className='menu-icon'/>
                </div>
            </div>
            <div className="text">
                <p>free shippng on orders over us$190</p>
            </div>
       </div>
    </>
  )
}

export default nav