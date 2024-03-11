import { useState } from 'react'
import Arrow from '../../assets/Arrow.png'
import './carrousel.scss'

function Carrousel({ Pictures }) {
  const [slider, setSlider] = useState(0)
  const prevNext = (slider, change) => {
    if (change === 'previous') {
      slider === 0 ? setSlider(Pictures.length - 1) : setSlider(slider - 1)
    } else {
      slider === Pictures.length - 1 ? setSlider(0) : setSlider(slider + 1)
    }
  }
  return (
    <div className="carrouselBox">
      {Pictures.length !== 1 ? (
        <div>
          <img
            src={Arrow}
            alt="Arrow"
            className="previous"
            onClick={() => prevNext(slider, 'previous')}
          ></img>
          <img
            src={Arrow}
            alt="Arrow"
            className="next"
            onClick={() => prevNext(slider, 'next')}
          ></img>
        </div>
      ) : (
        <div></div>
      )}
      <img
        src={Pictures[slider]}
        alt="Présentation du site"
        className="slides"
      />
    </div>
  )
}

export default Carrousel
