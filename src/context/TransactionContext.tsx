import React, { createContext, useState } from "react";
import { SearchInputType, ITranHistory, Props } from '../@types/searchInput';
import { history } from '../TransactionHistoryData'

export const TransactionContext = createContext<SearchInputType | null>(null)

const TransactionContextProvider: React.FC<Props> = ({ children }) => {
    const [transHistory, setTransHistory] = useState<ITranHistory[]>(history)
    const [searchHistory, setSearchHistory] = useState('')
    const [showAll, setShowAll] = useState(false)

    const getFilteredTransaction = transHistory.filter(trans => trans.transaction.toLowerCase().includes(searchHistory.toLowerCase()))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchHistory(e.target.value)
    }

    const handleAllHistory = () => {
        setShowAll(true)
    }

    const handleCloseHistory = () => {
        setShowAll(false)
        setSearchHistory('')
    }

    return (
        <TransactionContext.Provider value={{
            showAll,
            transHistory,
            getFilteredTransaction,
            handleChange,
            searchHistory,
            handleCloseHistory,
            handleAllHistory
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider