import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { Img } from '../Projects/ProjectsStyles'
import { LeftSection, RightSection, ImgSection, MainText } from './HeroStyles'

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
          <Button alt ><a style={{ color: "white" }} href='https://www.linkedin.com/in/bhumil-modi-430148190/'>Contact Me</a></Button>
        </LeftSection>
        <RightSection>
          <ImgSection>
            <Img src='/images/banner_3 1.png' />
          </ImgSection>
        </RightSection>
      </div>
      <div className='intro'>
        <MainText>
          The purpose of making this Portfolio is to Showcase the work I have done in Front-End Development. Currently, I am looking to work as an Intern.
        </MainText>
      </div>
    </Section>
  )
}

export default Hero