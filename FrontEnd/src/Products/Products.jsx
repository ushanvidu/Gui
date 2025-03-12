import React from 'react'

import './Products.css'
import Card_Data from '../Cards/Card_Data';

function Product(){
    return (
    
        <div className='main1'>
            <div className='product'>
            <h1>Welcome to Our Products</h1>
            <div className='subtitle'>
                <h5>Discover our carefully curated selection of premium tea plants, grown with care to ensure exceptional quality and vitality. Whether you’re a passionate gardener or a professional cultivator, our range of tea plants is designed to meet your needs. Each plant is nurtured to thrive in diverse conditions, offering you the perfect foundation for a flourishing tea garden. Explore our collection and let us help you embark on a rewarding journey of growing your own tea. With our commitment to quality and sustainability, your success is our priority.</h5>
            </div>
            </div>
            <div className='product1'>
            <Card_Data/>
            </div>
            
         
          
        </div>
    
    )

}
export default Product;