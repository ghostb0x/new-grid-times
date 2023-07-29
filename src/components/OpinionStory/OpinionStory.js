import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <StyledA href={`/story/${id}`}>
      <Wrapper>
        <Avatar
          alt=""
          src={avatar}
        />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </StyledA>
  );
};

const StyledA = styled.a`
  &:not(:first-child) {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 1rem;
  }

  &:not(:last-child) {
    padding-bottom: 1rem;
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:first-child) {
    border-top: revert;
    padding-top: revert;
  }
    
  }
`;
const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 5px;
  margin-bottom: 8px;
  
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
