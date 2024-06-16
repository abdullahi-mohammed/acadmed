import React from 'react'

const GeneralHeader = (props) => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='bg-[url(/src/assets/general-header.png)] w-[full] bg-no-repeat m-5 min-w-full bg-contain text-white'>
                <div className='p-6 flex items-start flex-col mb-3 gap-1 my-auto'>
                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>
                </div>
            </div>
        </div>

    )
}

export default GeneralHeader
