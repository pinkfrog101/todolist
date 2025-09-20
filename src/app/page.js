'use client'
import React, { useState } from 'react'

const Page = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [alltasks, setAllTasks] = useState([])

  const Handler = (e) => {
    e.preventDefault()
      setAllTasks([...alltasks, {task, desc}])
      setTask("")
      setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...alltasks]
    copyTask.splice(i, 1)
    setAllTasks(copyTask)
  }

  let renderTask = (
    <div className="text-center py-12">
      <h2 className="text-2xl text-pink-400 font-light">No tasks available</h2>
      <p className="text-pink-300 mt-2">Add your task!</p>
    </div>
  )

  if (alltasks.length > 0) {
    renderTask = alltasks.map((t, i) => {
      return (
        <li key={i} className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-pink-800 mb-2">
                {t.task}
              </h3>
              <p className="text-pink-600 leading-relaxed">
                {t.desc}
              </p>
            </div>
            <button 
              onClick={() => deleteHandler(i)}
              className="ml-4 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md transform hover:scale-105 font-medium"
            >
              Delete
            </button>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">
            TO DO LIST
          </h1>
          <p className="text-pink-500 text-lg font-light">Stay organized</p>
        </div>

        
        <form className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200 mb-8">
          <div className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Enter your task" 
                className="w-full px-6 py-4 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-200 text-pink-800 placeholder-pink-400 bg-pink-50/50"
                value={task} 
                onChange={e => setTask(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Enter description" 
                className="w-full px-6 py-4 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-200 text-pink-800 placeholder-pink-400 bg-pink-50/50"
                value={desc} 
                onChange={e => setDesc(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button 
                onClick={Handler}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                ➕ Add Task
              </button>
            </div>
          </div>
        </form>

        {/* Tasks List */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">
            Your Tasks ({alltasks.length})
          </h2>
          <ul className="space-y-4">
            {renderTask}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page