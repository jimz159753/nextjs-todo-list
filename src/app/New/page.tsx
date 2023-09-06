'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function New({ params }) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { id } = params

  const getTaskAPI = async () => {
    const res = await fetch(`/api/tasks/${id}`)
    const task = await res.json()
    setTitle(task.title)
    setDescription(task.description)
  }

  useEffect(() => {
    getTaskAPI()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    router.refresh()
    router.push('/tasks')
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-slade-800 flex flex-col w-1/4 space-y-2' onSubmit={onSubmit}>
        <label htmlFor="title">Title of the task</label>
        <input
          id='title'
          type="text"
          placeholder='Title'
          className='h-10 pl-2 text-black border border-gray-400 rounded'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description of the task</label>
        <textarea
          id='description'
          placeholder='Description'
          className='h-36 pl-2 text-black border border-gray-400 rounded'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {
          id ? <button className='h-10 w-3/6 bg-green-500 hover:bg-green-400 rounded'>Update</button> : <button className='h-10 w-3/6 bg-green-500 hover:bg-green-400 rounded'>Create</button>
        }
      </form>
    </div>
  )
}

export default New