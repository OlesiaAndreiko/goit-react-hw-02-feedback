// import PropTypes from 'prop-types';
import { Component } from 'react';

const feedbackMap = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];
let totalFeedbacks = 0;
let positiveFeedbacks = 0;

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

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    totalFeedbacks = 0;
    for (const key in this.state) {
      totalFeedbacks += Number(this.state[key]);
    }
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    return (positiveFeedbacks =
      (Number(this.state.good) / totalFeedbacks) * 100);
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Please, leave feedback!</h2>
        <ul>
          {feedbackMap.map(feedback => (
            <li key={feedback.id}>
              <button
                name={feedback.id}
                onClick={this.handleClick}
                type="button"
              >
                {feedback.title}
              </button>
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        <ul>
          {feedbackMap.map(feedback => (
            <li key={feedback.id}>
              <span>{feedback.title}</span>
              <span>{this.state[feedback.id]}</span>
            </li>
          ))}
        </ul>
        <span>Total:{totalFeedbacks}</span>
        <span>Positive feedback:{positiveFeedbacks}%</span>
      </div>
    );
  }
}


// const feedbackMap = [
//   { id: 'good', title: 'Good' },
//   { id: 'neutral', title: 'Neutral' },
//   { id: 'bad', title: 'Bad' },
// ];
// let totalFeedbacks = 0;
// let positiveFeedbacks = 0;

// export class Feedback extends React.Component {
  
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedbacks = [];
 
//   handleClick = e => {
//     const { name } = e.target;
//     console.log(name);
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));

//     this.countTotalFeedback(this.state);
//     this.countPositiveFeedbackPercentage();
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     // let totalFeedbacks = 0;
//     for (const value of values) {
//       totalFeedbacks += value;
//       console.log(totalFeedbacks);
//     }
//     console.log(totalFeedbacks);
//   };



//   // countTotalFeedback = () => {
//   //   totalFeedbacks = 0;
//   //   for (const key in this.state) {
//   //     totalFeedbacks += Number(this.state[key]);
//   //   }
//   //   return totalFeedbacks;
//   // };

//   countPositiveFeedbackPercentage = () => {
//     return (positiveFeedbacks =
//       (Number(this.state.good) / totalFeedbacks) * 100);
//   };

//   render() {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <h2>Please, leave feedback!</h2>
//         <ul>
//           {Object.keys(this.state).map(el => (
//             <li key={el}>
//               <button name={el} onClick={this.handleClick} type="button">
//                 {el}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <h2>Statistics</h2>
//         {/* <ul>
//           {Object.keys(this.state).map(el => (
//             <li key={el}>
//               <span>{el}</span>
//             </li>
//           ))}
//         </ul>        */}
//         <ul>
//           {Object.entries(this.state).map(el => (
//             <li key={el}>
//               <span>{el}</span>
//             </li>
//           ))}
//         </ul>
//         <span>Total:{totalFeedbacks}</span>
//         <span>Positive feedback:{positiveFeedbacks}%</span>
//       </div>
//     );
//   }
//  }