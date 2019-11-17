import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from 'hooks/useStore'

export const CounterButtons: FC = observer(() => {
  const { counterStore } = useStores()

  return (
    <div>
      <button onClick={() => counterStore.increment()}>Increase</button>
      <button onClick={() => counterStore.decrement()}>Decrease</button>
    </div>
  )
})
