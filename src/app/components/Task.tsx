import React from 'react'


interface ITask {
  task: {
    title: string
    description?: string
    createdAt: string
  }
}

function Task({ task }: ITask) {
  return (
    <div className='bg-slate-500 flex flex-col justify-center items-center space-y-4 hover:bg-slate-400 rounded p-5'>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default Task