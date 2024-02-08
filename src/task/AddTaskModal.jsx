import { useState } from 'react'
export default function AddTaskModal({ onSave, taskToEdit, onCloseClick }) {
  const [task, setTasks] = useState(
    taskToEdit || {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      tags: [],
      priority: '',
      isFavourite: false,
    },
  )

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === 'tags') {
      value = value.split(',')
    }
    setTasks({ ...task, [name]: value })
  }

  const [isAdd, setIsAdd] = useState(Object.is(taskToEdit, null))

  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-70"></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute left-1/3 top-1/4">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? 'Add New Task' : 'Edit Task'}
        </h2>

        <div className="text-white space-y-9 lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label for="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label for="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label for="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
                value={task.tags}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label for="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-16 lg:mt-20">
          <button
            className="px-4 py-2 text-white transition-all bg-red-600 rounded hover:opacity-80"
            onClick={onCloseClick}
          >
            Close
          </button>

          <button
            type="submit"
            className="px-4 py-2 text-white transition-all bg-blue-600 rounded hover:opacity-80"
            onClick={(e) => {
              e.preventDefault()
              onSave(task, isAdd)
            }}
          >
            {isAdd ? 'Add Task' : 'Update Task'}
          </button>
        </div>
      </form>
    </>
  )
}
