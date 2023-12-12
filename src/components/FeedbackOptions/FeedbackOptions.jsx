import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map((option, index) => {
          return (
            <button
              onClick={onLeaveFeedback}
              type="button"
              value={option}
              key={index}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
}
