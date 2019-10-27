import React from 'react';
import PropTypes from 'prop-types';
import { Browser, Loading } from './styles';

export default function Repository({ navigation }) {
  const repository = navigation.getParam('repository');
  return (
    <Browser
      source={{ uri: repository.html_url }}
      renderLoading={() => <Loading color="#7159c1" size="large" />}
      startInLoadingState
    />
  );
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
