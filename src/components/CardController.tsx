
import { TouchableOpacity } from 'react-native';

import styled from '@emotion/native';

interface Props {
  onPressPass: () => void;
  onPressStore: () => void;
}

function CardController({ onPressPass, onPressStore }: Props) {
  return (
    <ControllerWrapper accessibilityIgnoresInvertColors={false}>
      <TouchableOpacity
        testID="pass-button"
        accessibilityRole="button"
        onPress={onPressPass}
      >
        <Controller
          source={require('../../assets/images/pass.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        testID="store-button"
        accessibilityRole="button"
        onPress={onPressStore}
      >
        <Controller
          source={require('../../assets/images/store.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </ControllerWrapper>
  );
}

export default CardController;

const ControllerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 60px;
`;

const Controller = styled.Image`
  width: 72px;
  height: 72px;
  margin: 0 16px;
`;
