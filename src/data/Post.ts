import { PostType } from "../components/Post/Post";

export const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/CarlosDanielss.png",
      name: "Carlos Daniel",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ian Dooley",
      role: "Photograph",
    },
    content: [
      {
        type: "paragraph",
        content: "Opa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um book de fotos. É um projeto que fiz no unsplash.",
      },
      {
        type: "link",
        content: "unsplash.com",
      },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1712007426396-08068359b6c7?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kazuo ota",
      role: "Artist",
    },
    content: [
      {
        type: "paragraph",
        content: "Olá!",
      },
      {
        type: "paragraph",
        content: "Acabei de compartilhar um book de fotos.",
      },
      {
        type: "link",
        content: "unsplash.com",
      },
    ],
    publishedAt: new Date("2023-08-14 20:00:00"),
  },
  {
    id: 4,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1712107062961-4a758df77267?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Khaled Ali",
      role: "Model",
    },
    content: [
      {
        type: "paragraph",
        content: "Oii",
      },
      {
        type: "paragraph",
        content:
          "Tem algumas novidades vindo, posso adiantar que o trabalho vai ser no texas.",
      },
      {
        type: "link",
        content: "unsplash.com",
      },
    ],
    publishedAt: new Date("2024-02-19 20:00:00"),
  },
];
