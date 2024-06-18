import React from 'react'
import GeneralHeader from '../../../components/general/header'
import Card from '../../../components/general/card'
import Button from '../../../components/general/button'

const Checkup = () => {
    return (
        <div className=''>
            <GeneralHeader h2="Check Ups" p="Health checkups are important to ensure optimal health status." />
            <div className=''>
                <Card className="flex p-6 gap-5">
                    <div className='flex items-center flex-col bg-[#FFFFFF] w-[40%] p-5 box-border max-w-[40%] border-[#F7F0FB] border rounded-[10px]'>
                        <img src="/src/assets/profile-pic.png" alt="profile pic" />
                        <h3>Diane Cooper</h3>
                        <p>Dianecooper@student.harvard.edu</p>
                        <div className='flex justify-between gap-5 items-center'>
                            <p className='flex items-center flex-col'>
                                <span>24</span>
                                <span>Age</span>
                            </p>

                            <p className='flex items-center flex-col'>
                                <span>Female</span>
                                <span>Sex</span>
                            </p>
                        </div>
                        <Button buttonText={"Edit Information"} imgUrl="" />
                    </div>

                    <div className='bg-[#FFFFFF] flex-1 border-[#F7F0FB] border rounded-[10px]'>
                        <h3>Previous Checkup</h3>
                        <hr />
                        <div className='grid grid-cols-3'>
                            <div>
                                <p>weight<span>65kg</span></p>
                                <hr />
                                <p>Fitness Level <span>2/3 times Weekly</span></p>
                                <hr />
                                <p>Blood Group <span>A</span></p>
                                <hr />
                            </div>
                            <div>
                                <p>Medical Conditions <span>Hypertensive</span></p>
                                <hr />
                                <p>Symptoms</p>
                                <Card className="text-center space-x-2 rounded-lg max-w-fit p-2 inline-block">Dry Cough</Card>
                                <Card className="text-center rounded-lg max-w-fit p-2 inline-block">Sore Throat</Card>
                                <Card>Headache</Card>
                                <Card>Chest Pain</Card>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Checkup
