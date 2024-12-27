import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 40;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
  margin-right: 25px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  margin-left: 20px;
`;

export const BackIcon = styled(Icon)`
  font-size: 32px;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-right: 20px;
`;
