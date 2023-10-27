import React, { useContext } from 'react';
import { dataContext } from '../Providers/TableDataProvider';
import Jumbotron from './Jumbotron';
// import { tableDataContext } from '../Context/tableDataContext';

const Home = () => {

  const{data} = useContext(dataContext);


  return (   
    <div className='h-auto'>
    <section className='flex flex-row'>
      <Jumbotron />
      <table className='border-2 m-8 justify-center items-center ml-16'>
        <thead className='bg-black text-yellow-400 font-mono italic'>
          <tr>
            <th className=' border-gray-300 p-6 text-center' >
              ID
            </th>
            <th className='border-l-2 border-gray-300 p-6 text-center'>
              Title
            </th>
            <th className='border-l-2 border-gray-300  p-6 text-center'>
              Walk-in
            </th>
            <th className='border-l-2 border-gray-300 p-6 text-center'>
              Location
            </th>
            <th className='border-l-2 border-gray-300  p-6 text-center'>
              Link
            </th>
          </tr>
        </thead>

        {data.map((item) => {
        return (
        <tbody key={item.id} >
          <tr>
            <td className='border-t-2 border-gray-300 p-3 text-center'>
              {item.id}
            </td>
            <td className='border-t-2 border-l-2 border-gray-300 p-3  text-center'>
              {item.title}
            </td>
            {item.walkin === true ? (
              <td className='border-t-2 border-l-2 border-gray-300 p-3 text-center text-green-800'>
                Yes
              </td>
            ):
            <td className='border-t-2 border-l-2 border-gray-300 p-3 text-center text-red-800'>
                No
              </td>}
            
            <td className='border-t-2 border-l-2 border-gray-300 p-3 text-center'>
              {item.location}
            </td>
            <td>
              <button className='border-t-2 border-l-2 border-gray-300 p-3 text-center font-mono italic hover:bg-green-200'>apply</button>
            </td>
          </tr>
        </tbody>
        )
        })}
      </table>
    </section>
    </div>
  )
}

export default Home