import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../../redux/productSlice';
import './Detail.css';
import { useParams } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import DetailCom from '../../component/DetailCom/DetailCom';

const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getDetailProduct(id))
  }, [dispatch, id])

  console.log(productDetail, "productDetail");

  return (
    <>

      {
        productDetailStatus == "LOADING" ? <Loading /> : <DetailCom productDetail={productDetail} />
      }
    </>
  )
}

export default Detail