import React from 'react';
import { DiReact, DiJsBadge, DiCss3 } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle> Technologies
      <br /> </SectionTitle>

    <SectionText>
      I have worked with some of the framework related to Front-End Development.<br />
      I have Also worked with some styling tools.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Worked with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size="3rem" />
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            Worked with <br />
            Javascript and HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>Styling Tools</ListTitle>
          <ListParagraph>
            Worked with <br />
            CSS3 and TailwindCss
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
