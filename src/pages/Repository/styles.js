import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Browser = styled(WebView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator`
  position: absolute;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${width};
  height: ${height};
`;
