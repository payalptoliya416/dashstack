// Define interfaces for the data
export interface Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  attachments: number;
  comments: number;
  assignees: string[];
}

export interface Column {
  id: number;
  title: string;
  taskCount: number;
  borderColor: string;
  tasks: Task[];
}

export const kanbanData: Column[] = [
  {
    id: 1,
    title: "To Do",
    taskCount: 3,
    borderColor: "#499DFF",
    tasks: [
      {
        id: 101,
        title: "Design Landing Page",
        description: "Create a visually appealing landing page for the website.",
        tags: ["primary", "danger"],
        dueDate: "25 Mar, 2024",
        attachments: 3,
        comments: 4,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
        ],
      },
      {
        id: 102,
        title: "Develop Prototype",
        description: "Start developing a prototype based on the approved wireframes.",
        tags: ["primary", "success"],
        dueDate: "30 Mar, 2024",
        attachments: 4,
        comments: 5,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
          "/images/recent4.png",
          "/images/recent5.png",
        ],
      },
      {
        id: 103,
        title: "Review Wireframes",
        description: "Review and provide feedback on the wireframes for the new feature.",
        tags: ["warning"],
        dueDate: "28 Mar, 2024",
        attachments: 4,
        comments: 5,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    taskCount: 2,
    borderColor: "#25b865",
    tasks: [
      {
        id: 201,
        title: "Code Review",
        description: "Perform a code review for the recent changes in the backend.",
        tags: ["warning", "success"],
        dueDate: "21 Mar, 2024",
        attachments: 5,
        comments: 6,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
          "/images/recent4.png",
          "/images/recent5.png",
        ],
      },
      {
        id: 202,
        title: "UI Testing",
        description: "Conduct UI testing to ensure a seamless user experience.",
        tags: ["info", "dark"],
        dueDate: "20 Mar, 2024",
        attachments: 4,
        comments: 8,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
          "/images/recent4.png",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Submitted",
    taskCount: 3,
    borderColor: "#e49e3d",
    tasks: [
      {
        id: 301,
        title: "Release Version 1.0",
        description: "Prepare and release version 1.0 of the software.",
        tags: ["danger", "warning"],
        dueDate: "27 Mar, 2024",
        attachments: 2,
        comments: 4,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
        ],
      },
      {
        id: 302,
        title: "Write Release Notes",
        description: "Draft release notes highlighting the new features and improvements.",
        tags: ["success", "primary"],
        dueDate: "25 Mar, 2024",
        attachments: 5,
        comments: 4,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
        ],
      },
      {
        id: 303,
        title: "Investigate Server Outage",
        description: "Investigate the recent server outage and address the root cause.",
        tags: ["info", "danger"],
        dueDate: "25 Mar, 2024",
        attachments: 2,
        comments: 4,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Completed",
    taskCount: 2,
    borderColor: "#499DFF",
    tasks: [
      {
        id: 401,
        title: "Client Meeting",
        description: "Schedule a client meeting to discuss project status and requirements.",
        tags: ["success"],
        dueDate: "26 Mar, 2024",
        attachments: 3,
        comments: 7,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
          "/images/recent4.png",
        ],
      },
      {
        id: 402,
        title: "Awaiting Feedback",
        description: "Awaiting client feedback on the proposed design changes.",
        tags: ["primary"],
        dueDate: "22 Mar, 2024",
        attachments: 3,
        comments: 5,
        assignees: [
          "/images/recent1.png",
          "/images/recent2.png",
          "/images/recent3.png",
        ],
      },
    ],
  },
];