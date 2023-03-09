import { Header } from './components/Header';
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:"//images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Mark Thomas",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Hello guys 👋", },
      { type: "paragraph", content: "I've just uploaded my portfolio. It's a project I built during NLW Return. Project: DoctorCare 🚀" },
      { type: "link", content: "mark.design/doctorcare" },
    ],
    publishedAt: new Date("03-01-2023 2:00:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Rebecca-Collins.png",
      name: "Rebecca Collins",
      role: "Full-Stack Web Developer"
    },
    content: [
      { type: "paragraph", content: "Hello guys 👋", },
      { type: "paragraph", content: "I've just uploaded a new project. I built it using React and Typescript. Project: BestBite 🚀" },
      { type: "link", content: "rc.design/bestbite" },
    ],
    publishedAt: new Date("03-01-2023 2:00:00")
  },
];


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
               post={post}
              />
            )
          })}
        </main>
      </div>
    </div>)
}



export default App;


