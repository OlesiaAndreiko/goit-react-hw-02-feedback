import { ButtonList, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(el => (
        <li key={el}>
          <Button name={el} onClick={onLeaveFeedback} type="button">
            {el}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
