import React, {useContext, useEffect, useState} from 'react';
import { dataContext } from '../Providers/TableDataProvider';

const Jumbotron = () => {
  
  //Consuming Context
  const{odata, data, setData} = useContext(dataContext);

  //LOCATION
  const[locationFilter, setLocationFilter] = useState("");
  //Handling Location
  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  }


  //HANDLE CHECKBOXES
  const[isCheckedY, setIsCheckedY] = useState(false)


  //Handle Checkbox
  const handleCheckboxY = () => {
      if(isCheckedY)
        setIsCheckedY(!isCheckedY);
      else
        setIsCheckedY(!isCheckedY);
  }


  const handleFilterButton = () => {
    
    const data = odata;

    const filterMan = data.filter((item) => {
      
      console.log(isCheckedY);

      if(isCheckedY === false && locationFilter !== ""){
        if(locationFilter.toLowerCase() === item.location.toLowerCase())
          return true;
      }

      console.log(locationFilter)
      if(isCheckedY === true && locationFilter === ""){
        if(item.walkin === isCheckedY)
          return true;
      }
      

      if((locationFilter.toLowerCase() === item.location.toLowerCase()) && item.walkin === isCheckedY){
        // console.log("1")
        return true;
      }
      else{
        // console.log("3")
        return false;
      }
        
  })

    setData(filterMan);

  }


  //HANDLE RESET BUTTON
  const handleResetButton = () => {
    setData(odata);
  }


  useEffect(() => console.log(data))


  return (
    <section className='bg-gray-100 border m-8 rounded-xl flex flex-col p-8'>
        <div className='bg-black text-yellow-400 font-mono italic pl-11 pt-3 pb-3 pr-11 rounded-t-xl text-center '>
          <span>Hey! use me</span>
        </div>

        <div className='flex flex-col mt-5'>
          <label htmlFor='location' className="bg-black text-yellow-400 font-mono text-sm font-medium leading-6 text-start rounded-md mb-3 p-2">Location: </label>
          <select className='w-52 border border-gray-700 rounded-md' onChange={handleLocationChange}>
            <option value={""} selected>Choose one. . .</option>
            <option value={"Bengaluru"} >Bengaluru</option>
            <option value={"Chennai"} >Chennai</option>
            <option value={"Hyderabad"} >Hyderabad</option> <input type='checkbox'  /> Yes
          </select>

          <label htmlFor='walk-in' className="bg-black text-yellow-400 font-mono leading-6 text-start rounded-md mt-5 text-sm p-2">Walk-in: {" "}
          <input type='checkbox'  checked={isCheckedY} onChange={handleCheckboxY}/> Yes {" "}
          </label>
          
        </div>

        <div className='flex flex-row'>
          <div>
            <button title="*Remember to choose options correctly" onClick={handleFilterButton} className='bg-black text-yellow-400 transition-transform hover:scale-105 font-mono italic m-6 p-3 rounded-xl mt-auto bottom-32 fixed'>Filter Go...</button>
          </div>
          <div>
            <button title="*Remember to choose options correctly" onClick={handleResetButton} className='bg-black text-yellow-400 transition-transform hover:scale-105 font-mono italic m-6 p-3 rounded-xl mt-auto  bottom-16 fixed'>Reset Table!</button>
          </div>
        </div>
    </section>
  )
}





export default Jumbotron;