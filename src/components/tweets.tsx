import React from 'react';

interface TweetProps {
    
    text: string;
}

const Tweet: React.FC<TweetProps> = ({ text }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <p>{text}</p>
    </div>
  );
};

export default Tweet;
