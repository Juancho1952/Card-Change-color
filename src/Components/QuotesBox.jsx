import React from 'react'

const QuotesBox = ({ RandomQuote, RandomColor, getrandomAll}) => {
    const ColorObject = {
        backgroundColor: RandomColor
    }
    const ColorLetter ={
        color:RandomColor
    }

    return (
        <main className='Container-Card'>
            <article className="Card">
                <p style={ColorLetter}>{RandomQuote.quote}</p>
                <h2 style={ColorLetter}>{RandomQuote.author}</h2>
                <button className='ButtonChange' style={ColorObject} onClick={getrandomAll}>H
                <svg>
                    <rect x="0" y="0" fill='none'></rect>
                </svg>
                </button>
                <a href="https://github.com/Juancho1952/Card-Change-color" target="_blank"> <i className='bx bxl-github bx-spin' ></i> </a>
            </article>
        </main>
    )
}

export default QuotesBox