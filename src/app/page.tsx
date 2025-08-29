import { getPosts } from '@/actions/apiCalls';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
