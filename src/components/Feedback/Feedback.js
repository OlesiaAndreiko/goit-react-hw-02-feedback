import {Component} from 'react';

let totalFeedbacks = 0;
let positivefeedbacks = 0;

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // props = {
  //   totalFeedbacks: 0,
  // };

  // feedbacks = [];

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  // countTotalFeedback = () => {
  //   this.props[totalFeedbacks] = 0;
  //   const values = Object.values(this.state);
  //   // let totalFeedbacks = 0;
  //   for (const value of values) {
  //     this.props[totalFeedbacks] += value;
  //     console.log(this.props[totalFeedbacks]);
  //   }
  //   return this.props[totalFeedbacks]
  // };

  countTotalFeedback = () => {
  totalFeedbacks = 0;
  console.log(this.state)
  Object.values(this.state).forEach(feedback => totalFeedbacks += feedback);
    // totalFeedbacks = 0;
    // const values = Object.values(this.state);
    // for (const value of values) {
    //   totalFeedbacks += value;
    // }
    return totalFeedbacks;
  };


  // countTotalFeedback = () => {
  //   totalFeedbacks = 0;
  //   const values = Object.values(this.state);
  //   for (const value of values) {
  //     totalFeedbacks += value;
  //   }
  //   return totalFeedbacks;
  // };

  countPositiveFeedbackPercentage = () => {
    return (positivefeedbacks =
      Math.round((this.state.good / totalFeedbacks) * 100) || 0);
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Please, leave feedback!</h2>
        <ul>
          {Object.keys(this.state).map(el => (
            <li key={el}>
              <button name={el} onClick={this.handleClick} type="button">
                {el}
              </button>
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        {Object.values(this.state).some(el => el > 0) ? (
          <>
          <ul>
            {Object.entries(this.state).map(el => (
              <li key={el}>
                <span>{el}</span>
              </li>
            ))}
          </ul>
          <span totalfeedbacks={this.countTotalFeedback()}>
          Total: {totalFeedbacks}
        </span>
        <span positivepercentage={this.countPositiveFeedbackPercentage()}>
          Positive feedback: {positivefeedbacks} %
        </span>
          </>
        ) : (
          <h2>no feedback given</h2>
        )}        
      </div>
    );
  }
}
