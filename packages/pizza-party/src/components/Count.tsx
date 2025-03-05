import React, { useState } from 'react'
import { Button } from 'cargo-components'

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Button label="Click Me" onClick={() => setCount(count + 1)} />
      <p>{count}</p>
    </>
  )
}

export default Count
