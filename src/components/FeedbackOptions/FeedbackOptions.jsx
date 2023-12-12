import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};
