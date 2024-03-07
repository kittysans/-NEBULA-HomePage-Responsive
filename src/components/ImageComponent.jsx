import './ImageComponent.css'

export default function ImageComponent({ src }) {
  return (
    <>
        <div className="img-container">
          <img src={src} loading='lazy'/>
        </div>
    </>
  )
}