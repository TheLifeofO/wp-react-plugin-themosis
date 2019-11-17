import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from 'hooks/useStore'

export const Counter: FC = observer(() => {
  const { counterStore } = useStores()

  return (
    <div>
      <div>Count: {counterStore.count}</div>
      <div>Double count: {counterStore.doubleCount}</div>
    </div>
  )
})
