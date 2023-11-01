import React, {useContext, useEffect, useState} from 'react';
import { dataContext } from '../Providers/TableDataProvider';
import { format, sub, isBefore, isAfter, isSameDay, parse } from 'date-fns';

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


  //Handle Date (Freshness)
  const currentDate = new Date();
  const cFormattedDate = format(currentDate, 'd-MM-yyyy')
  console.log(cFormattedDate);

    //DAYS BEFORE
    const[dayBefore, setDayBefore] = useState("");
    //Handling Days
    const handleDayChange = (e) => {
      setDayBefore(e.target.value);
    }

    useEffect(() => {
      console.log(dayBefore)
    })


  const handleFilterButton = () => {

    
    const data = odata;
    console.log(currentDate)

    let count=1;
    let db = dayBefore;

    if(count === 1 ){
      db = (parseInt(dayBefore,10)) + 1;
      count++;
    }
    console.log(db)

    const daysAgo = sub(currentDate, {days: db});
    console.log(typeof cFormattedDate)
    console.log(format(daysAgo,'d-MM-yyyy'))

    const filterMan = data.filter((item) => {
      
      console.log(isCheckedY);

      const itemDateObject = parse(item.date,'d-MM-yyyy',new Date());
      console.log(itemDateObject)
      console.log(itemDateObject)
      console.log(daysAgo)

      console.log(isSameDay(itemDateObject, currentDate));
      

      console.log("START")
      console.log(`isCheckedY: ${isCheckedY}`)
      console.log(`locationFilter: ${locationFilter}`)
      console.log(item.date);
      console.log(isBefore(itemDateObject,currentDate))
      console.log(isAfter(itemDateObject, daysAgo))

      //(ALL)
      //CONDITION 1: isCheckedY, locationFilter and days must be true
      if( (isCheckedY === item.walkin && isCheckedY === true) && (locationFilter.toLowerCase() === item.location.toLowerCase() && locationFilter !== "") && (isBefore(itemDateObject, currentDate) && isAfter(itemDateObject, daysAgo)) )
      {
        console.log("case 1")
          return true;
      }
      console.log("END")

      
      //(TWO - START)
      //CONDITION 2: isCheckedY and days should be true (Walkin & Freshness)
      if( (isCheckedY === item.walkin && isCheckedY === true) && (isBefore(itemDateObject, currentDate) && isAfter(itemDateObject, daysAgo)) && locationFilter === "")
      {
        console.log("case 2")
        return true;
      }

      //CONDITION 3: locationFilter and days should be true (Location & Freshness)
      if( (locationFilter !== "" && locationFilter.toLowerCase() === item.location.toLowerCase()) && (isBefore(itemDateObject, currentDate) && isAfter(itemDateObject, daysAgo)) && isCheckedY === false)
      {
        console.log("case 3")
        return true;
      }

      //CONDITION 4: locationFilter and isCheckedY should be true (Location & Walkin)
      if( (locationFilter !== "" && locationFilter.toLowerCase() === item.location.toLowerCase()) && (isCheckedY === item.walkin && isCheckedY === true) && dayBefore === "")
      {
        console.log("case 4")
        return true;
      }
      //(TWO - END)



      //(ONE - START)
      //CONDITION 5: locationFilter should be true (Location)
      if(locationFilter.toLowerCase() === item.location.toLowerCase()  && locationFilter !== "" && (isCheckedY === false) && (dayBefore === ""))
        return true;
      //CONDITION 6: isCheckedY should be true (Walkin)
      if(isCheckedY === true  && isCheckedY === item.walkin && (locationFilter === "") && (dayBefore === ""))
        return true;
      //CONDITION 7: daysBefore should be true (Freshness)
      if((isBefore(itemDateObject, currentDate) && isAfter(itemDateObject, daysAgo))  && dayBefore !== "" && (isCheckedY === false) && (locationFilter === ""))
        return true;
      //(ONE - END)


        console.log("Case 5")
        return false;
        
  })

    setData(filterMan);

  }


  //HANDLE RESET BUTTON
  const handleResetButton = () => {
    setData(odata);
  }


  useEffect(() => console.log(data))


  return (
    <section className='bg-gray-800 border rounded-xl flex flex-col m-1 p-4 h-fit mbj'>
        <div className='bg-black text-yellow-400 font-mono italic pl-11 pt-3 pb-3 pr-11 rounded-t-xl text-center '>
          <span>Hey! use me</span>
        </div>
        <span className='text-white text-center mt-2'>{`Total Jobs: ${odata.length}`}</span>
        <div className='flex flex-col mt-5'>
          <label htmlFor='location' className="bg-black text-yellow-400 font-mono text-sm font-medium leading-6 text-start mb-3 p-2">Location: </label>
          <select className='w-52 border border-gray-700 rounded-md' onChange={handleLocationChange}>
            <option value={""} selected>Choose one. . .</option>
            <option value={"PAN"} >PAN</option> 
            <option value={"Bengaluru"} >Bengaluru</option>
            <option value={"Chennai"} >Chennai</option>
            <option value={"Hyderabad"} >Hyderabad</option> 
            <option value={"Pune"} >Pune</option> 
            <option value={"Punjab"} >Punjab</option> 
            <option value={"Mumbai"} >Mumbai</option> 
          </select>

          <label htmlFor='walk-in' className="bg-black text-yellow-400 font-mono leading-6 text-start mt-5 text-sm p-2">Walk-in: {" "}
          <input type='checkbox'  checked={isCheckedY} onChange={handleCheckboxY}/> Yes {" "}
          </label>


          <label htmlFor='location' className="bg-black text-yellow-400 font-mono text-sm font-medium leading-6 text-start  mt-3 mb-2 p-2">Freshness: </label>
          <select className='w-52 border border-gray-700 rounded-md' onChange={handleDayChange}>
            <option value={""} selected>Choose one. . .</option>
            <option value={"1"} >1 day</option>
            <option value={"3"} >3 days</option>
            <option value={"7"} >7 days</option>
            <option value={"15"} >15 days</option>
            <option value={"30"} >30 days</option>
          </select>


          <button title="*Remember to choose options correctly" onClick={handleFilterButton} className='bg-black text-yellow-400 transition-transform hover:scale-105 font-mono italic rounded-xl m-6 mt-6 p-2 '>Filter Go...</button>

          <button title="*Remember to choose options correctly" onClick={handleResetButton} className='bg-black text-yellow-400 transition-transform hover:scale-105 font-mono italic m-6 mt-0 p-2 rounded-xl '>Reset Table!</button>
       
            
        </div>
      
    </section>
  )
}





export default Jumbotron;