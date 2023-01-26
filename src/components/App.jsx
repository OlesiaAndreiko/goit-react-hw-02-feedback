import { Component } from 'react';
import { Container } from './Container/Container.styled';
import { Heading } from './Heading/Heading';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section.styled';



export class App extends Component {
  
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
        100 || 0
    );
  };

  render() {
    return (
      <Container>
        <Section>
          <Heading title="Please, leave feedback!" />
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section>
          <Heading title="Statistics" />
          <Statistics
            options={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
