import imageSocial from "../../assets/images/social-project.jpg"
import imageTodo from "../../assets/images/todo-project.jpg"
import imageClock from "../../assets/images/clock-project.jpg"

export const arrProjects = [
  {
    id: 1,
    theme: "Sotial Network",
    image: imageSocial,
    href: "https://vkv.pp.ua/",
    description:
      "The project is a social network developed using React and Redux libraries (Thunk, Axios, Saga, graphics).",
  },
  {
    id: 2,
    theme: "Organizer",
    image: imageTodo,
    href: "https://vasiliev.netlify.app/",
    description:
      "In the organizer project, the data comes from the server. Implemented authorization with saving cards on the backend.",
  },
  {
    id: 3,
    theme: "Online Workshop",
    image: imageClock,
    href: "https://clockwise.vkv.pp.ua/",
    description: "The application is a service platform with server-side logic and a database.",
  },
]
