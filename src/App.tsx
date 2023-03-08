import { Header } from './components/Header';
import { Post } from "./components/Post";

import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"//images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      nome: "Zimarlen Silva",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Hello guys 👋", },
      { type: "paragraph", content: "I've just uploaded my portfolio. It's a project I built during NLW Return. Project: DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("03-01-2023 2:00:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Rebecca-Collins.png",
      nome: "Rebecca Collins",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Hello guys 👋", },
      { type: "paragraph", content: "I've just uploaded my portfolio. It's a project I built during NLW Return. Project: DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
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
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>)
}



export default App;

