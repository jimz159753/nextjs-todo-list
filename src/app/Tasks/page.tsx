import React from 'react'
import Task from '@/app/components/Task'
import prisma from '@/libs/prisma'


const loadTasks = async () => {
  return await prisma.task.findMany()
}

async function Tasks() {
  const tasks = await loadTasks()
  return (
    <div className='grid grid-cols-5 gap-4 m-20'>
      {tasks?.map(task => <Task key={task.id} task={task} />)}
    </div>
  )
}

export default Tasks