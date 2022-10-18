import React from 'react'

const FailToFetch = ({ content }) => {
    return (
        <div className='text-center my-5'>
            <h2>Failed to fetch {content}</h2>
        </div>
    )
}

export default FailToFetch
