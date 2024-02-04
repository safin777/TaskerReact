import { useState } from 'react'
import SearchBox from './SearchBox'
import TaskActions from './TaskActions'
import TaskLists from './TaskLists'
import AddTaskModal from './AddTaskModal'

export default function TaksBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: 'Integration API',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    tags: ['API', 'Database', 'Security'],
    priority: 'High',
    isFavourite: true,
  }
  const [tasks, setTasks] = useState([defaultTask])
  const [showAddModal, setAddModal] = useState(false)
  const handleAddTask = (task) => {
    setTasks([...tasks, task])
    setAddModal(false)
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave ={handleAddTask} />}
      <div className="container">
        <div className="flex justify-end p-2">
          <SearchBox />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => {
              setAddModal(true)
            }}
          />
          <TaskLists tasks={tasks} />
        </div>
      </div>
    </section>
  )
}
