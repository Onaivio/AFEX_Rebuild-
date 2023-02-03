import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'
import profile from '../assets/images/profile.png'
import next from '../assets/images/next.png'
import nextBlack from '../assets/images/nextBlack.png'
import { Pie, PieChart, Cell } from 'recharts'
import { transferredTo, weeklyPie, monthlyPie } from '../GraphPieData'

const colors = ['#FCBEB6', '#FF968B', '#B55B52', '#EB996E']
const Transfer = () => {
    const [pieData, setPieData] = useState('weekly')
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const handleChangePie = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPieData(e.target.value)
    }
    const [loadmore, setLoadmore] = useState(4)
    const [transferPerson, setTransferPerson] = useState(0)

    const handleLoadMore = () => {
        if (loadmore < transferredTo.length) {
            setTransferPerson(transferPerson + 4)
            setLoadmore(loadmore + 4)
        }
    }

    return (
        <div className='w-full mt-6 flex'>
            <div className={`${theme === 'light' ? 'bg-white text-black' : 'text-white bg-iconDark'} w-7/12 rounded-xl px-6 py-6 mr-6`}>
                <span className='text-2xl font-semibold mb-4'>Quick Transfer</span>
                <div className='flex items-center justify-between '>
                    <div className='flex items-center my-4'>
                        {transferredTo.slice(transferPerson, loadmore).map((person, index) => (
                            <div key={index} className='text-xs mr-3 xl:mr-4 2xl:mr-5 flex flex-col justify-center items-center'>
                                <img src={person.img} alt=" profile Images" />
                                <span className='mt-1'>{person.name}</span>
                            </div>
                        ))}
                        <div className='text-xs flex flex-col justify-center items-center'>
                            <span className={`${theme === 'light' ? 'border-black' : 'border-white'} w-10 h-10 text-center rounded-full border border-dashed text-2xl`}>+</span>
                            <span className='mt-2'>Add New</span>
                        </div>
                    </div>
                    <img src={theme === 'light' ? nextBlack : next} alt="next" onClick={handleLoadMore} className='cursor-pointer' />
                </div>
                <div className=''>
                    <span className='font-medium'>Provide amount</span>
                    <div className='mt-4 flex justify-between'>
                        <input type="text" placeholder='N0.00' className={`${theme === 'light' ? 'border-borderLight' : 'border-borderLine'} border p-2 rounded-xl bg-inherit`} />
                        <button className='bg-redBrown px-4  text-xs py-2 text-white rounded-xl'>Send Money</button>
                    </div>
                </div>
            </div>
            <div className={`${theme === 'light' ? 'bg-white text-black' : 'text-white bg-iconDark'} w-5/12 bg-white rounded-xl px-4 py-8 h-auto`}>
                <div className='flex justify-between items-center'>
                    <span className='text-2xl font-semibold'>Finances</span>
                    <div className='p-1 border-[1px] rounded-lg'>
                        <select
                            name="pieData"
                            id="pieData"
                            onChange={handleChangePie}
                            className={`${theme === 'light' ? 'text-black bg-white' : 'text-white bg-iconDark'} pr-3 m-1 outline-none`}>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>
                <div className='w-full margin-auto flex items-center justify-center mt-2 outline-none'>
                    <PieChart width={150} height={150}>
                        <Pie data={pieData === 'weekly' ? weeklyPie : monthlyPie} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={70} fill="#B55B52">
                            {
                                weeklyPie.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                            {
                                monthlyPie.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                    <div className='text-xs ml-4'>
                        <div className='flex items-center mb-2'>
                            <span className='p-2 rounded-full bg-[#FCBEB6] mr-2'></span>
                            Subscription
                        </div>
                        <div className='flex items-center mb-2'>
                            <span className='p-2 rounded-full bg-[#FF968B] mr-2'></span>
                            Food
                        </div>
                        <div className='flex items-center mb-2'>
                            <span className='p-2 rounded-full bg-[#B55B52] mr-2'></span>
                            Data
                        </div>
                        <div className='flex items-center mb-2'>
                            <span className='p-2 rounded-full bg-[#EB996E] mr-2'></span>
                            Other
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer