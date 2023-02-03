import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { ThemeContextType } from "../@types/theme"
import { TransactionContext } from '../context/TransactionContext'
import { SearchInputType } from "../@types/searchInput"

import Card from "./Card"
import Graph from "./Graph"
import History from "./History"
import MyCards from "./MyCards"
import Transfer from "./Transfer"
import TransactionHistory from "./TransactionHistory"

const MainPage = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const { getFilteredTransaction, searchHistory, showAll } = useContext(TransactionContext) as SearchInputType;

    return (
        <div className='flex pt-6'>
            <div className="w-2/3 mr-6">
                {(searchHistory.length > 0 && getFilteredTransaction.length > 0) || (showAll === true) ?
                    <TransactionHistory />
                    :
                    <>
                        <Card />
                        <Graph />
                        <Transfer />
                    </>
                }
            </div>
            <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-iconDark text-white'} w-1/3 rounded-xl px-6 py-8`}>
                <MyCards />
                <hr className={`${theme === 'light' ? 'text-rule' : 'text-ruleDark'} my-4 `} />
                <History />
            </div>
        </div>
    )
}

export default MainPage