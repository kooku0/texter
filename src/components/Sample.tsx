import { Text, View } from 'react-native';

interface Props {
  text: string;
}

function Sample({ text }: Props) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

export default Sample;
