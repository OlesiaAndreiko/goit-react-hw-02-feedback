import React from 'react';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  <ul>
    {Object.keys(options).map(el => (
      <li key={el}>
        <button name={el} onClick={onLeaveFeedback} type="button">
          {el}
        </button>
      </li>
    ))}
  </ul>
};
export default FeedbackOptions;
