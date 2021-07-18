/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-07-17 23:10:36
 * @LastEditTime: 2021-07-18 21:40:37
 * @FilePath: \react-hook\src\App.js
 */

import React, { useState } from 'react';

function initialValue() {
  console.log("这是我需要操作的函数，只执行一次吧？？")
}

function App() {
  const [name, setName] = useState("zhLeon")
  const [flag, setFlag] = useState(false)
  // const [number, setNumber] = useState(0)

  // 这个函数只会被调用一次。
  // 有只有一次的操作的时候，可以在这里进行，可以避免繁重的操作！比如initialValue()
  // 然后在后面进行初始值设置

  const [number, setNumber] = useState(() => {
    initialValue()
    return 0;
  })
  const [names, setNames] = useState([])

  function changeName() {
    console.log("clicked!! changeName")
    // return setName("Blueheart")
    return setFlag(!flag)
  }

  function increment() {
    console.log("clicked!! increment")
    // return setNumber(number + 1)
    setNumber((preNumber) => preNumber + 1)
    setNumber((preNumber) => preNumber + 1)
  }
  function decrement() {
    console.log("clicked!! decrement")
    return setNumber(number - 1)
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }])
    setName("")

  }

  return (
    <div className="text-center font-bold divide-y divide-blue-400 pt-10">
      {/* name module */}
      <div className="p-10">
        <div className="pb-6 text-3xl">Hello, {flag ? name : "Blueheart"}</div>
        <button type="button" className="w-32 h-10 items-flex justify-center rounded-lg bg-blue-500 text-white "
          onClick={changeName}
        >
          Change it
        </button>
      </div>

      {/* number module */}
      <div className="p-10">
        <div className="pb-6 text-3xl">{number}</div>
        <div className="space-x-4 items-flex justify-center">
          <button type="button" className="w-20 h-10  rounded-lg bg-blue-500 text-white "
            onClick={increment}
          >
            +
          </button>
          <button type="button" className="w-20 h-10 rounded-lg bg-blue-500 text-white "
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>

      {/* form module */}
      <div className="p-10">
        <form className="space-x-4">
          <input className="w-1/2 h-10 rounded-lg border-2 border-blue-500 space-x-4"
            type="text" value={name} placeholder="Input names" onChange={(e) => setName(e.target.value)}
          />
          <button onClick={addNames}
            type="button" className="w-20 h-10 rounded-lg bg-blue-500 text-white ">Submit</button>
        </form>
        <div className="p-10">
          <ul>
            {names.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>


      </div>







    </div >

  );
}

export default App;
