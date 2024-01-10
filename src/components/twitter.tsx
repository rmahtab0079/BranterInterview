import React, { useEffect, useState } from 'react';
import Tweet from './tweets';

interface TweetData {
  id: string;
  text: string;
}

const TwitterClone: React.FC = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.mypanel.ai:443/get_home_timeline')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching tweets:', error));
  }, []);

  if (isLoading) {
    return <p>Loading tweets...</p>;
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} text={tweet.text} />
      ))}
    </div>
  );
};

export default TwitterClone;
