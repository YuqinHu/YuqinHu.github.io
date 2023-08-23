import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Ian's World
      </SectionTitle>
      <SectionText>
      Highly skilled full-stack web developer with a strong background in data science, offering expertise in both front-end and back-end development. Demonstrated proficiency in coding, data processing, and applying various analytical models to analyze, predict, and compare large datasets. Equipped with the ability to quickly adapt to new technology stacks, facilitating seamless integration into diverse team environments. 
      </SectionText>
      <Button onClick = { () => window.location.href ="mailto:yuqinhu0420@gmail.com"}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;