import React from 'react'
import '../styles/Guess.css'

const Guess = () => {
  return (
    <div className='contain_guess'>
        <div className='linelogo_guess'>
            <div className='line_guess'/>
            <img src='../src/assets/guess.png'/>
        </div>

        <div className='gue1'>
            <img src='../src/assets/guess2.png'/>
            <div className='gue1_text'>
                <p className='gue1_text_p1'>GUESS WHO'S HERE?</p>
                <p className='gue1_text_p2'>Bilo da tražiš upadljiv komad ili nešto suptilnije, Guess ima ponešto za svakoga. Kvalitetna izrada i pažnja prema detaljima su njihov adut, pa ćeš sigurno uživati u njihovom nakitu. Ako želiš da osvježiš svoj stil i uneseš malo luksuza, Guess nakit je pravi izbor.</p>
            </div>
        </div>

        <div className='gue2'>
            <p>Guess komadi su izrađeni s kvalitetom i pažnjom prema detaljima, tako da će sigurno dugo trajati u tvojoj kolekciji. Ako želiš da osvežiš svoj stil ili pronađeš savršen poklon, Guess nakit je pravi izbor!</p>
            <img src='../src/assets/guess3.png'/>
        </div>
    </div>
  )
}

export default Guess