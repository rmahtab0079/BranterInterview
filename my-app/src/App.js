import TwitterComponent from './TwitterComponent';
import './App.css';

// const [tweets, setTweets] = useState([]);

// useEffect(() => {
//   // Replace these with your Twitter API keys and access tokens
//   const apiKey = 'YOUR_API_KEY';
//   const apiSecretKey = 'YOUR_API_SECRET_KEY';
//   const accessToken = 'YOUR_ACCESS_TOKEN';
//   const accessTokenSecret = 'YOUR_ACCESS_TOKEN_SECRET';

//   const apiUrl = 'https://api.twitter.com/2/tweets';
//   const username = 'YOUR_USERNAME'; // Replace with the Twitter username you want to fetch tweets from
//   const tweetCount = 5;

//   const fetchTweets = async () => {
//     try {
//       const response = await axios.get(`${apiUrl}/user_timeline.json`, {
//         params: {
//           screen_name: username,
//           count: tweetCount,
//           tweet_mode: 'extended', // To get full tweet text
//         },
//         auth: {
//           username: apiKey,
//           password: apiSecretKey,
//         },
//       });

//       setTweets(response.data);
//     } catch (error) {
//       console.error('Error fetching tweets:', error);
//     }
//   };

//   fetchTweets();
// }, []);

function App() {
  return (
    <TwitterComponent></TwitterComponent>
  )
  // return (
  //   <div>
  //     <h1>Last 5 Tweets</h1>
  //     <div>
  //       {tweets.map((tweet) => (
  //         <div key={tweet.id_str} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
  //           <p>{tweet.full_text}</p>
  //           <small>{new Date(tweet.created_at).toLocaleString()}</small>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default App;
