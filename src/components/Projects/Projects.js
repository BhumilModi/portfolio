import Image from 'next/image';
import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p) => {
        return (
          <BlogCard>
            <div>
              <Image src={p.image} width="500" height="400" />
            </div>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t) => {
                  return <Tag>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;