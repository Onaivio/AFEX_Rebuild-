import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'

import Navbar from './Navbar'
import MainPage from './MainPage'

const Dashboard = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <div className={`${theme === 'light' ? 'lightBg' : 'darkBg'} min-h-screen py-9 px-8 ml-60`}>
            <Navbar />
            <MainPage />
        </div>
    )
}

export default Dashboard