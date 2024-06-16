import React from 'react'
import GeneralHeader from '../../components/general/header'
import SideNav from '../../components/sideNav/sideNav'
import Card from '../../components/general/card'
import Button from '../../components/general/button'

const Checkup = () => {
    return (
        <div className='flex'>
            <SideNav />
            <div className='flex-1'>
                <GeneralHeader h2="Check Ups" p="Health checkups are important to ensure optimal health status." />
                <div>
                    <Card className="flex">
                        <div className='bg-[#FFFFFF] border-[#F7F0FB] border rounded-[10px]'>
                            <img src="" alt="profile pic" />
                            <h3></h3>
                            <p></p>
                            <div><p><span>24</span>Age</p><p><span>Female</span>Sex</p></div>
                            <Button buttonText={"Edit Information"} imgUrl="" />
                        </div>

                        <div className='bg-[#FFFFFF] border-[#F7F0FB] border rounded-[10px]'>
                            <h3>Previous Checkup</h3>
                            <hr />
                            <div>
                                <div>
                                    <p>weight<span>65kg</span></p>
                                </div>
                                <div>
                                    <p>Medical Conditions <span>Hypertensive</span></p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Checkup
