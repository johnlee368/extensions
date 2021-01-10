import React from 'react';
import moment from 'moment';

import {
  TouchableOpacity,
  Title,
  Caption,
  View,
  Tile,
  ImageBackground,
  Divider,
} from '@shoutem/ui';

import {
  EpisodeView,
} from '../components/EpisodeView';

/**
 * A component used to render featured podcast 
 */
export class FeaturedPodcastView extends EpisodeView {
  render() {
    const { podcastTitle, imageUrl, date, author } = this.props;
// Tried to pull in podcastTitle from EpisodeView

    const momentDate = moment(date);
    const dateInfo = momentDate.isAfter(0) ? (
      <Caption styleName="md-gutter-left">
        {momentDate.fromNow()}
      </Caption>
    ) : null;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View styleName="sm-gutter featured">
          <ImageBackground
            source={{ uri: imageUrl }}
            styleName="featured placeholder"
          >
            <Tile>
              {/* This is where the title of the podcast would go */}
              <Title>{(podcastTitle || '').toUpperCase()}</Title>
              <View styleName="horizontal md-gutter-top" virtual>
                <Caption numberOfLines={1} styleName="collapsible">
                  {author}
                </Caption>
              </View>
            </Tile>
          </ImageBackground>
        </View>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}
