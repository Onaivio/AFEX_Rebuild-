import { ThemeContext } from "../context/ThemeContext"
import { ThemeContextType } from "../@types/theme"
import { useContext, useEffect } from "react"
import { MenuProps } from '../@types/searchInput'

const ExtraMenu: React.FC<MenuProps> = ({ menu, setMenu, menuShow }) => {
    const { theme } = useContext(ThemeContext) as ThemeContextType

    const style = {
        menu: `${theme === 'light' ? 'hover:bg-lightIcon' : 'hover:bg-darkIcon hover:text-brightRed'} cursor-pointer p-2 rounded-xl`
    }
    const hideMenu = () => {
        if (menu && document.documentElement.scrollTop > 5) {
            setMenu(false)
        }
    }

    window.addEventListener('scroll', hideMenu)

    return (
        <div ref={menuShow} className={`${menu ? 'block' : 'hidden'} ${theme === 'light' ? 'bg-gray' : 'bg-darkNav'} w-[150px] z-50 mt-2 rounded-xl p-2`}>
            <ul className=''>
                <li className={style.menu}>Profile</li>
                <li className={style.menu}>Logout</li>
            </ul>
        </div>
    )
}

export default ExtraMenu