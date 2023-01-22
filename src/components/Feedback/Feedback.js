import { Component } from 'react';
import { Heading } from './Heading/Heading';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        Object.values(this.state).reduce((acc, el) => acc + el, 0)) *
        100
    );
  };


  render() {
    return (
      <div>        
        <ul>
          {Object.keys(this.state).map(el => (
            <li key={el}>
              <button name={el} onClick={this.handleClick} type="button">
                {el}
              </button>
            </li>
          ))}
        </ul>
        <Heading title="Statistics" />
        {Object.values(this.state).some(el => el > 0) ? (
          <>
            <ul>
              {Object.entries(this.state).map(el => (
                <li key={el[0]}>
                  <span>{el[0]}</span>
                  <span>: {el[1]}</span>
                </li>
              ))}
            </ul>
            <p total={this.countTotalFeedback()}>
              Total: {this.countTotalFeedback()}
            </p>
            <p percent={this.countPositiveFeedbackPercentage()}>
              Positive feedback: {this.countPositiveFeedbackPercentage()} %
            </p>
          </>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}
