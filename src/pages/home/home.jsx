export default function Home() {
    return (
        <div className="bg-[url(/src/assets/hero-bg.png)]">
            <div className="flex justify-between items-center w-[1200px] mx-auto my-auto min-h-screen">
                <div className="flex justify-between flex-col gap-7 text-[#906EA0]">
                    <h2 className="text-[40px] leading-[130%] text-[#422862] font-semibold w-[80%] text-balance">
                        Intelligent Telemedicine Assessment and Simple Schedule planner
                    </h2>
                    <p className="w-[74%]">We are pioneering the future of healthcare for academias with cutting edge telehealth and telemedicine solutions.</p>
                    <p>AI Technology</p>
                    <a href="#" className="text-white bg-[#2A3443] px-3 py-1 w-fit rounded">Get Started</a>
                </div>

                <img src="/src/assets/hero-image.png" alt="hero image" width="600px" />
            </div>
        </div>
    )
} 