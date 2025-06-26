import React from 'react'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../provider/GlobalProvider'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { FaCaretRight } from "react-icons/fa";
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const DisplayCartItem = ({close}) => {
    const { notDiscountTotalPrice, totalPrice ,totalQty} = useGlobalContext()
    const cartItem  = useSelector(state => state.cartItem.cart)
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const redirectToCheckoutPage = ()=>{
        if(user?._id){
            navigate("/checkout")
            if(close){
                close()
            }
            return
        }
        toast("Please Login")
    }
  return (
    <section className='bg-neutral-900 fixed top-0 bottom-0 right-0 left-0 bg-opacity-70 z-50'>
        <div className='bg-white w-full max-w-sm min-h-screen max-h-screen ml-auto'>
            <div className='flex items-center p-4 shadow-md gap-3 justify-between'>
                <h2 className='font-semibold'>Cart</h2>
                <Link to={"/"} className='lg:hidden'>
                    <IoClose size={25}/>
                </Link>
                <button onClick={close} className='hidden lg:block'>
                    <IoClose size={25}/>
                </button>
            </div>


            {
                cartItem[0] && (
                    <div className='p-2'>
                        <div className='bg-green-700 text-neutral-100 px-4 font-bold text-base py-4 static bottom-3 rounded flex items-center gap-4 justify-between'>
                            <div>
                                {DisplayPriceInRupees(totalPrice)}
                            </div>
                            <button onClick={redirectToCheckoutPage} className='flex items-center gap-1'>
                                Proceed
                                <span><FaCaretRight/></span>
                            </button>
                        </div>
                    </div>
                )
            }
            
        </div>
    </section>
  )
}

export default DisplayCartItem