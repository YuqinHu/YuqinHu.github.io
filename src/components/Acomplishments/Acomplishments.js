import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { school: "Simon Fraser University", major: 'Data Science Major Bachelor of Science', year: 'Apr. 2019​ to Dec. 2022​'},
  { school: "Lighthouse Lab", major: 'Full-Stack Developer Diploma ', year: 'Feb. 2023​ to Apr. 2023​​'},
];

const Acomplishments = () => (
  <Section nopadding id = "edu">
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.major}</BoxNum>
          <BoxText>{card.year}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
