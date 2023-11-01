import React, { useContext, useState } from 'react';
import { dataContext } from '../Providers/TableDataProvider';
import Jumbotron from './Jumbotron';
import { NavLink, Link } from 'react-router-dom';
import Media from './Media';

const Home = () => {

  const{odata,data} = useContext(dataContext);

  const[counter, setCounter] = useState(0);
  const rows = 5;
  const indexS = counter * rows;
  const indexE = indexS + rows;
  const pageData = data.slice(indexS, indexE);


  return (   
    <div className='flex lg:flex-row md:flex-row mt-20 sm:flex-col sm:ml-5 sm:mr-14 '>
    <Jumbotron />
    <section className=' flex-col mt-2 lg:ml-20 sm:ml-4'>

      <table className='bg-white  justify-center items-center '>
        <thead className='bg-black text-yellow-400 font-mono italic'>
          <tr>
            <th className='border-l-2 border-black p-6 text-center'>
              Date
            </th>
            <th className=' border-gray-300 p-6 text-center'>
              Company
            </th>
            <th className=' border-gray-300 p-6 text-center'>
              Profile
            </th>
            <th className=' border-gray-300 p-6 text-center'>
              Walk-in
            </th>
            <th className=' border-gray-300 p-6 text-center'>
              Location
            </th>
            <th className=' border-gray-300 p-6 text-center'>
              Link
            </th>
          </tr>
        </thead>

        {pageData.map((item) => {
        return (
        <tbody key={item.id} >
          <tr>
            <td className='border-r-2 border-b-2  border-l-2 border-gray-300 p-3 text-center'>
              {item.date}
            </td>
            <td className='border-r-2 border-b-2 border-gray-300 pl-5'>
              <img src={item.logo} className='w-16'/>
            </td>
            <td className='border-r-2 border-b-2 border-gray-300 p-3  text-center'>
              {item.profile}
            </td>
            {item.walkin === true ? (
            <td className='border-r-2 border-b-2 border-gray-300 p-3 text-center text-green-800'>
                Yes
            </td>
            ):(
            <td className='border-r-2 border-b-2 border-gray-300 p-3 text-center text-red-800'>
                No
              </td>)}
            
            <td className='border-r-2 border-b-2 border-gray-300 p-3 text-center'>
              {item.location}
            </td>

          <a href={item.link}  target='_blank' >
            <td className='border-b-2 border-r-2 border-gray-300 p-6 text-center font-mono italic hover:bg-green-200'>
              Apply
            </td>
          </a>

          </tr>
        </tbody>
        )
        })}
      </table>
      
          {/* PAGINATION */}
    
        <button onClick={() => {setCounter(counter - 1)}} className={
          counter < 1 ? 
          ('bg-black text-yellow-400 transition-transform hover:scale-105 hover:bg-slate-100 hover:text-black font-mono italic rounded-xl m-6 p-2 pl-11 pr-11  ml-48 ') 
          : 
          ('bg-black text-yellow-400 transition-transform hover:scale-105 font-mono italic rounded-xl m-6 p-2 pl-11 pr-11  ml-48') }
          disabled={counter < 1}>Prev
        </button>

          <span className='bg-slate-200 p-2 pl-4 pr-4 rounded-md'>{counter}</span>

      <button onClick={() => {setCounter(counter + 1)}} className={
        (counter === Math.floor(data.length / 5)) ?
        ('bg-black text-yellow-400 transition-transform hover:scale-105  hover:bg-slate-100 hover:text-black font-mono italic rounded-xl m-6 p-2 pl-11 pr-10 ml-42 ')
        :
        ('bg-black text-yellow-400 transition-transform hover:scale-105  font-mono italic rounded-xl m-6 p-2 pl-11 pr-10 ml-42') 
        }
        disabled={data.length/5 <= counter+1}>Next
      </button>
      
    
    </section>

    </div>
  )
}

export default Home