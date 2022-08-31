import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import Typography from '../../../components/typography'

type ModalProps = {
  children: boolean | JSX.Element
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }): JSX.Element => {
  const [toastVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    setModalVisibility(true)
  }, [])

  const handleCloseModal = () => {
    setModalVisibility(false)

    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Container>
      <Close>
        <Typography variant="subtitle" onClick={() => handleCloseModal}>
          x
        </Typography>
      </Close>
    </Container>
  )
}

const Container = styled.View`
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100vw;
  height: 100vw;
  background-color: white;
`

const Close = styled.View`
  position: absolute;
  top: 0;
  right: 20px;
  z-index: 3;
`

export default Modal
