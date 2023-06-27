import React from 'react'
import Title from '../components/Title'
import Header from '../components/Header'
import AboutContainer from '../components/AboutContainer'

const About = () => {

    return (
        <div className='max-w-full mt-20'>
            <Header/>
            <Title title="About"/>
            <AboutContainer/>
        </div>
    )
}

export default About