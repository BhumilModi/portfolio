import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { Img } from '../Projects/ProjectsStyles'
import { LeftSection, RightSection } from './HeroStyles'

const Hero = (props) => {
  return (
    <Section>
      <div className='hero-section'>
        <LeftSection>
          <SectionTitle center >
            Hello, <br />
            I am Bhumil Modi <br />
            Welcome to my portfolio.
          </SectionTitle>
          <Button ><a style={{ color: "white" }} href='https://www.linkedin.com/in/bhumil-modi-430148190/'>Contact Me</a></Button>
        </LeftSection>
        <RightSection>
          <Img src="'/images/marketplace.png'" />
        </RightSection>
      </div>
      <div className='intro'>
        <SectionText>
          The purpose of making this Portfolio is to Showcase the work I have done in Front-End Development. Currently, I am looking to work as an Intern.
        </SectionText>
      </div>
    </Section>
  )
}

export default Hero