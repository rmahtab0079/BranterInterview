// TwitterComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import mockTweets from './mockTweets.json';

const TwitterComponent = () => {
  const [tweets, setTweets] = useState(mockTweets);

  useEffect(() => {
    // const apiUrl = 'https://api.mypanel.ai:443/get_home_timeline'; // Update to your specific URL
    // const tweetCount = 5;

    // const fetchTweets = async () => {
    //     try {
    //       const response = await axios.get(apiUrl, {
    //         params: {
    //           count: tweetCount,
    //         },
    //       });
  
    //       setTweets(response.data);
    //     } catch (error) {
    //       console.error('Error fetching tweets:', error);
    //     }
    //   };
  
    //   fetchTweets();
  }, []);

  return (
    <div>
      <h1>Last 5 Tweets</h1>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id_str} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <p>{tweet.full_text}</p>
            <small>Date: {new Date(tweet.date).toLocaleString()}</small>
            <p>Likes: {tweet.likes}</p>
            <p>Reposts: {tweet.reposts}</p>
            <p>Comments: {tweet.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterComponent;