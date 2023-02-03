import { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'

import wallet from '../assets/images/wallet.png'
import next from '../assets/images/next.png'
import nextBlack from '../assets/images/nextBlack.png'
import emptyWallet from '../assets/images/empty-wallet.png'
import outgoing from '../assets/images/outgoing.png'
import outgoingLight from '../assets/images/outgoingLight.png'
import incoming from '../assets/images/incoming.png'
import incomingLight from '../assets/images/incomingLight.png'

const cards = [
    {
        id: 1,
        img: emptyWallet,
        imgLight: emptyWallet,
        name: 'Total Balance',
        amount: '$50,000',
    },
    {
        id: 2,
        img: incoming,
        imgLight: incomingLight,
        name: 'Total Income',
        amount: '$50,000',
    },
    {
        id: 3,
        img: outgoing,
        imgLight: outgoingLight,
        name: 'Total Revenue',
        amount: '$50,000',
    },
]

interface IState {
    card: {
        id: number,
        name: string,
        amount: string
    }[]
}


const Card = () => {

    const { theme } = useContext(ThemeContext) as ThemeContextType;

    const active = 1;
    return (
        <div className='grid grid-cols-3 gap-8'>
            {cards.map(card => (
                <div id='hoverArrow' key={card.id} className={`${active === card.id && theme === 'dark' ? 'activeDark' : ''} ${active === card.id ? 'activeLight' : ''} ${theme === 'light' ? 'bg-white' : 'bg-iconDark text-white'} py-4 px-6 rounded-[10px]`}>
                    <div className='flex justify-between items-center'>
                        <div className={`${theme === 'light' ? 'bg-lightIcon' : 'bg-darkIcon'} ${active === card.id ? 'bg-activeIcon' : ''} p-2 rounded-lg flex items-center w-fit`}>
                            <img src={theme === 'light' ? card.imgLight : card.img} alt="wallet icon" />
                        </div>
                        {active === card.id || theme === 'dark' ? <img className='next' src={next} alt="next icon" /> : <img className='next' src={nextBlack} alt="next icon" />}
                    </div>
                    <p className='text-sm mt-4 mb-2'>{card.name}</p>
                    <span className='text-2xl font-bold'>{card.amount}</span>
                </div>
            ))}

        </div>
    )
}

export default Card