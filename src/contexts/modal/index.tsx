import React, { createContext, useState } from 'react'

import Modal from './components/modal'

type IModalContext = [
  boolean | JSX.Element,
  React.Dispatch<React.SetStateAction<boolean | JSX.Element>>,
]

export const ModalContext = createContext<IModalContext>([false, () => {}])
ModalContext.displayName = 'ModalContext'

type ModalProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const ModalProvider: React.FC<ModalProviderProps> = (
  props,
): JSX.Element => {
  const [modal, setModal] = useState<boolean | JSX.Element>(false)

  return (
    <ModalContext.Provider value={[modal, setModal]} {...props}>
      {modal ? <Modal onClose={() => setModal(false)}>{modal}</Modal> : null}

      {props.children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
