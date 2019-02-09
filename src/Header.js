import React, { useState } from 'react';
import styled from 'styled-components';
import { solarized } from './constant.js';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const LinkWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
`;

const HeaderLink = styled.button`
  background: ${ props => props.active ? solarized.cyan : "white" }
  color: ${ props => props.active ? "white" : solarized.base1 };
  font-size: 1.5em;
  padding: 0.25em 1em;
  border-radius: 4px;
  border: transparent;
`

const Header = (props) => {
  const [tab, setTab] = useState("upload");

  return (
    <StyledHeader>
      <LinkWrapper>
        <HeaderLink
          active={tab === "upload"}
          onClick={() => setTab("upload")}
        >
          Upload
        </HeaderLink>
        <HeaderLink
          active={tab === "history"}
          onClick={() => setTab("history")}
        >
          History
        </HeaderLink>
      </LinkWrapper>
    </StyledHeader>
  );
};

export default Header;
