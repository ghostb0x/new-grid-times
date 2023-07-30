import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory
              key={story.id}
              {...story}
            />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory
              key={story.id}
              {...story}
            />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';

    background-color: ${COLORS.gray[300]};
    gap: 0 .8px;
    
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletOnly} {
    padding-right: 16px;
    background-color: ${COLORS.gray[100]};
    
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletOnly} {
    padding-left: 16px;
    background-color: ${COLORS.gray[100]};
    
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.tabletOnly} {
    background-color: ${COLORS.gray[100]};
    padding-top: 48px;
  }
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.tabletOnly} {
    background-color: ${COLORS.gray[100]};
    padding-top: 48px;
    
  }
`;

export default MainStoryGrid;
