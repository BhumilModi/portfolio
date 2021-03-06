import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Span, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'wheat' }} >
          <DiCssdeck size="3rem" />
          <span>Bhumil Modi</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            My Work
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About Me
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/BhumilModi'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/BhumilModi'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/bhumil-modi-430148190/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
