import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => {
  return (
    <Section>
      <LeftSection>
        <div className='hero-title' main center >
          Hello, <br />
          I am Bhumil Modi <br />
          Welcome to my portfolio.
        </div >
        <Button ><a style={{ color: "white" }} href='https://www.linkedin.com/in/bhumil-modi-430148190/'>Contact Me</a></Button>
      </LeftSection>
      <div className='intro'>
        <SectionText>
          The purpose of making this Portfolio is to Showcase the work I have done in Front-End Development. Currently, I am looking to work as an Intern.
        </SectionText>
      </div>
    </Section>
  )
}

export default Hero