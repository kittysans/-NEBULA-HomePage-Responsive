import { useEffect, useRef, useState } from 'react'
import './ImageComponent.css'

export default function ImageComponent({ src, index }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  
  function show() {
    setIsImgLoaded(true)
  }

  useEffect(() => {
    const img = document.querySelector(`#${index}`)

    if (img.complete) {
      show()
    } else {
      img.addEventListener('load', show)
    }
  }, [src])

  return (
    <>
        <div className="img-container">
            <img src={src} loading='lazy' id={index}/>
        </div>
    </>
  )
}