import React from 'react'
import { assets } from '../assets/assests'

const About = () => {
  return (
    <div className=' bg-white'>
    <div className='flex flex-col lg:flex-row max-w-[1240px] mx-auto justify-center  gap-4  '>
    <div className='text-black  flex-[2] my-10 md:text-md px-10 '>
        <h1 className='font-extrabold font-roboto md:text-xl py-3 '>About Us Task Manager</h1>
        <p>Welcome to  <span className='font-bold'>Task Manager</span>, your trusted tool for organizing daily tasks and boosting productivity.
Our mission is to make task management simple, efficient, and accessible for everyone from students to professionals.

With Task Manager, you can easily create, track, and complete your tasks while keeping your goals in focus.
Whether you are managing a personal to-do list or leading a team project, Task Manager helps you stay organized, motivated, and on time.

We believe productivity starts with clarity and Task Manager gives you exactly that.</p>
    </div>
    <img className='w-[400px] flex-[1] mx-auto' src={assets.TaskManager} />
    </div>
    </div>
  )
}

export default About