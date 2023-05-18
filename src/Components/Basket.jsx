import React from 'react'
import { useAppContext } from './Contex/ContextApi';
import { Link } from 'react-router-dom';

const Basket = () => {

    const { basket, addItemFromBasket, deleteItemFromBasket, clearItem, setBasket } = useAppContext();


    var totalAmount = basket.map(function (urun) {
        return urun.shoeRetailPrice * urun.amount;
    }).reduce(function (acc, curr) {
        return acc + curr;
    }, 0);


    return (
        <>
            <div className='pt-44 md:pt-36 pb-12 flex flex-col items-center gap-5 justify-center max-w-[80%] mx-auto'>
                {basket.map((shoe) => (
                    shoe.shoeRetailPrice !== null && shoe.shoeBrand !== "Puma" ? (
                        (
                            <div key={shoe.shoeId} className="border border-lime-400 w-[70%]  pt-8 flex flex-col justify-between">
                                <div className="px-5">
                                    <img src={shoe.imgUrl} className='px-8 mx-auto' alt="allShoes" />
                                    <h2 className='text-2xl font-bold'>{shoe.shoeBrand}</h2>
                                    <p className='font-medium text-lg my-1'>{shoe.shoeTitle}</p>
                                    <p className='font-medium mb-2 text-xl'>{shoe.shoeRetailPrice} $</p>
                                </div>

                                <div className="px-5">
                                    <div className="text-xl mb-4">You have a total of <span className='text-2xl text-lime-600'>{basket.find(item => item.shoeId === shoe.shoeId)?.amount || 0}</span> of these shoes in your shopping cart and total price is <span className='text-2xl text-lime-600'>{basket.find(item => item.shoeId === shoe.shoeId).amount * shoe.shoeRetailPrice} $</span>
                                    </div>

                                    <div className="flex items-center justify-between mb-5">
                                        <button onClick={() => addItemFromBasket(shoe)} className='shadow-lg w-[30%] shadow-lime-100 text-white font-medium bg-lime-600 py-1 px-4 rounded-xl'>Add</button>
                                        <button onClick={() => deleteItemFromBasket(shoe)} className='shadow-lg w-[30%] shadow-lime-100 text-white font-medium bg-rose-500 py-1 px-4 rounded-xl'>Delete</button>
                                        <button onClick={() => clearItem(shoe)} className='shadow-lg w-[30%] shadow-lime-100 text-white font-medium bg-rose-500 py-1 px-4 rounded-xl'>Remove</button>

                                    </div>

                                </div>


                            </div>
                        )
                    ) : null

                ))}
                {basket.length === 0 ? <div className="text-2xl font-bold">Your basket is empty! to add a sneaker go <Link to="/" className='text-lime-600 underline cursor-pointer'>Shoes Page</Link></div>
                :  (
                <button onClick={() => setBasket([])} className='shadow-lg w-[30%] shadow-lime-100 text-white font-medium bg-rose-700 py-1 px-4 rounded-xl'>Remove All</button>
                )}

                <div className="text-2xl text-lime-500 font-bold md:fixed md:top-32 md:left-4 border rounded-xl border-lime-500 py-2 px-3">Total Price = {totalAmount} $</div>
            </div>


        </>
    )

}

export default Basket;