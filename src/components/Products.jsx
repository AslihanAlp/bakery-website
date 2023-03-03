import { useState } from 'react'
import {images} from '../Helpers/ProductData'
import { ArrowBackIos,ArrowForwardIos } from '@mui/icons-material'


const Products = () =>{

    const [currImg, setCurrImg] =useState(0)
    return(
        <div className="w-full h-screen ">
            <div className='w-[60%] h-[500px] flex flex-wrap object-cover items-center justify-center bg-no-repeat'
             style={{backgroundImage: `url(${images[currImg].img})`}}
            > 

            <div className='right'>
                <ArrowForwardIos />
            </div>
            <div className='center'></div>
            <div className='left'>
                <ArrowBackIos />
            </div>

            </div>
            
        </div>
        
     
        
    )
    
}


export default Products
