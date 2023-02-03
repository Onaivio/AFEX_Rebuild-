import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'
import pin from '../assets/images/pin.png'
import mastercard from '../assets/images/mastercard.png'

const MyCards = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType
    return (
        <div className=''>
            <span className='font-semibold text-2xl'>My Cards</span>
            <div className='my-4 rounded-[10px] bg-redBrown flex flex-col p-6 text-lightGray'>
                <div className='flex justify-between items-center'>
                    <img src={pin} alt="card pin" />
                    <img src={mastercard} alt="mastercard" />
                </div>
                <div className='flex justify-between items-center mt-10'>
                    <span>Gabriel Mark</span>
                    <span>09/28</span>
                </div>
                <div className='font-semibold text-lg w-full flex justify-between mt-4 items-center'>
                    <span>5282</span>
                    <span>****</span>
                    <span>****</span>
                    <span>1289</span>
                </div>
            </div>
            <button className={`${theme === 'light' ? 'bg-lightRed' : 'bg-btn'} w-full rounded-xl text-center text-redBrown py-3`}>Add new card</button>
        </div>
    )
}

export default MyCards