import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="text-center align-middle topic my-auto" >{typedText}</p>;
};

export default TypingText;
