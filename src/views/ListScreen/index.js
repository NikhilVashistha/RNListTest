import React, {PureComponent, Fragment} from 'react';

import {FlatList, ActivityIndicator, View, Text} from 'react-native';
import Axios from 'react-native-axios';

import {Constants, Strings} from '../../config';
import ListItem from '../../components/ListItem';
import CustomButton from '../../components/CustomButton';

import {styles} from './styles';

export default class ListScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isLoading: false,
      offset: 0,
      numColumns: 3,
    };
  }

  componentDidMount() {
    this.getNewsArticles();
  }

  showLoader = show => {
    this.setState({isLoading: show});
  };

  getNewsArticles(offsetValue = 0) {
    this.showLoader(true);
    Axios.get(Constants.API_GET_ARTICLES(offsetValue))
      .then(response => {
        if (response && response.data && response.data.success) {
          const listData = response.data.data;
          this.setState({
            listData: [...this.state.listData, ...listData],
            isLoading: false,
            offset: this.state.offset + listData.length,
          });
          return;
        }
        this.showLoader(false);
      })
      .catch(error => {
        this.showLoader(false);
        let errorMsg = Strings.API_ERROR_UNEXPECTED;
        if (error.response && error.response.data) {
          errorMsg = error.response.data.message;
        } else if (error.code === 'ECONNABORTED') {
          errorMsg = Strings.API_ERROR_NETWORK;
        }
        setTimeout(() => {
          alert(errorMsg);
        });
      });
  }

  _keyExtractor = (item, index) => `${item['_id']}_${index}`;

  renderItem = ({item}) => {
    return <ListItem itemData={item} numColumns={this.state.numColumns} />;
  };

  renderList = () => {
    return (
      <FlatList
        style={styles.listStyle}
        data={this.state.listData}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        onEndReached={() => this.getNewsArticles(this.state.offset)}
        onEndReachedThreshold={0.7}
        removeClippedSubviews={true}
        key={`${this.state.numColumns}`}
        numColumns={this.state.numColumns}
      />
    );
  };

  updateListColumn = column => {
    this.setState({numColumns: column});
  };

  renderButtonsView = () => {
    return (
      <View style={styles.buttonsContainerView}>
        <CustomButton
          title={Strings.LIST_BTN_GRID}
          onPress={() => {
            this.updateListColumn(3);
          }}
        />
        <CustomButton
          title={Strings.LIST_BTN_COMPACT}
          onPress={() => {
            this.updateListColumn(2);
          }}
        />
        <CustomButton
          title={Strings.LIST_BTN_LARGE}
          onPress={() => {
            this.updateListColumn(1);
          }}
        />
      </View>
    );
  };

  renderLoader() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    if (this.state.listData.length == 0) {
      return <Text>{Strings.LIST_NO_DATA}</Text>;
    }
  }

  render() {
    return (
      <View style={styles.containerView}>
        {this.state.listData && this.state.listData.length > 0 ? (
          <Fragment>
            {this.renderButtonsView()}
            {this.renderList()}
            {this.renderLoader()}
          </Fragment>
        ) : (
          this.renderLoader()
        )}
      </View>
    );
  }
}
