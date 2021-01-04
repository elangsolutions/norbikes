import React from 'react'
import {useParams} from 'react-router-dom'



const ProductGalleryContainer = (props) => {
     const {subCatId} = useParams()
    return (<>THIS PAGE IS UNDER CONSTRUCTION : {subCatId}</>)
}

export default ProductGalleryContainer