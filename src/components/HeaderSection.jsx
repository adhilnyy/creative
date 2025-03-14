import React from 'react'
import Logo from './../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const HeaderSection = () => {
    const username = useSelector((state) => state.user.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout)
        navigate('/')
    }
  return (
    <header className='fixed z-50 w-full h-16 grid grid-cols-3 p-3 bg-white shadow'>
    <div className='col-span-1'>
        <div className='w-14 h-14 flex justify-start items-center'>
        <img className='object-cover' src={Logo} alt="Login webapp logo" />
        </div>
    </div>
    <div className='hidden sm:block sm:col-span-1'></div>
    <div className='col-span-2 sm:col-span-1 text-end my-auto flex justify-end gap-2'>
        <div className="text-start sm:text-end text-gray-800 font-semibold text-lg">
            Hi, <span className="text-indigo-600 capitalize">{username}</span>
        </div>
            <button onClick={handleLogout} className="text-sm/6 font-semibold bg-indigo-600 max-h-9 text-white hover:bg-white hover:text-indigo-600 border hover:border-indigo-600 px-3 py-1.5 rounded-md cursor-pointer">Logout</button>
    </div>
    </header>
  )
}

export default HeaderSection