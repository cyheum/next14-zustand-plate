'use client'

import React from 'react'

import * as S from './index.style'

export interface ButtonProps {
  $buttonType:
    | 'white'
    | 'purple'
    | 'gray'
    | 'black'
    | 'blackWhite'
    | 'blue'
    | 'red'
    | 'pink'
    | 'gradient-blue'
    | 'sky_blue'
  $isLight?: boolean
  disabledStyle?: string
  $height?: number
  $fontSize?: number
  lineHeight?: string
  $buttonstyle?: string
  $borderradius?: number
  noPreventDefault?: boolean
  noClick?: boolean
  disabled?: boolean
}

export interface ContainerProps {
  $marginLeft?: number
  $marginRight?: number
  $marginBottom?: number
  $containerstyle?: string
}

interface IProps extends Omit<ButtonProps, '$buttonType'>, ContainerProps {
  type?: ButtonProps['$buttonType']
  onClick?(): void
  disabled?: boolean
  text?: string | React.ReactNode
  getClassName?: string
  children?: React.ReactNode
  noStopPropagation?: boolean
}

export const Button: React.FC<IProps> = ({
  $containerstyle,
  type = 'black',
  text,
  $height,
  lineHeight,
  $isLight,
  disabled = false,
  disabledStyle,
  onClick,
  $marginLeft,
  $marginRight,
  $marginBottom,
  $fontSize,
  children,
  $buttonstyle,
  getClassName,
  $borderradius,
  noPreventDefault,
  noClick,
  noStopPropagation,
}) => {
  return (
    <S.Container
      $marginBottom={$marginBottom}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $containerstyle={$containerstyle}
    >
      <S.Button
        className={getClassName}
        $buttonstyle={$buttonstyle}
        noClick={noClick}
        $height={$height}
        lineHeight={lineHeight}
        $isLight={$isLight}
        $fontSize={$fontSize}
        $buttonType={type}
        disabled={disabled}
        disabledStyle={disabledStyle}
        $borderradius={$borderradius}
        onClick={(e) => {
          if (!noPreventDefault) {
            e.preventDefault()
          }
          if (!noClick && Boolean(onClick)) {
            e.stopPropagation()
            onClick!()
          }
        }}
        onMouseDown={(e) => {
          if (!noStopPropagation) {
            e.stopPropagation()
          }
        }}
        onTouchStart={(e) => {
          if (!noStopPropagation) {
            e.stopPropagation()
          }
        }}
      >
        {text}
        {children}
      </S.Button>
      {type === 'gradient-blue' && (
        <S.DiabledButton
          $buttonstyle={$buttonstyle}
          $height={$height}
          lineHeight={lineHeight}
          $isLight={$isLight}
          $fontSize={$fontSize}
          $buttonType={type}
          disabled={disabled}
          disabledStyle={disabledStyle}
          $borderradius={$borderradius}
        >
          {text}
          {children}
        </S.DiabledButton>
      )}
    </S.Container>
  )
}

export const MemoizedPrimaryButton = React.memo(Button)
