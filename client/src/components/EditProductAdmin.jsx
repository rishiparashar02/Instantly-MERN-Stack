import React, { useState } from 'react'
import ViewImage from '../components/ViewImage';
import { IoClose } from "react-icons/io5";
import AddFieldComponent from '../components/AddFieldComponent';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import successAlert from '../utils/SuccessAlert';

const EditProductAdmin = ({ close ,data : propsData,fetchProductData}) => {
  const [data, setData] = useState({
    _id : propsData._id,
    name: propsData.name,
    image: propsData.image,
    category: propsData.category,
    subCategory: propsData.subCategory,
    unit: propsData.unit,
    stock: propsData.stock,
    price: propsData.price,
    discount: propsData.discount,
    description: propsData.description,
    more_details: propsData.more_details || {},
  })
  const [ViewImageURL, setViewImageURL] = useState("")
  const [openAddField, setOpenAddField] = useState(false)
  const [fieldName, setFieldName] = useState("")


  const handleChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleAddField = () => {
    setData((preve) => {
      return {
        ...preve,
        more_details: {
          ...preve.more_details,
          [fieldName]: ""
        }
      }
    })
    setFieldName("")
    setOpenAddField(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("data", data)

    try {
      const response = await Axios({
        ...SummaryApi.updateProductDetails,
        data: data
      })
      const { data: responseData } = response

      if (responseData.success) {
        successAlert(responseData.message)
        if(close){
          close()
        }
        fetchProductData()
        setData({
          name: "",
          image: [],
          category: [],
          subCategory: [],
          unit: "",
          stock: "",
          price: "",
          discount: "",
          description: "",
          more_details: {},
        })

      }
    } catch (error) {
      AxiosToastError(error)
    }


  }

  return (
    <section className='fixed top-0 right-0 left-0 bottom-0 bg-black z-50 bg-opacity-70 p-4'>
      <div className='bg-white w-full p-4 max-w-2xl mx-auto rounded overflow-y-auto h-full max-h-[95vh]'>
        <section className=''>
          <div className='p-2   bg-white shadow-md flex items-center justify-between'>
            <h2 className='font-semibold'>Upload Product</h2>
            <button onClick={close}>
              <IoClose size={20}/>
            </button>
          </div>
          <div className='grid p-3'>
            <form className='grid gap-4' onSubmit={handleSubmit}>
              <div className='grid gap-1'>
                <label htmlFor='name' className='font-medium'>Name</label>
                <input
                  id='name'
                  type='text'
                  placeholder='Enter product name'
                  name='name'
                  value={data.name}
                  onChange={handleChange}
                  required
                  className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                />
              </div>
              <div className='grid gap-1'>
                <label htmlFor='description' className='font-medium'>Description</label>
                <textarea
                  id='description'
                  type='text'
                  placeholder='Enter product description'
                  name='description'
                  value={data.description}
                  onChange={handleChange}
                  required
                  multiple
                  rows={3}
                  className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded resize-none'
                />
              </div>



              {/**add more field**/}
              {
                Object?.keys(data?.more_details)?.map((k, index) => {
                  return (
                    <div className='grid gap-1'>
                      <label htmlFor={k} className='font-medium'>{k}</label>
                      <input
                        id={k}
                        type='text'
                        value={data?.more_details[k]}
                        onChange={(e) => {
                          const value = e.target.value
                          setData((preve) => {
                            return {
                              ...preve,
                              more_details: {
                                ...preve.more_details,
                                [k]: value
                              }
                            }
                          })
                        }}
                        required
                        className='bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded'
                      />
                    </div>
                  )
                })
              }

              <div onClick={() => setOpenAddField(true)} className=' hover:bg-primary-200 bg-white py-1 px-3 w-32 text-center font-semibold border border-primary-200 hover:text-neutral-900 cursor-pointer rounded'>
                Add Fields
              </div>

              <button
                className='bg-primary-100 hover:bg-primary-200 py-2 rounded font-semibold'
              >
                Update Product
              </button>
            </form>
          </div>

          {
            ViewImageURL && (
              <ViewImage url={ViewImageURL} close={() => setViewImageURL("")} />
            )
          }
        </section>
      </div>
    </section>
  )
}

export default EditProductAdmin