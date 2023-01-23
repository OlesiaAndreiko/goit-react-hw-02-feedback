import styled from 'styled-components';

export const StatsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 400;
  text-shadow: 0px 1px 1px rgb(92 90 90 / 85%);
`;

export const FeedbackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const FeedbackItem = styled.li`
  text-transform: capitalize;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const StatsCount = styled.p`
  margin: 0;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
