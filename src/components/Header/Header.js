import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color: "white"}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#edu">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      {/* <li>
        <a href="https://resume.creddle.io/resume/hd9k14kgxui">
          <NavLink>Resume</NavLink>
        </a>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/YuqinHu'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ian-hu-67160b1ba/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
