/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-07-17 23:10:36
 * @LastEditTime: 2021-07-19 00:28:24
 * @FilePath: \zhLeon_Frontend\react-hook\src\App.js
 */

import React, { useState } from 'react';
import CComponent from './CComponent';
import FComponent from './FComponent';

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div className="text-center font-bold divide-y divide-blue-400 pt-10">
      {/* name module */}
      <div className="p-10 space-y-6">

        <button type="button" className="w-72 h-16 items-flex justify-center rounded-lg bg-blue-500 text-white text-xl"
          onClick={() => setFlag(!flag)}
        >
          {/* Toggle Class Component */}
          Toggle Funcional Component
        </button>

        <div className="pb-6 text-3xl">{flag ? <FComponent /> : ""}</div>
      </div>
    </div>
  )
}


export default App;
