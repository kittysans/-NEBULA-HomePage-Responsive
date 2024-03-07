import { useEffect, useRef, useState } from 'react'
import './ImageComponent.css'

export default function ImageComponent({ src }) {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    
    const imgRef = useRef(null)

    useEffect(() => {
      const img = imgRef.current.querySelector('img')

      function show() {
        setIsImageLoaded(true)
      }

      if (img.complete) {
        show()
      } else {
        img.addEventListener('load', show)
      }
    }, [src])

  return (
    <>
        <div id='img' className="img-container" ref={imgRef}>
            <img src={src} loading='lazy' style={{ display: isImageLoaded ? 'block' : 'none'}}/>
        </div>
    </>
  )
}