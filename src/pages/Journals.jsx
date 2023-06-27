import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import AboutContainer from '../components/AboutContainer'

const Journals = () => {
    return (
        <div className='max-w-full mt-20'>
            <Header/>
            <Title title='Journal'/>
            <AboutContainer/>
        </div>
    )
}

export default Journals