import React from 'react'

import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className='flex'>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
