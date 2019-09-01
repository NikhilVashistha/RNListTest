import React, {PureComponent} from 'react';

import {View, Text} from 'react-native';
import CustomImage from '../CustomImage';
import {styles} from './styles';

export default class ListItem extends PureComponent {
  render() {
    const {itemData, numColumns} = this.props;

    return (
      <View
        style={[
          styles.containerView,
          numColumns == 2 ? styles.heightStyle : {},
        ]}>
        <CustomImage
          imgStyle={styles.imageView}
          source={{
            uri: itemData.imageUrl ? itemData.imageUrl : null,
          }}
        />
        {numColumns != 3 && (
          <View style={styles.textContainer}>
            <Text
              style={styles.titleView}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              {itemData.headline}
            </Text>
            {numColumns == 1 && (
              <Text style={styles.descriptionView}>{itemData.summary}</Text>
            )}
          </View>
        )}
      </View>
    );
  }
}
