import { Header } from "./Header"
import { Post, PostType } from "./Post"
import { Sidebar } from "./Sidebar";

import styles from "./App.module.css";

import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Kaique k",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dr sit amet consectetur adipisicing elit. Quae pariatur explicabo similique dolorum, numquam voluptas facere modi sapiente quo tempore dolor nesciunt ducimus libero praesentium perspiciatis consequuntur suscipit eaque quis."},
      { type: "paragraph", content: "Lorem ipsum dolorrrrr sit amet consectetur adipisicing elit. Quae pariatur explicabo similique dolorum, numquam voluptas facere modi sapiente quo tempore dolor nesciunt ducimus libero praesentium perspiciatis consequuntur suscipit eaque quis."},
      { type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-03 13:51:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Mariana Serra",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor s amet consectetur adipisicing elit. Quae pariatur explicabo similique dolorum, numquam voluptas facere modi sapiente quo tempore dolor nesciunt ducimus libero praesentium perspiciatis consequuntur suscipit eaque quis."},
      { type: "paragraph", content: "Lorem ipsum dolor sitor amet consectetur adipisicing elit. Quae pariatur explicabo similique dolorum, numquam voluptas facere modi sapiente quo tempore dolor nesciunt ducimus libero praesentium perspiciatis consequuntur suscipit eaque quis."},
      { type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-03 12:01:00"),
  },
];

export function App() {
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
    </div>
  )
}
