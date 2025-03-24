import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import reactLogo from './assets/images/react.svg';
import ReduxLogo from './assets/images/redux.svg';
import TailwindLogo from './assets/images/tailwind.svg';
import viteLogo from '/vite.svg';

import './assets/styles/App.css';

import { addCount, subCount, resetCount } from './store/actions/counterAction'


function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className=" justify- items-center">
      <div className="flex space-x-4">
        <span className="text-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo vite w-36 h-36" alt="Vite logo" />
          </a>
          <h1 className="text-lg font-bold">Vite</h1>
        </span>
        <span className="text-center">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react w-36 h-36" alt="React logo" />
          </a>
          <h1 className="text-lg font-bold">React</h1>
        </span>
        <span className="text-center">
          <a href="https://tailwindcss.com/" target="_blank">
            <img src={TailwindLogo} className="logo w-[180px] h-36" alt="Tailwind logo" />
          </a>
          <h1 className="text-lg font-bold">Tailwind</h1>
        </span>
        <span className="text-center">
          <a href="https://redux.js.org/" target="_blank">
            <img src={ReduxLogo} className="logo w-36 h-36" alt="Redux logo" />
          </a>
          <h1 className="text-lg font-bold">Redux</h1>
        </span>
      </div>

      <div className="mt-8 card">
        <div className="count space-x-4">
          <button onClick={() => dispatch(subCount())} className="rounded-xl font-">-</button>

          <button
            className="bg-gray-900 text-white px-4 py-2 rounded"
            onClick={() => dispatch(resetCount())}
          >
            Count is {count}
          </button>

          <button onClick={() => dispatch(addCount())} className="">+</button>
        </div>


        <div className='mt-4  rounded-lg shadow-md p-4 hover:shadow-lg '>
          <h1 className='text-lg font-bold'>Developer/s</h1>
          <a
            target="_blank"
            className='developer'
            href="https://github.com/stephen-nene"
          >
            <img
              className='rounded-full  hover:ring-4 hover:ring-rose-500 w-32 h-32 inline-block mr-2 shadow-lg'
              alt='Stephen Nene'
              src="https://avatars.githubusercontent.com/u/117808334?v=4"
            />
          </a>
          <p>Stephen-nene</p>
        </div>


      </div>
      <p className="mt-8 text-gray-500">
        Click on the logos to learn more
      </p>

    </div>
  );
}

export default App;
