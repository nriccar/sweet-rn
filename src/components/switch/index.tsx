import React, { useState } from 'react'
import { LayoutAnimation, Platform } from 'react-native'

import styled from 'styled-components/native'

type SwitchProps = {
  thumbImages?: [string, string]
  trackColors?: [string, string]
  thumbColors?: [string, string]
  onSwitch?: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({
  thumbImages,
  trackColors = ['#767577', '#f5dd4b'],
  thumbColors = ['#81b0ff', '#f4f3f4'],
  onSwitch = () => {},
}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setIsEnabled(previousState => !previousState)
    if (onSwitch) onSwitch(!isEnabled)
  }

  return (
    <Container>
      <StyledSwitch
        trackColor={{ false: trackColors[0], true: trackColors[1] }}
        thumbColor={isEnabled ? thumbColors[0] : thumbColors[1]}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      {thumbImages && Platform.OS === 'ios' ? (
        <ThumbImageButton onPress={toggleSwitch} {...{ isEnabled }}>
          <ThumbImage source={isEnabled ? thumbImages[0] : thumbImages[1]} />
        </ThumbImageButton>
      ) : null}
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`

const StyledSwitch = styled.Switch`
  transform: scale(1.5);
`

type ThumbImageButtonProps = {
  isEnabled: boolean
}
const ThumbImageButton = styled.TouchableOpacity<ThumbImageButtonProps>`
  position: absolute;
  left: ${({ isEnabled }) => (isEnabled ? 'auto' : '-2.5px')};
  right: ${({ isEnabled }) => (isEnabled ? '-2.5px' : 'auto')};
`

const ThumbImage = styled.Image`
  width: 25px;
  height: 25px;
`

export default Switch
