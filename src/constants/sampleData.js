// import { create } from "@mui/material/styles/createTransitions";

export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "john doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Bhagyesh ",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "john doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Bhagyesh ",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "john doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Bhagyesh ",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Bappu ka msg hai",
    _id: "areee shreee ye shree",
    sender: {
      _id: "user._id",
      name: "Bappu",
    },
    chat: "chatId",
    createdAt: "2024-04-13T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "adasaf 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Arre shree ye shree are layana",
    _id: "kay mhnta kandu",
    sender: {
      _id: "user._id",
      name: "kandu ",
    },
    chat: "chatId",
    createdAt: "2024-04-13T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boe",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "vekheya Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },

    {
      name: "Kandu de lavda vekha",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Kandu ka msg aya hai ye shree",
      _id: "hvbhjbihbjgi",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Layna",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-04-12T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "adasaf 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "fvfdbdbfbth",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "shree",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-04-12T10:41:30.630Z",
    },
  ],
};
