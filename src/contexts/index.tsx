import React from 'react'

import { ModalProvider } from './modal'

type ContextsProvidersProps = {
  children: JSX.Element[] | JSX.Element
}

const ContextsProviders: React.FC<ContextsProvidersProps> = ({
  children,
}): JSX.Element => <ModalProvider>{children}</ModalProvider>

export default ContextsProviders
