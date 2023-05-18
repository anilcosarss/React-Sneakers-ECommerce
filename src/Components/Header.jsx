import React from 'react'
import { FaShoePrints } from 'react-icons/fa';

import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from './Contex/ContextApi';

const Header = () => {
  const {basket} = useAppContext();
  return (
    <div className='shadow-lg flex md:flex-row flex-col items-center jusfify-center md:justify-between bg-lime-300 py-5 text-white px-12 fixed w-screen'>
        <div className=" sm:text-xl lg:text-3xl  font-bold mb-8 md:mb-0">
            <Link to='/'> <h2 className='shadow-lg shadow-lime-700 bg-lime-600 py-2 px-4 rounded-xl flex items-center justify-center gap-5'>Sneakers Store <FaShoePrints /> </h2></Link>
        </div>
        <div className="flex gap-8 sm:text-xl lg:text-3xl">
        <Link to='/'> <h2 className='shadow-lg shadow-lime-500 font-medium flex items-center justify-center bg-lime-600 py-2 px-4 rounded-xl'>Sneakers </h2></Link>
        <Link to='/basket'><h2 className='shadow-lg shadow-lime-500 font-medium flex items-center justify-center gap-5 bg-lime-600 py-2 px-4 rounded-xl'><span>Basket</span> <FaShoppingBasket /> <span>{basket.length !== 0 ? `(${basket.length})` : null}</span></h2></Link>  
        </div>
    </div>
  )
}

export default Header