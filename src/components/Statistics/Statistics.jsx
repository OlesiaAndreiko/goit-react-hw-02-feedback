import { Notification } from '../Notification/Notification';
import {StatsWrap,  FeedbackList,  FeedbackItem, StatsCount} from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  return Object.values(options).some(el => el > 0) ? (
    <StatsWrap>
      <FeedbackList>
        {Object.entries(options).map(el => (
          <FeedbackItem key={el[0]}>
            <span>{el[0]}</span>
            <span>: {el[1]}</span>
          </FeedbackItem>
        ))}
      </FeedbackList>
      <StatsCount>Total: {total}</StatsCount>
      <StatsCount>Positive feedback: {positivePercentage}%</StatsCount>
    </StatsWrap>
  ) : (
    <Notification message="There is no feedback" />
  );
};
