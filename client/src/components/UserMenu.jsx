import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Divider from './Divider'
import { HiOutlineExternalLink } from "react-icons/hi";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user)

  const handleClose = () => {
    if (close) {
      close()
    }
  }
  console.log(user.role)
  return (
    <div>
      <div className='font-semibold w-auto'>My Account</div>
      <div className='text-sm flex items-center gap-2'>
        <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name || user.mobile} <span className='text-medium text-red-600'>{user.role === "ADMIN" ? "(Admin)" : ""}</span></span>
        <Link onClick={handleClose} to={"/dashboard/profile"} className='hover:text-primary-200'>
          <HiOutlineExternalLink size={15} />
        </Link>
      </div>

      <Divider />

    </div>
  )
}

export default UserMenu