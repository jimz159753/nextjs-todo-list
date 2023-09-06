'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface ITask {
  task: {
    id: number
    title: string
    description?: string
    createdAt: string
  }
}

function Task({ task }: ITask) {
  const router = useRouter()
  return (
    <div className='bg-slate-500 flex flex-col justify-center items-center space-y-4 rounded pt-5'>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      <div className='flex justify-between w-full'>
        <button className='h-10 w-3/6 bg-orange-500 hover:bg-orange-400 rounded'
          onClick={() => {
            router.push('/add')
          }}
        >Update</button>
        <button className='h-10 w-3/6 bg-red-500 hover:bg-red-400 rounded'
          onClick={async () => {
            const res = await fetch(`/api/tasks/${task.id}`, {
              method: 'DELETE',
            })
            const data = await res.json()
            console.log(data)
            router.refresh()
          }}
        >Delete</button>
      </div>
    </div>
  )
}

export default Task