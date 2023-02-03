import React, { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { ThemeContextType } from "../@types/theme"
import { CartesianAxis, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { weeklydata, monthlydata } from "../GraphPieData"

const Graph = () => {
    const [linegraph, setLinegraph] = useState('weekly')
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    const handleLinegraph = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLinegraph(e.target.value)
    }
    return (
        <div className={`${theme === 'light' ? 'text-black bg-white' : 'text-white bg-iconDark'} rounded-xl w-full px-6 py-8 mt-6`}>
            <div className='flex justify-between text-l'>
                <span className='text-2xl font-semibold'>Finances</span>
                <div className='text-sm flex items-center'>
                    <div className='flex items-center'>
                        <span className='w-3 h-3 rounded-full bg-blue mr-2'></span>
                        <span>Income</span>
                    </div>
                    <div className='flex items-center ml-8'>
                        <span className='w-3 h-3 rounded-full bg-redBrown mr-2'></span>
                        <span>Expenses</span>
                    </div>
                    <div className='p-1 border-[1px] rounded-lg ml-8'>
                        <select
                            name="linegraph"
                            id="linegraph"
                            onChange={handleLinegraph}
                            className={`${theme === 'light' ? 'text-black bg-white' : 'text-white bg-iconDark'} pr-3 m-1 outline-none`}
                        >
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full flex justify-center items-center">
                <LineChart width={650} height={300} data={linegraph === 'weekly' ? weeklydata : monthlydata}>
                    <Line type="monotone" dataKey="income" stroke="#B55B52" />
                    <Line type="monotone" dataKey="expenses" stroke="#6AD2FF" />
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" stroke={`${theme === 'light' ? '#000000' : '#ffffff'}`} />
                    <YAxis stroke={`${theme === 'light' ? '#000000' : '#ffffff'}`} />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    )
}

export default Graph