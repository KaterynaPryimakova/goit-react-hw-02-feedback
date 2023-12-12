import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target }) => {
    const feedbackMark = target.value.toLowerCase();

    this.setState(prevState => ({
      [feedbackMark]: prevState[feedbackMark] + 1,
    }));
  };

  render() {
    return (
      <div>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </div>
    );
  }
}
