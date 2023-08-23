import React from 'react';
import {DiReact, DiDatabase} from 'react-icons/di';
import {GiWireframeGlobe} from 'react-icons/gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    As a highly skilled full-stack web developer with a strong foundation in data science.
    My expertise spans both front-end and back-end development, 
    enabling me to create dynamic and user-friendly applications that make a meaningful impact. With a flair for database management and data manipulation, 
    I bring a unique perspective to crafting solutions that seamlessly integrate technology and data.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem" />
          <ListContainer>
            <ListTitle>Languages</ListTitle>
            <ListParagraph>
              Javascript<br />
              Typescript<br />
              Java<br />
              Python<br />
              C++<br />
              R<br />
              Ruby<br />
              SASS<br />
              HTML<br />
              CSS<br />
              SQL
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <GiWireframeGlobe size = "3rem" />
          <ListContainer>
            <ListTitle>Framework</ListTitle>
            <ListParagraph>
              NodeJS<br />
              ReactJS<br />
              ExpressJS<br />
              Mocha<br />
              Storybook<br />
              Spring Boot<br />
              Pandas<br />
              Matplotlib<br />
              JQuery<br />
              Jest
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size = "3rem" />
          <ListContainer>
            <ListTitle>Database & Tools</ListTitle>
            <ListParagraph>
              PostgreSQL<br />
              MongoDB<br />
              Redis<br />
              Kubernetes<br />
              AWS<br />
              Heroku<br />
              Git              
            </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
