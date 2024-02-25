import { useState } from 'react'
import SearchBox from './SearchBox'
import TaskActions from './TaskActions'
import TaskLists from './TaskLists'
import AddTaskModal from './AddTaskModal'
import NoTaskFound from './NoTaskFound'

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
  const [taskToEdit, setTaskToEdit] = useState(null)
  const handleAddEditTask = (newtask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newtask])
    } else {
      setTasks(tasks.map((task) => (task.id === newtask.id ? newtask : task)))
    }
    setAddModal(false)
  }

  const handleEditTask = (task) => {
    setTaskToEdit(task)
    setAddModal(true)
  }

  const handleCloseClick = (e) => {
    setTaskToEdit(null)
    setAddModal(false)
  }

  const handleDelete = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id != taskId)
    setTasks(tasksAfterDelete)
  }

  const handleDeleteAllClick = () => {
    tasks.length = 0
    setTasks([...tasks])
  }

  const handleClickonFavorite = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isFavourite = !task.isFavourite
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setTasks(...filteredTasks)
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToEdit={taskToEdit}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="flex justify-end p-2">
          <SearchBox getSearchTerm={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => {
              setAddModal(true)
            }}
            onDeleteAllClick={handleDeleteAllClick}
          />
          {tasks.length === 0 ? (
            <NoTaskFound />
          ) : (
            <TaskLists
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDelete}
              clickOnFavorite={handleClickonFavorite}
            />
          )}
        </div>
      </div>
    </section>
  )
}
