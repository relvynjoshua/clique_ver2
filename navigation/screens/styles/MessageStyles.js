import styled from 'styled-components';


export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 90px;
  align-items: center;
  justify-content: center;
 
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-vertical: 15px;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align text to the left */
  padding: 15px;
  margin-top: 10px;
  width: 88%; /* Adjust the width as needed */
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
  font-family: 'monospace';
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: #333333;
`;
