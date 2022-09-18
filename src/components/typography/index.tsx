import React from 'react'

import styled from 'styled-components/native'

/**
 * * typography renders a text with a specific variant
 * * @param {variant} type of text => [title, subtitle, sectiontitle, body, bodybold, bodylink, bodylarge, bodylargebold, button, span]
 * * @param {children} text to render
 */

const title = styled.Text`
  font-size: 24px;
  font-family: 'Montserrat-Bold';
  color: ${({ theme }) => theme.palette.blacks[2]};
`

const body = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Light';
  color: ${({ theme }) => theme.palette.blacks[2]};
`

const button = styled.Text`
  font-size: 18px;
  font-family: 'Montserrat-Black';
  color: ${({ theme }) => theme.palette.blacks[2]};
`

const TypographyVariants = {
  title,
  body,
  button,
}

type TypographyProps = {
  variant: keyof typeof TypographyVariants
  children: JSX.Element
  className?: string
  [rest: string]: any
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
  ...rest
}) => {
  const Text = TypographyVariants[variant]

  const text = Array.isArray(children)
    ? children
        .map(string => string)
        .flat()
        .join('')
    : children

  return (
    <Text className={className} {...{ ...rest }} allowFontScaling={false}>
      {text?.toString()}
    </Text>
  )
}

export default Typography
