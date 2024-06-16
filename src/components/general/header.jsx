import React from 'react'

const GeneralHeader = (props) => {
    return (
        <div className=''>
            <div className='bg-[url(/src/assets/header-bg.jpeg)] w-[full] bg-no-repeat min-w-full bg-cover bg-center text-white rounded-[10px]'>
                <div className='p-6 flex items-start flex-col mb-3 gap-1'>
                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>
                </div>
            </div>
        </div>

    )
}

export default GeneralHeader
