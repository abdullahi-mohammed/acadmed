import { PiStethoscope } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="">
                <div className="bg-[url(/images/hero-bg.webp)] bg-cover flex lg:flex-nowrap flex-wrap px-8 justify-between items-start min-h-[600px] pt-[5%]">
                    <div className="flex justify-start lg:w-[40%] w-full md:ml-[5%] pt-4 pb-12 lg:items-start items-center lg:text-start text-center flex-col gap-7 min-h-[50vh]">
                        <p>Stay healthy, stay smart</p>
                        <h2 className="md:text-[40px] text-[32px] leading-[130%] text-[#422862] dark:text-white/[0.8] font-semibold text-balance">
                            Your Ultimate Health and Study Companion
                        </h2>
                        <p className="">Discover a balanced approach to academic and personal well-being. Monitor your health, plan your study sessions, and stay on top of your fitness - all in one place</p>
                        <NavLink to={"/dashboard/checkup/symptom-check"} className="block text-white bg-[#2A3443] px-8 py-3 sm:w-fit w-full rounded">Get Started</NavLink>
                    </div>

                    <img src="/images/hero-image.webp" alt="hero image" className="md:w-[600px] mx-auto" />
                </div>
                <div className="bg-[#2A3443] text-white rounded-t-[40px] flex flex-wrap items-center justify-between md:px-[10%] mt-8 md:mt-[unset] gap-7 p-[40px]">
                    <div className="flex flex-col gap-6 md:w-[40%] min-w-[100px] items-start">
                        <p className="bg-[#AC42C7] py-2 px-5 rounded-md select-none">Our mission</p>
                        <p className="">Every student needs optimal health to excel in school. AcadMed gives access to quality health assesments and how to best structure your time effectively.</p>
                    </div>
                    <div className="md:w-[30%] min-w-[200px]">
                        <h3 className="text-[24px] font-semibold">We make quality telehealth available to students</h3>
                    </div>
                </div>

                <div className="flex lg:flex-nowrap flex-wrap md:px-[10%] px-8 justify-between items-start min-h-[600px] pt-[5%]">
                    <div className="flex justify-start lg:w-[40%] w-full pt-[5%] pb-12 flex-col gap-7 min-h-[50vh]">
                        <PiStethoscope className="p-2 px-3 rounded bg-purple/[0.2] text-[48px]" />
                        <h2 className="text-[32px] leading-[130%] text-[#422862] dark:text-white/[0.8] font-semibold text-balance">
                            Symptom Checker
                        </h2>
                        <p>Easily track and analyze your symptoms to catch potential health issues early.</p>
                        <p>Track your physical and mental health with our easy-to-use tools.</p>
                        <NavLink to={"/dashboard/checkup/symptom-check"} className="block text-white bg-[#2A3443] px-8 py-3 w-fit rounded">Get Started</NavLink>
                    </div>

                    <div className="p-6 bg-slate-100 dark:bg-gray-500/[0.09] rounded-[20px]  mx-auto ">
                        <img src="/images/symptom-check2.png" alt="hero image" className="md:w-[400px] border border-gray-500/[0.1] rounded-[10px] bg-white dark:bg-black shadow-md" />
                    </div>
                </div>
            </div>
        </>
    )
} 