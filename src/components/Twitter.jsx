import React from 'react'
import Tweet from 'react-tweet'

const tweetData = {
  id: 'XXX',
  user: {
    name: 'XXX',
    screen_name: 'XXX',
    profile_image_url: 'XXX'
  },
  text: 'Testing',
  created_at: 'XXX',
  favorite_count: 'XXX',
  retweet_count: 'XXX',
  entities: {
    media: [],
    urls: [],
    user_mentions: [],
    hashtags: [],
    symbols: []
  } 
}

class Twitter extends React.Component {
  render () {
    return (
      <Tweet data={tweetData} />
    )
  }
}

export default Twitter

