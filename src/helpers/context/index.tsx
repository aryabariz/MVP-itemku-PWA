/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'

export const ProductContext = React.createContext(null) as any

const ProductProvider = ({ children }: any) => {
  const [data, setData] = useState('')

  const State = {
    data,
    setData,
  }

  return (
    <ProductContext.Provider value={State}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider
