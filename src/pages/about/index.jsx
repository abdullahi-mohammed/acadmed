import React from 'react'

const About = () => {
    return (
        <div className='max-w-[900px] m-auto p-6'>
            <h2 className='text-center font-bold text-[32px]'>We are making diagnostics available for everyone anywhere</h2>
            <h3 className='text-center font-semibold text-[24x] py-5'>About AcadMed</h3>
            <img className='rounded-lg h-[400px] w-full object-cover' src="/src/assets/about-hero-img.webp" alt="" />
            <p className='text-center pt-3'>At AcadMed, we are revolutionizing the healthcare landscape by simplifying diagnostics for both doctors and patients. Our cutting-edge web application seamlessly integrates advanced diagnostic tools with user-friendly interfaces, ensuring accurate and efficient medical assessments. Designed with the latest in medical technology, AcadMed empowers healthcare providers to make informed decisions swiftly, enhancing patient care and outcomes. Whether you're a seasoned physician or a concerned patient, AcadMed is your trusted partner in navigating the complexities of modern healthcare, bridging the gap between medical expertise and technological innovation. Join us in redefining diagnostic excellence with AcadMed – where precision meets convenience for a healthier tomorrow.</p>
        </div>
    )
}

export default About
