import { CalendarDays, EllipsisVertical, MessageSquareMore, Paperclip, Plus, Settings, SquarePen, Trash, Trash2, X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Dialog, DialogPanel, Menu, Transition } from "@headlessui/react";
import {  type Column, type Task } from "./KanbanData";
import { addTask, deleteColumn, deleteTask, emptyColumn, setSelectedColumn, setSelectedTask, updateColumn } from "../../redux/slice/kanbanSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import toast, { Toaster } from "react-hot-toast";

function Kanban() {
      const [isOpen, setIsOpen] = useState(false);
      const [isEditOpen, setIsEditOpen] = useState(false);
      const [isDelete, setIsDelete] = useState(false);
      const [isEmpty, setIsEMpty] = useState(false);
      const dispatch = useDispatch();
      const columns = useSelector((state: RootState) => state.kanban.columns);
        const selectedColumnId = useSelector(
        (state: RootState) => state.kanban.selectedColumnId
        );
    const selectedTask = useSelector((state: RootState) => {
    const taskId = state.kanban.selectedTaskId;
    return state.kanban.columns
        .flatMap(col => col.tasks.map(t => ({ ...t, columnId: state.kanban.columns.find(c => c.tasks.includes(t))?.id })))
        .find(task => task.id === taskId) || null;
    });

    const selectedColumn = useSelector((state: RootState) =>
    state.kanban.columns.find(c => c.id === state.kanban.selectedColumnId)
    );

    const [editTitle, setEditTitle] = useState("");
    const [editColor, setEditColor] = useState("primary");

    useEffect(() => {
    if (selectedColumn) {
        setEditTitle(selectedColumn.title);
        setEditColor(selectedColumn.borderColor); 
    }
    }, [selectedColumn]);

  return (
    <>
  
    <div className="flex justify-between items-center border-b border-gray-200 pb-5 flex-wrap sm:flex-nowrap gap-5 md:gap-1">
       <h1 className="text-2xl xl:text-[32px] font-bold">Kanban Board</h1>
      <div className="flex gap-2 items-center w-full sm:w-auto justify-end">
        <div className="flex items-center">
                <img src="/images/recent1.png" alt="" className="w-9 md:w-[43px] h-9 md:h-[43px] rounded-full outline-1 outline-white" />
                <img src="/images/recent2.png" alt="" className="w-9 md:w-[43px] h-9 md:h-[43px] rounded-full outline-1 outline-white -ms-3" />
                <img src="/images/recent3.png" alt="" className="w-9 md:w-[43px] h-9 md:h-[43px] rounded-full outline-1 outline-white -ms-3" />
                <img src="/images/recent4.png" alt="" className="w-9 md:w-[43px] h-9 md:h-[43px] rounded-full outline-1 outline-white -ms-3" />
                <img src="/images/recent5.png" alt="" className="w-9 md:w-[43px] h-9 md:h-[43px] rounded-full outline-1 outline-white -ms-3" />
        </div>
        <div className="border border-gray-200 rounded bg-[#f1f2f3] p-[10px]">
        <Settings size={14} />
        </div>
        <button className="flex items-center px-2 sm:px-5 py-2 gap-1 sm:gap-3 bg-[#3E97FF] rounded text-white text-[12px] sm:text-sm">
            <Plus size={18} /> Add Board
        </button>
      </div>
    </div>
  <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: '14px',
            marginTop:'30px'
          },
        }}
      />
       <div className="grid grid-cols-12"> 
        <div className="col-span-12">
     <div className="w-full overflow-x-auto my-7">
  <div className="flex gap-5 min-w-max">
         {columns.map((column: Column) => (
                  <div key={column.id}
                   onDragOver={(e) => e.preventDefault()} 
                    onDrop={(e) => {
                      const taskId = Number(e.dataTransfer.getData("taskId"));
                      const sourceColumnId = Number(e.dataTransfer.getData("sourceColumnId"));
                      
                      if (sourceColumnId === column.id) return; 

                      const sourceColumn = columns.find(c => c.id === sourceColumnId);
                      const task = sourceColumn?.tasks.find(t => t.id === taskId);
                      if (!task) return;

                      dispatch(deleteTask({ columnId: sourceColumnId, taskId }));

                      dispatch(addTask({ columnId: column.id, task }));

                      toast.success(`Task moved to "${column.title}"`);
                    }}
                    className="w-80 2xl:w-96 flex-shrink-0"
                  >
                    <div
                      className={`px-4 py-2 rounded-sm border-t-2 shadow-sm flex justify-between items-center mb-4`}
                      style={{ borderColor: column.borderColor }}
                    >
                      <h3 className="text-sm text-[#202224] font-semibold">
                        {column.title} ({column.taskCount})
                      </h3>
                      <div className="w-9 h-9 rounded-full hover:bg-[#EEF0F3] cursor-pointer transition-all duration-500 flex justify-center items-center">
                        <Menu as="div" className="relative inline-block text-left">
                          <Menu.Button className="inline-flex items-center justify-center rounded-full p-1.5 hover:bg-gray-100" aria-label="Open actions">
                            <EllipsisVertical size={16} />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-150"
                            enterFrom="opacity-0 scale-95 -translate-y-1"
                            enterTo="opacity-100 scale-100 translate-y-0"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100 scale-100 translate-y-0"
                            leaveTo="opacity-0 scale-95 -translate-y-1"
                          >
                            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right rounded-2xl bg-white shadow-lg focus:outline-none z-50">
                              <div className="p-[10px] border-b border-gray-200">
                                <Menu.Item>
                                  {({ active }) => (
                                    <div onClick={() => {
                                    dispatch(setSelectedColumn(column.id));
                                    setIsEditOpen(true);
                                }} className={`flex items-center gap-3 text-sm text-[#252F4A] py-[10px] px-4 cursor-pointer ${active ? "bg-gray-100" : ""}`}>
                                      <SquarePen size={16} /> Edit
                                    </div>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <div
                                    onClick={() => {
                                        dispatch(setSelectedColumn(column.id)); 
                                        setIsDelete(true);
                                    }}
                                    className={`flex items-center gap-3 text-sm text-[#252F4A] py-[10px] px-4 cursor-pointer ${active ? "bg-gray-100" : ""}`}
                                    >
                                    <Trash2 size={16} /> Delete
                                    </div>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <div
                                    onClick={() => {
                                        dispatch(setSelectedColumn(column.id)); 
                                        setIsEMpty(true);
                                    }}
                                    className={`flex items-center gap-3 text-sm text-[#252F4A] py-[10px] px-4 cursor-pointer ${active ? "bg-gray-100" : ""}`}
                                    >
                                    <Trash size={16} /> Empty
                                    </div>
                                )}
                                </Menu.Item>
                              </div>
                              <Menu.Item>
                                {({ active }) => (
                                  <div   onClick={() => {
                        const newTask: Task = {
                        id: Math.floor(Math.random() * 10000),
                        title: "New Task",
                        description: "Task description",
                        tags: ["primary"],
                        dueDate: "01 Aug, 2025",
                        attachments: 0,
                        comments: 0,
                        assignees: [
                            "/images/recent1.png",
                            "/images/recent2.png",
                            "/images/recent3.png",
                            "/images/recent4.png",
                            ],
                        };
                        dispatch(addTask({ columnId: column.id, task: newTask }));
                         toast.success("Task added successfully!");
                    }} className={`flex items-center gap-3 text-sm text-[#252F4A] py-3 px-4 cursor-pointer ${active ? "bg-gray-100" : ""}`}>
                                    <Plus size={18} /> Add Task
                                  </div>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
        
                  {column.tasks.map((task: Task) => (
                    <div
                        key={task.id}
                          draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData("taskId", task.id.toString());
                        e.dataTransfer.setData("sourceColumnId", column.id.toString());
                      }}
                         onClick={() => {
                        dispatch(setSelectedTask(task.id)); 
                        setIsOpen(true); 
                        }}
                        className="p-6 rounded-lg shadow-sm cursor-grab hover:shadow-md transition mb-4"
                    >
                        <h3 className="text-[#252F4A] text-sm font-bold mb-3">{task.title}</h3>
                        <p className="text-[#4B5675] text-sm mb-7">{task.description}</p>
                        <div className="grid grid-cols-2 gap-3 mb-7">
                        <div className="flex gap-1">
                            {task.tags.map((tag: string) => (
                            <button
                                key={tag}
                                className={`text-[11px] leading-[11px] py-[5px] px-[7px] rounded ${
                                tag === "primary"
                                    ? "bg-[#ecf5ff] text-[#3e97ff]"
                                    : tag === "danger"
                                    ? "bg-[#fbeff1] text-[#d13b4c]"
                                    : tag === "warning"
                                    ? "bg-[#fcf3e6] text-[#e49e3d]"
                                    : tag === "success"
                                    ? "bg-[#ebf8f0] text-[#25b865]"
                                    : tag === "info"
                                    ? "bg-[#e5f1ff] text-[#4d86c7]"
                                    : tag === "dark"
                                    ? "bg-[#e5e5e5] text-[#454545]"
                                    : ""
                                }`}
                            >
                                {tag}
                            </button>
                            ))}
                        </div>
                        <div className="flex text-[#6B7177] text-[11px] leading-[11px] gap-1 items-center justify-center">
                            <CalendarDays size={12} /> {task.dueDate}
                        </div>
                        </div>
                        <div className="flex justify-between gap-3 items-center">
                        <div className="flex items-center">
                            {task.assignees.map((assignee: string, index: number) => (
                            <img
                                key={index}
                                src={assignee}
                                alt=""
                                className={`w-[27px] h-[27px] rounded-full outline-1 outline-white ${
                                index > 0 ? "-ms-2" : ""
                                }`}
                            />
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <div className="text-sm text-[#6B7177]">
                            <Paperclip className="inline-block rotate-[317deg]" size={12} /> {task.attachments}
                            </div>
                            <div className="text-sm text-[#6B7177]">
                            <MessageSquareMore className="inline-block" size={12} /> {task.comments}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

                    <div
                    className="py-2 px-4 border border-gray-200 rounded flex justify-center mb-4 text-sm gap-5 text-[#4B5675] cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                        const newTask: Task = {
                        id: Math.floor(Math.random() * 10000),
                        title: "New Task",
                        description: "Task description",
                        tags: ["primary"],
                        dueDate: "01 Aug, 2025",
                        attachments: 0,
                        comments: 0,
                        assignees: [
                            "/images/recent1.png",
                            "/images/recent2.png",
                            "/images/recent3.png",
                            "/images/recent4.png",
                            ],
                        };
                        dispatch(addTask({ columnId: column.id, task: newTask }));
                         toast.success("Task added successfully!");
                    }}
                    >
                    <Plus size={18} className="text-[#4B5675]" /> Add Task
                    </div>
                  </div>
         ))}
      </div>
      </div>
      </div>
        </div>
     
        <Dialog
        open={isOpen}
        onClose={() => {
            setIsOpen(false);
            dispatch(setSelectedTask(null)); 
        }}
        className="relative z-[99999]"
        >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="mx-auto rounded-lg bg-white shadow-lg w-xl">
            {selectedTask ? (
                <>
                <div className="p-6 flex justify-between border-b border-gray-200">
                    <div className="flex gap-2 items-center">
                    <h2 className="text-xl">{selectedTask.title}</h2>
                    <div className="flex gap-1">
                        {selectedTask.tags.map((tag) => (
                        <button
                            key={tag}
                            className={`text-[11px] leading-[11px] py-[5px] px-[7px] rounded uppercase ${
                            tag === "primary"
                                ? "bg-[#ecf5ff] text-[#3e97ff]"
                                : tag === "danger"
                                ? "bg-[#fbeff1] text-[#d13b4c]"
                                : tag === "warning"
                                ? "bg-[#fcf3e6] text-[#e49e3d]"
                                : tag === "success"
                                ? "bg-[#ebf8f0] text-[#25b865]"
                                : tag === "info"
                                ? "bg-[#e5f1ff] text-[#4d86c7]"
                                : tag === "dark"
                                ? "bg-[#e5e5e5] text-[#454545]"
                                : ""
                            }`}
                        >
                            {tag}
                        </button>
                        ))}
                    </div>
                    </div>
                    <X
                    className="text-[#B9BEC2] cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    />
                </div>

                <div className="p-6 border-b border-gray-200">
                    <p className="mb-4 text-sm text-[#4B5675]">{selectedTask.description}</p>

                    <div className="flex items-center gap-2 mb-5">
                    <p className="text-[#4B5675] text-sm">Assigned:</p>
                    <div className="flex items-center">
                        {selectedTask.assignees.map((assignee, index) => (
                        <img
                            key={index}
                            src={assignee}
                            alt=""
                            className={`w-[27px] h-[27px] rounded-full outline-1 outline-white ${
                            index > 0 ? "-ms-2" : ""
                            }`}
                        />
                        ))}
                    </div>
                    </div>

                    <div className="flex gap-1 mb-5">
                    <p className="text-[#4B5675] text-sm">Due Date:</p>
                    <div className="flex text-[#D13B4B] text-[11px] leading-[11px] gap-1 items-center justify-center">
                        <CalendarDays size={12} /> {selectedTask.dueDate}
                    </div>
                    </div>

                    <div className="flex gap-4">
                    <div className="text-sm text-[#6B7177]">
                        <Paperclip className="inline-block rotate-[317deg]" size={12} /> {selectedTask.attachments} Attachments
                    </div>
                    <div className="text-sm text-[#6B7177]">
                        <MessageSquareMore className="inline-block" size={12} /> {selectedTask.comments} Comments
                    </div>
                    </div>
                </div>

                <div className="p-6 flex justify-between">
                    <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="checkmark"
                        className="appearance-none w-5 h-5 rounded bg-[#EEF0F3] border-none cursor-pointer
                                checked:bg-[#4CAF50] checked:before:content-['✔'] 
                                checked:before:text-white checked:before:flex checked:before:items-center 
                                checked:before:justify-center checked:before:h-full checked:before:w-full"
                    />
                    <label htmlFor="checkmark" className="text-[#4B5675] text-sm cursor-pointer">
                        Make as complete
                    </label>
                    </div>
                    <div className="flex gap-3 items-center">
                    <button
                        className="text-[#D13B4C] py-2 px-5 rounded text-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                    <button className="text-white bg-[#D13B4C] py-2 px-5 rounded text-sm"  onClick={() => {
                    if (selectedTask.columnId != null) {
                        dispatch(deleteTask({ columnId: selectedTask.columnId, taskId: selectedTask.id }));
                    }
                    setIsOpen(false);
                    dispatch(setSelectedTask(null));
                       toast.success("Column deleted successfully!");
                    }}>
                        Delete
                    </button>
                    </div>
                </div>
                </>
            ) : (
                <p className="p-6 text-center text-sm text-gray-500">No task selected</p>
            )}
            </DialogPanel>
        </div>
        </Dialog>
        <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} className="relative z-[99999]">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="mx-auto rounded-lg bg-white shadow-lg w-xl">
            <div className="p-6 flex justify-between border-b border-gray-200">
                <h2 className="text-xl font-bold">Edit To Do</h2>
                <X className="text-[#B9BEC2] cursor-pointer" onClick={() => setIsEditOpen(false)} />
            </div>

            <div className="p-6 border-b border-gray-200">
                <div className="mb-6">
                <label className="text-sm text-[#4B5675] block mb-2">Title</label>
                <input
                    type="text"
                    className="border border-gray-200 rounded px-3 py-2 w-full text-sm"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="To Do"
                />
                </div>

                <div>
                <label className="text-sm text-[#4B5675] block mb-2">Color</label>
                <select
                    className="border border-gray-200 rounded px-3 py-2 w-full text-sm"
                    value={editColor}
                    onChange={(e) => setEditColor(e.target.value)}
                >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                    <option value="dark">Dark</option>
                </select>
                </div>
            </div>

            <div className="flex gap-3 items-center justify-end p-5">
                <button
                className="text-[#D13B4C] py-2 px-5 rounded text-sm"
                onClick={() => setIsEditOpen(false)}
                >
                Close
                </button>
                <button
                className="text-white bg-[#3E97FF] py-2 px-5 rounded text-sm"
                onClick={() => {
                    if (!selectedColumn) return;

                    // Map dropdown value to actual border color
                    const colorMap: Record<string, string> = {
                    primary: "#499DFF",
                    secondary: "#9CA3AF",
                    success: "#25B865",
                    danger: "#D13B4C",
                    warning: "#E49E3D",
                    info: "#4D86C7",
                    dark: "#454545",
                    };

                    dispatch(
                    updateColumn({
                        ...selectedColumn,
                        title: editTitle,
                        borderColor: colorMap[editColor],
                    })
                    );

                    setIsEditOpen(false);
                    dispatch(setSelectedColumn(null));
                     toast.success("Column edit successfully");
                }}
                >
                Save Changes
                </button>
            </div>
            </DialogPanel>
        </div>
        </Dialog>

       <Dialog open={isDelete} onClose={() => setIsDelete(false)} className="relative z-[99999]">
  <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <DialogPanel className="mx-auto rounded-lg bg-white shadow-lg w-xl">
      <div className="p-6 text-center">
        <div className="w-[76px] h-[76px] border-3 border-[#facea8] rounded-full flex justify-center items-center mx-auto">
          <h2 className="text-[#f8bb86] text-6xl">!</h2>
        </div>
        <h3 className="text-xl font-semibold text-[#252F4A] mb-3 pt-10">Are you sure?</h3>
        <p className="text-sm text-[#6B7177]">
          You are about to delete the column. This action cannot be undone.
        </p>
        <div className="flex gap-3 items-center justify-center pt-4 pb-3">
          <button
            className="px-[15px] py-2 text-white rounded text-sm bg-[#3E97FF]"
            onClick={() => {
      if (selectedColumnId !== null) {
        dispatch(deleteColumn(selectedColumnId));
        dispatch(setSelectedColumn(null)); 
        setIsDelete(false);
           toast.success("Column deleted successfully!");
      }
    }}
          >
            Yes, Delete it!
          </button>
          <button
            className="px-[15px] py-2 text-white rounded text-sm bg-[#3E97FF]"
            onClick={() => setIsDelete(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </DialogPanel>
  </div>
     </Dialog>

       <Dialog open={isEmpty} onClose={() => setIsEMpty(false)} className="relative z-[99999]">
  <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <DialogPanel className="mx-auto rounded-lg bg-white shadow-lg w-xl">
      <div className="p-6 text-center">
        <div className="w-[76px] h-[76px] border-3 border-[#facea8] rounded-full flex justify-center items-center mx-auto">
          <h2 className="text-[#f8bb86] text-6xl">!</h2>
        </div>
        <h3 className="text-xl font-semibold text-[#252F4A] mb-3 pt-10">Are you sure?</h3>
        <p className="text-sm text-[#6B7177]">
          You are about to delete all tasks in this column. This action cannot be undone.
        </p>
        <div className="flex gap-3 items-center justify-center pt-4 pb-3">
          <button
            className="px-[15px] py-2 text-white rounded text-sm bg-[#3E97FF]"
             onClick={() => {
      if (selectedColumnId !== null) {
        dispatch(emptyColumn(selectedColumnId));
        setIsEMpty(false);
        dispatch(setSelectedColumn(null)); 
        toast("Column emptied!", { icon: "🗑️" })
      }
    }}
          >
            Yes, Delete all tasks!
          </button>
          <button
            className="px-[15px] py-2 text-white rounded text-sm bg-[#3E97FF]"
            onClick={() => setIsEMpty(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </DialogPanel>
  </div>
       </Dialog>

    </>
  )
}

export default Kanban
