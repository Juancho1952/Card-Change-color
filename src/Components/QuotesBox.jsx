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
                <a href="https://app.netlify.com/teams/juancho1952/overview?_ga=2.156559931.1604556809.1662682536-1631014398.1662385992" target="_blank"> <i className='bx bxl-netlify bx-spin bx-rotate-270' ></i> </a>
            </article>
        </main>
    )
}

export default QuotesBox