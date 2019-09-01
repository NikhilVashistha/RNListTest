import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerView: {
    paddingVertical: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  heightStyle: {
    height: 80,
  },
  imageView: {
    width: 48,
    height: 48,
  },
  textContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  titleView: {
    fontSize: 16,
    color: 'black',
  },
  descriptionView: {
    color: 'grey',
    fontSize: 16,
    marginTop: 6,
  },
});
