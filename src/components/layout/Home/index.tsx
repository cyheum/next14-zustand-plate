'use client'

import React from 'react'

import { Button } from '@/components'
import { useHomeStore } from '@/store'

import * as S from './index.style'

export const HomeContainer: React.FC = () => {
  const { count, actions } = useHomeStore()

  return (
    <S.Container>
      Count: {count} <br />
      <Button onClick={() => actions.setCount(count + 1)}>카운트 올리기</Button>
    </S.Container>
  )
}
