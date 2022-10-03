import React from 'react'
import { ActivityIndicator } from 'react-native'

import styled from 'styled-components/native'

import Typography from '../typography'

type ButtonProps = {
  loading?: boolean
  onPress: () => void
  text: string | string[]
}

const Button: React.FC<ButtonProps> = ({
  loading,
  onPress,
  text,
}): JSX.Element => {
  return (
    <Component disabled={loading} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Typography variant="button">{text}</Typography>
      )}
    </Component>
  )
}

const Component = styled.TouchableOpacity<{ disabled: boolean }>`
  margin: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.brand[0]};
  box-shadow: 0 3px 5px ${({ theme }) => theme.palette.blacks[5]};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

export default Button
