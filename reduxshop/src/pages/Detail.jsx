import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { productsActionDetail } from '../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import {CgMathMinus,CgMathPlus} from 'react-icons/cg';
import { productsCard } from '../redux/actions/card';
 const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector((state) => state.product);
  const [count,setCount] = useState(0)
  useEffect(() =>{
    dispatch(productsActionDetail(id))
  },[dispatch])
  
  const decrement = () => {
    if(count > 0){
      setCount(count - 1)
   }
  }
  const increment = (stock) => {
     if(count <= stock){
        setCount(count + 1)
     }
  }
  const addCard = () => {
    dispatch(productsCard(id,count))
    //sepete ürün eklenince sepet bölümü açılacak
    dispatch({type:'DRAWER',payload:true})

  }
  console.log(product)
  return (
    <div className='w-full flex items-center justify-center space-x-5'>
      <img  className ="w-1/3" src={product?.image} alt=""></img>
      <div className="w-2/3 space-y-5">
        <div className='font-bold text-xl'> {product?.title} </div>
        <div className='opacity-70 '> {product?.description} </div>
        <div className='font-bold'> Category: {product?.category} </div>
        <div className='font-bold'> Rate: {product?.rating?.rate} -   Stock: {product?.rating?.count} </div>
        <div className='font-bold text-xl '> Price : ${product?.price} </div>
        <div className='flex items-center space-x-4'>
        <CgMathMinus onClick={decrement} className='cursor-pointer rounded full p-1' size={20}/>
        <span className='text-2xl'> {count}  </span>
        <CgMathPlus onClick={() => increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1' size={20} />
        </div>
        <button onClick ={addCard} className='p-3 w-full bg-blue-600 text-center rounded-lg text-white text-lg'> ADD TO CART </button>
      </div>    
    </div>
  )
}
export default Detail

