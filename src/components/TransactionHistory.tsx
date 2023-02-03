import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'
import { history } from '../TransactionHistoryData'
import { TransactionContext } from '../context/TransactionContext'
import { SearchInputType, ITranHistory } from '../@types/searchInput'

const TransactionHistory = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType

    const { getFilteredTransaction, handleCloseHistory } = useContext(TransactionContext) as SearchInputType

    return (
        <div className='mt-4'>
            <div className='flex justify-between items-center mt-4'>
                <span className='font-semibold text-xl'>Transaction History</span>
                <button
                    className={`${theme === 'light' ? 'bg-lightRed' : 'bg-btn'} text-redBrown bg-lightRed p-2 font-semibold rounded-lg`}
                    onClick={handleCloseHistory}
                >
                    Close</button>
            </div>
            <div>
                {getFilteredTransaction.map((trans: ITranHistory) => (
                    <div key={trans.id} className='flex justify-between items-center my-6 text-xs'>
                        <div className='flex'>
                            <img src={trans.img} alt="Transactions" />
                            <div className='ml-4 flex flex-col'>
                                <span className='font-semibold text-sm mb-1'>{trans.name}</span>
                                <span>{trans.date}</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-right'>
                            <span className={`${trans.id === 4 || trans.id === 6 ? '' : 'text-redBrown'} font-bold text-sm mb-1`}>{trans.amount}</span>
                            <span>{trans.transaction}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TransactionHistory