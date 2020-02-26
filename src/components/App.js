import React from 'react';
import WeatherList from './WeatherList';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './app.css';

const App = () => (
  <div class="ui padded equal height grid">
    <div class="sixteen wide stretched column">
      <div class="ui equal height grid">
        <div class="sixteen wide column"></div>
        <div class="six wide column">
          <div className='c'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="saurabhnemade"
              options={{height: 380, width: 600}}
            />
          </div>
        </div>
        <div class="ten wide column"><WeatherList /></div>
      </div>
    </div>
  </div>
)

export default App