import React, { useState, createContext } from 'react'
import originalData from "../Api/data.json"

export const dataContext = createContext();

const TableDataProvider = ({children}) => {

  //Creating context for data file
  const odata = originalData;
  const[data, setData] = useState(odata);

  return (
    <dataContext.Provider value={{odata, data, setData}}>
        {children}
    </dataContext.Provider>
  )
}

export default TableDataProvider