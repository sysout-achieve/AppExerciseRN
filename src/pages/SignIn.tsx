import React from 'react';
import {Text, TextInput, View} from 'react-native';

function SignIn() {
  return (
    <View>
      <View>
        <Text>이메일</Text>
        <TextInput placeholder="이메일을 입력해주세요." />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력해주세요." />
      </View>
      <Text>로그인</Text>
    </View>
  );
}

export default SignIn;
