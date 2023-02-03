import { useContext, useState, useRef, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TransactionContext } from '../context/TransactionContext'
import { Theme, ThemeContextType } from '../@types/theme'
import { SearchInputType } from '../@types/searchInput'
import ExtraMenu from './ExtraMenu'

import search from '../assets/images/search-normal.png'
import searchDark from '../assets/images/searchDark.png'
import sun from '../assets/images/sun.png'
import moon from '../assets/images/Vector.png'
import moonDark from '../assets/images/moon.png'
import arrowDown from '../assets/images/arrowDown.png'
import dropDown from '../assets/images/dropDown.png'
import profile from '../assets/images/profile.png'
import notification from '../assets/images/notification.png'
import notificationDark from '../assets/images/notificationDark.png'

const Navbar = () => {
    const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;

    const { handleChange, searchHistory } = useContext(TransactionContext) as SearchInputType;

    const handleThemeChange = (themeCol: String) => {
        changeTheme(themeCol as Theme);
    }
    const menuShow = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    const [menu, setMenu] = useState(false)
    const [hoverNoti, setHoverNoti] = useState(false)
    const handleHover = () => {
        setHoverNoti(true)
    }

    useEffect(() => {
        let handler = (e: any) => {
            if (menuShow.current && !menuShow.current.contains(e.target) && !iconRef.current?.contains(e.target)) {
                setMenu(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    const handleRemoveHover = () => {
        setHoverNoti(false)
    }
    const handleShowMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className='relative'>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <div className={`${theme === 'light' ? 'bg-white' : 'darkModeSearch'} rounded-lg p-2 flex items-center flex-1 mx-20 xl:mx-28`}>
                    <img src={theme === 'light' ? search : searchDark} alt="search icon" className='mr-2' />
                    <input type='text' placeholder='Search Transaction History e.g. payment' className='bg-inherit w-full outline-none' onChange={handleChange} value={searchHistory} />
                </div>
                <div className='flex items-center'>
                    <div className={`${theme === 'light' ? 'bg-gray' : 'bg-darkNav'} flex rounded-full items-center mr-8`}>
                        <img src={sun} alt="light mode" onClick={() => handleThemeChange('light')} className={`${theme === 'light' ? 'bg-[#B55B52] rounded-full' : ''} cursor-pointer p-1`} />
                        <img src={theme === 'light' ? moon : moonDark} alt="dark mode" onClick={() => handleThemeChange('dark')} className={`${theme === 'dark' ? 'bg-[#B55B52] rounded-full' : ''} cursor-pointer p-1`} />
                    </div>
                    <div className={`${theme === 'light' ? 'bg-gray' : 'bg-darkNav'} rounded-xl p-1 mr-8 cursor-pointer`} onMouseOver={handleHover} onMouseOut={handleRemoveHover}>
                        <img src={theme === 'light' ? notification : notificationDark} alt="notification bell" />
                    </div>
                    <div className='flex' ref={iconRef}>
                        <img src={profile} alt="profile picture" className='mr-4' />
                        <div className='flex items-center cursor-pointer' onClick={handleShowMenu}>
                            <span className='font-semibold mr-2'>Glowree</span>
                            <img src={theme === 'light' ? arrowDown : dropDown} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${hoverNoti ? 'block' : 'hidden'} absolute right-28`}>
                <span className={`${theme === 'light' ? 'text-black bg-gray' : 'text-white bg-darkNav'} bg-inherit text-xs mt-1  p-1 px-2 mb-2 rounded-xl`}>You have 0 notification</span>
            </div>
            <div className={`${menu ? 'block' : 'hidden'} absolute right-0`}>
                <ExtraMenu menu={menu} setMenu={setMenu} menuShow={menuShow} />
            </div>
        </nav>
    )
}

export default Navbar