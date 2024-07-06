import { PiBook, PiCalendar, PiStethoscope } from "react-icons/pi";
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
                <div className="bg-[#2A3443] text-white md:rounded-[40px] flex flex-wrap items-center justify-between md:pl-[10%] md:mx-[3%] mt-8 md:mt-[unset] gap-7 p-[40px]">
                    <div className="flex flex-col gap-6 md:w-[40%] min-w-[100px] items-start">
                        <p className="bg-[#AC42C7] py-2 px-5 rounded-md select-none">Our mission</p>
                        <p className="">Every student needs optimal health to excel in school. AcadMed gives access to quality health assesments and how to best structure your time effectively.</p>
                    </div>
                    <div className="md:w-[40%] min-w-[200px]">
                        <img src="/images/students.svg" alt="students image" className="md:w-full" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:px-[8%] px-8 justify-between items-start min-h-[600px] pt-[5%]">
                    <div className="flex justify-start w-full md:p-[10%] p-4 rounded-[15px] border border-gray-500/[0.1] bg-gradient-to-tr from-purple/[0.06] flex-col gap-7 min-h-[50vh]">
                        <PiStethoscope className="p-2 px-3 rounded bg-purple/[0.2] text-[48px]" />
                        <h2 className="text-[27px] leading-[130%] text-[#422862] dark:text-white/[0.8] font-medium text-balance">
                            Symptom Checker
                        </h2>
                        <p>Easily track and analyze your symptoms to catch potential health issues early.</p>
                        <NavLink to={"/dashboard/checkup/symptom-check"} className="block text-white bg-[#2A3443] px-8 py-3 w-fit rounded">Start Checkup</NavLink>
                    </div>
                    <div className="flex justify-start w-full md:p-[10%] p-4 rounded-[15px] border border-gray-500/[0.1] bg-gradient-to-tr from-purple/[0.06] flex-col gap-7 min-h-[50vh]">
                        <PiCalendar className="p-2 px-3 rounded bg-purple/[0.2] text-[48px]" />
                        <h2 className="text-[27px] leading-[130%] text-[#422862] dark:text-white/[0.8] font-medium text-balance">
                            Schedule Planner
                        </h2>
                        <p>Effectively plan your tasks to get efficient results everyday, overcoming stress.</p>
                        <NavLink to={"/dashboard/planner"} className="block text-white bg-[#2A3443] px-8 py-3 w-fit rounded">Check Our Planner</NavLink>
                    </div>
                    <div className="flex justify-start w-full md:p-[10%] p-4 rounded-[15px] border border-gray-500/[0.1] bg-gradient-to-tr from-purple/[0.06] flex-col gap-7 min-h-[50vh]">
                        <PiBook className="p-2 px-3 rounded bg-purple/[0.2] text-[48px]" />
                        <h2 className="text-[27px] leading-[130%] text-[#422862] dark:text-white/[0.8] font-medium text-balance">
                            Health Tips
                        </h2>
                        <p>We provide informative health tips to help you get the balance in health and academics.</p>
                        <NavLink to={"/dashboard/planner"} className="block text-white bg-[#2A3443] px-8 py-3 w-fit rounded">Get Started</NavLink>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 min-h-[400px] bg-purple/[0.09] my-12">
                    <h2 className="text-[27px] text-center leading-[130%] text-[#422862] dark:text-white/[0.8] font-medium text-balance">
                        Let's get you the balance you need in your heakth and academics
                    </h2>
                    <NavLink to={"/dashboard"} className="block text-white bg-[#2A3443] px-8 py-3 w-fit rounded">Get Started</NavLink>
                </div>
            </div>
        </>
    )
} 