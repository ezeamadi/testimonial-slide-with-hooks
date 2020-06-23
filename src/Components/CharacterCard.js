import React from 'react'
import '../App.css'
import IconNext from '../images/icon-next.svg'
import IconPrevious from '../images/icon-prev.svg'

const CharacterCard = ({ id, testimony, hobbies, name, position, image, nextClick, prevClick }) => {
  
  return (
    <div key={id}>
      <div className='container flex col'>
        <div className='card flex row' id='card-tanya'>
          <div className='card__info flex col'>
            <p className='card__desc' id='desc-tanya'>
              {testimony}
            </p>
            <p className='card__desc' id='desc-tanya'>
              <strong>
                <em>Hobbies: </em>
              </strong>
              {hobbies}
            </p>
            <p className='card__details flex row'>
              <span className='card__details__name' id='name-tanya'>
                {name}
              </span>
              <span className='card__details__position' id='pos-tanya'>
                {position}
              </span>
            </p>
          </div>

          <div className='card__imgs flex col'>
            <div className='card__img'>
              <img src={image} id='img-tanya' alt='people/tanya' />
            </div>
            <div className='card__btns flex'>
              <button
                className='card__btn card__btn--prev'
                aria-label='previous button'
                onClick = {prevClick}
              >
                <img src={IconPrevious} alt='' />
              </button>
              <button
                className=' card__btn card__btn--next'
                aria-label='next button'
                onClick={nextClick}
              >
                <img src={IconNext} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard