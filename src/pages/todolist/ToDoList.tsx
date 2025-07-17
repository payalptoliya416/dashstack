import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Star, Trash2, CircleX, Check } from "lucide-react";
import MainTitle from "../../hooks/MainTitle";
import {
  addTask,
  toggleComplete,
  toggleImportant,
  deleteTask,
} from "../../redux/slice/taskSlice";
import type { AppDispatch, RootState } from "../../redux/store";

function ToDoList() {
  const tasks = useSelector((state: RootState) => state.tasks);
  console.log("tasks",tasks)
  const dispatch = useDispatch<AppDispatch>();

  const [showInput, setShowInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
 
 const handleButtonClick = () => {
  if (!showInput) {
    setShowInput(true); 
  } else {
    if (!taskTitle.trim()) return;
    dispatch(addTask(taskTitle.trim()));
    setTaskTitle("");
    setShowInput(false); 
  }
};

  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="To-Do List" />
        <button
          onClick={handleButtonClick}
          className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-[11px] px-[27px] transition-all duration-200 hover:shadow-md"
        >
         {showInput ? "Save":" Add New Task "}
        </button>
      </div>

      {showInput && (
        <div className="border border-[#D5D5D5]/60 rounded-xl bg-[#FBFCFF] py-[28px] px-8 mb-6 flex gap-4 items-center">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Write your task name here"
            className="w-[435px] py-2 px-4 rounded-md border border-[#D5D5D5]/60 bg-[#F5F6FA]"
          />
        </div>
      )}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center p-4 sm:p-8 rounded-xl border transition-all duration-200 ${
              task.completed
                ? "bg-[#4379EE] text-white"
                : "bg-[#FBFCFF] text-[#202224] border-[#D5D5D5]/60"
            }`}
          >
            <div className="flex items-center gap-6">
              <button
                onClick={() => dispatch(toggleComplete(task.id))}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                  task.completed
                    ? "bg-[#4379EE] border-white text-white"
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
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="cursor-pointer p-1 rounded-xl bg-[#6C99FF] py-2 sm:py-[11px] px-4 sm:px-[22px] flex justify-center items-center"
                >
                  <Trash2 className="text-white" strokeWidth={1} size={17} />
                </button>
              ) : (
                <>
                  <button onClick={() => dispatch(toggleImportant(task.id))}>
                    <Star
                      className={
                        task.important
                          ? "text-[#FFC700] fill-[#FFC700] cursor-pointer"
                          : "text-[#B3B3B3] cursor-pointer"
                      }
                      strokeWidth={1.5}
                      size={24}
                    />
                  </button>
                  <CircleX
                          onClick={() => dispatch(deleteTask(task.id))}
                    className="text-[#B3B3B3] cursor-pointer"
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
