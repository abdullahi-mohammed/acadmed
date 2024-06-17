export default function Home() {
    return (
        <div className="bg-[url(/images/hero-bg.webp)] bg-cover">
            <div className="flex lg:flex-nowrap flex-wrap px-8 justify-between items-start min-h-[600px] pt-[5%]">
                <div className="flex justify-start lg:w-[40%] w-full pt-4 pb-12 lg:items-start items-center lg:text-start text-center flex-col gap-7 text-[#906EA0] min-h-[50vh]">
                    <h2 className="md:text-[40px] text-[32px] leading-[130%] text-[#422862] font-semibold text-balance">
                        Intelligent Telemedicine Assessment and Simple Schedule planner
                    </h2>
                    <p className="">We are pioneering the future of healthcare for academias with cutting edge telehealth and telemedicine solutions.</p>
                    <p>AI Technology</p>
                    <a href="/dashboard/checkup/symptom-check" className="block text-white bg-[#2A3443] px-8 py-3 sm:w-fit w-full rounded">Get Started</a>
                </div>

                <img src="/images/hero-image.webp" alt="hero image" className="md:w-[600px] mx-auto" />
            </div>
        </div>
    )
} 