import { Component } from 'react';
import { Wrapper } from './Wrapper.styled';
import { Heading } from './Feedback/Heading/Heading';
import { Feedback } from './Feedback/Feedback';


export class App extends Component {
  render() {
    return (
      <Wrapper>
        <Heading title="Please, leave feedback!" />
        <Feedback />
      </Wrapper>
    );
  }
}
