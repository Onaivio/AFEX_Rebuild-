import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'

import glowpay from '../assets/images/GlowPay.png'
import glowpayDark from '../assets/images/GlowPayDark.png'
import dashboard from '../assets/images/dashboard.png'
import dashDark from '../assets/images/dashDark.png'
import sms from '../assets/images/sms.png'
import smsDark from '../assets/images/smsDark.png'
import statistics from '../assets/images/statistics.svg'
import staDark from '../assets/images/staDark.png'
import transaction from '../assets/images/transaction.png'
import transDark from '../assets/images/transDark.png'
import wallet from '../assets/images/wallet.png'
import walletDark from '../assets/images/walletDark.png'
import setting from '../assets/images/setting.png'
import settingDark from '../assets/images/settingDark.png'
import logout from '../assets/images/logout.png'
import logoutDark from '../assets/images/logoutDark.png'

const Sidebar = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <div className={`${theme === 'light' ? 'bg-white' : 'darkSidebar'} w-60 pt-10 pl-10 h-screen fixed z-30`}>
            <a href='/'><img src={theme === 'light' ? glowpay : glowpayDark} alt="glowpay logo" /></a>
            <div className='flex flex-col justify-between h-full'>
                <ul className="mt-10">
                    <li className={`${theme === 'light' ? 'text-redBrown' : 'text-brightRed'} flex cursor-pointer mb-10`}>
                        <img src={theme === 'light' ? dashboard : dashDark} alt="dashboard icon" className='mr-4' />
                        Dashboard
                    </li>
                    <li className={`${theme === 'light' ? 'hover:text-redBrown' : 'hover:text-brightRed'} flex cursor-pointer mb-10`}>
                        <img src={theme === 'light' ? transaction : transDark} alt="dashboard icon" className='mr-4' />
                        Transactions
                    </li>
                    <li className={`${theme === 'light' ? 'hover:text-redBrown' : 'hover:text-brightRed'} flex cursor-pointer mb-10`}>
                        <img src={theme === 'light' ? wallet : walletDark} alt="dashboard icon" className='mr-4' />
                        Wallet
                    </li>
                    <li className={`${theme === 'light' ? 'hover:text-redBrown' : 'hover:text-brightRed'} flex cursor-pointer mb-10`}>
                        <img src={theme === 'light' ? statistics : staDark} alt="dashboard icon" className='mr-4' />
                        Statistics
                    </li>
                    <li className={`${theme === 'light' ? 'hover:text-redBrown' : 'hover:text-brightRed'} flex cursor-pointer mb-10`}>
                        <img src={theme === 'light' ? sms : smsDark} alt="dashboard icon" className='mr-4' />
                        Message
                    </li>
                </ul>
                <ul className='mb-10'>
                    <li className={`${theme === 'light' ? 'hover:text-redBrown' : 'hover:text-brightRed'} flex cursor-pointer mb-10`}>
                        <img src={theme === 'light' ? setting : settingDark} alt="dashboard icon" className='mr-4' />
                        Setting
                    </li>
                    <li className={`${theme === 'light' ? 'hover:text-redBrown' : 'hover:text-brightRed'} flex cursor-pointer`}>
                        <img src={theme === 'light' ? logout : logoutDark} alt="dashboard icon" className='mr-4' />
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar