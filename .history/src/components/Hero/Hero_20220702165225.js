import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'

import { LeftSection, RightSection, ImgSection, MainText, Img } from './HeroStyles'

const Hero = (props) => {
  return (
    <Section>
      <div className='hero-section'>
        <LeftSection>
          <SectionTitle center >
            Hello, <br />
            I am Bhumil Modi <br />
            Front End Developer
          </SectionTitle>
          <Button ><a style={{ color: "white" }} href='https://www.linkedin.com/in/bhumil-modi-430148190/'>Contact Me</a></Button>
        </LeftSection>
        <RightSection>
          <ImgSection>
            <Img src='/images/bg.png' />
          </ImgSection>
        </RightSection>
      </div>
      <div className='intro'>
        <MainText>
          The purpose of making this Portfolio is to Showcase the work I have done as Front-End Developer. Currently, I am looking to work as an Intern.
        </MainText>
      </div>
    </Section>
  )
}

export default Hero