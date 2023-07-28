import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, FAMILIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesktop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDesktop>
        <Logo />

        <SubscribeButton>
          <Button>Subscribe</Button>
          <AlreadySubscribed href="login">Already a subscriber?</AlreadySubscribed>
        </SubscribeButton>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 36px;
    padding-left: 120px;
    padding-right: 120px;
  }
`;

const ActionGroupDesktop = styled(ActionGroup)`
  display: none;
  height: 100%;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeButton = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    align-self: flex-end;
    display: grid;
    justify-items: center;
    align-items: end;
  }
`;

const AlreadySubscribed = styled.a`
  font-family: ${FAMILIES.serif};
  font-size: 14px;
  color: ${COLORS.gray[900]};
  font-style: italic;
  text-decoration: underline;
  padding-top: 8px;
  margin-bottom: 2px;
`;

export default Header;
