import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="bg-[url(/images/hero-bg.webp)] bg-cover">
                <div className="flex lg:flex-nowrap flex-wrap px-8 justify-between items-start min-h-[600px] pt-[5%]">
                    <div className="flex justify-start lg:w-[40%] w-full pt-4 pb-12 lg:items-start items-center lg:text-start text-center flex-col gap-7 min-h-[50vh]">
                        <h2 className="md:text-[40px] text-[32px] leading-[130%] text-[#422862] dark:text-white/[0.8] font-semibold text-balance">
                            Intelligent Telemedicine Assessment and Simple Schedule planner
                        </h2>
                        <p className="">We are pioneering the future of healthcare for academias with cutting edge telehealth and telemedicine solutions.</p>
                        <p>AI Technology</p>
                        <NavLink to={"/dashboard/checkup/symptom-check"} className="block text-white bg-[#2A3443] px-8 py-3 sm:w-fit w-full rounded">Get Started</NavLink>
                    </div>

                    <img src="/images/hero-image.webp" alt="hero image" className="md:w-[600px] mx-auto" />
                </div>
                <div className="bg-[#2A3443] text-white rounded-t-[40px] flex items-center justify-center gap-7 p-[40px]">
                    <div className="w-[40%] flex flex-col gap-6 items-start">
                        <p className="bg-[#AC42C7] py-2 px-5 rounded-md select-none">Our mission</p>
                        <p className="">Every student needs optimal health to excel in school. AcadMed gives access to quality health assesments and how to best structure your time effectively.</p>
                    </div>
                    <div className="w-[30%]">
                        <h3 className="text-[24px] font-semibold">We make quality telehealth available to students</h3>
                    </div>
                </div>
            </div>
        </>
    )
} 