import React from 'react'
import StoreItem from '../components/StoreItem'
import dataItems from '../data/items.json'

const Home = () => {
    return (
        <>
            <h2>Home title</h2>
            <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-1 ">
            {dataItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
            </div>
        </>
    )
}

export default Home