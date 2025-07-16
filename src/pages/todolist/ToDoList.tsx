import { useState } from "react";
import { Star, Trash2, CircleX, Check } from "lucide-react";
import MainTitle from "../../hooks/MainTitle";
import type { Task } from "../../types/Dashboard";

const initialTasks: Task[] = [
  { id: 1, title: "Meeting with CEO", completed: false, important: false },
  { id: 2,title: "Pick up kids from school",completed: false,important: true,  },
  { id: 3, title: "Shopping with Brother", completed: false, important: false },
  { id: 4, title: "Review with HR", completed: true, important: false },
  { id: 5, title: "Going to Dia’s School", completed: false, important: false },
  { id: 6, title: "Check design files", completed: false, important: true },
  { id: 7, title: "Update File", completed: false, important: false },
];

function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="To-Do List" />
        <button className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-[11px] px-[27px] transition-all duration-200 hover:shadow-md ">
          Add New Task
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center p-4 sm:p-8 rounded-xl border transition-all duration-200 ${
              task.completed
                ? "bg-[#4379EE] text-white "
                : "bg-[#FBFCFF] text-[#202224] border-[#D5D5D5]"
            }`}
          >
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleComplete(task.id)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                  task.completed
                    ? "bg-[#4379EE] border-white text-white]"
                    : "border-[#D5D5D5] hover:border-[#4379EE]"
                }`}
              >
                {task.completed && <Check size={14} strokeWidth={3} />}
              </button>

              <span className="text-sm font-medium">{task.title}</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-8">
              {task.completed ? (
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-1 rounded-xl bg-[#6C99FF] py-2 sm:py-[11px] px-4 sm:px-[22px] flex justify-center items-center"
                >
                  <Trash2 className="text-white" strokeWidth={1} size={17} />
                </button>
              ) : (
                <>
                  <button onClick={() => toggleImportant(task.id)}>
                    {task.important ? (
                      <Star
                        className="text-[#FFC700] fill-[#FFC700]"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Star
                        className="text-[#B3B3B3]"
                        strokeWidth={1}
                        size={24}
                      />
                    )}
                  </button>
                  <CircleX
                    className="text-[#B3B3B3]"
                    strokeWidth={1}
                    size={24}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoList;
