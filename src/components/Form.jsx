import React from 'react'

const Form = () => {
  return (
    <div className='px-8 pb-20'>
        <h1 className='font-semibold text-3xl'>Fill up a Form</h1>
        <form action="post">
            <div className='flex flex-col items-start gap-8 mt-5'>
                
                <div className='flex flex-col items-start gap-2'>
                    <span className='font-semibold text-lg'>Name</span>
                    <input 
                        type="text" 
                        placeholder='Enter your name here'
                        className='border-b-2 border-gray-400 placeholder:text-gray-400 focus:border-b-black pb-2 w-[450px] outline-none'
                    />
                </div>

                <div className='flex flex-col items-start gap-2'>
                    <span className='font-semibold text-lg'>Email</span>
                    <input 
                        type="email" 
                        placeholder='Enter your email here'
                        className='border-b-2 border-gray-400 placeholder:text-gray-400 focus:border-b-black pb-2 w-[450px] outline-none'
                    />
                </div>

                <div className='flex flex-col items-start gap-2'>
                    <span className='font-semibold text-lg'>Messages</span>
                    <textarea
                        type="email" 
                        placeholder='Enter your message here'
                        className='border-b-2 border-gray-400 placeholder:text-gray-400 focus:border-b-black pb-2 w-[450px] outline-none'
                    />
                </div>

                <button className='bg-black/90 text-white px-20 py-2.5 font-medium'>
                    Send
                </button>
                
            </div>

        </form>
    </div>
  )
}

export default Form