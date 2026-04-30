import React, { useContext, useEffect, useState } from 'react'
import Products from './Products';
import { ShopContext } from './../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestSeller);
        console.log(bestProduct)
        setBestSeller(bestProduct.slice(0, 5))
    }, [])

    return (
        <div className='my-10'>
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-2/3 m-auto text-sm sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequatur laborum
                    fugiat temporibus! Fugiat suscipit tenetur dolor deserunt in vero sunt assumenda
                    molestias quibusdam fugit? Delectus assumenda deserunt incidunt nobis.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
                {
                    bestSeller.map((item, i) => (
                        <ProductItem key={i} id={item._id} name={item.name} price={item.price}
                            image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller