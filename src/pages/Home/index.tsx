import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostsContainer, PostsList } from './styles'

const postData = {
  title: 'JavaScript data types and data structures',
  created_at: 'Há 1 dia',
  body: `Programming languages all have built-in data structures, but these often
  differ from one language to another. This article attempts to list the
  built-in data structures available in JavaScript and what properties
  they have. These can be used to build other data structures. Wherever
  possible, comparisons with other languages are drawn.`,
}

export function Home() {
  return (
    <>
      <Header />
      <Profile />

      <PostsContainer>
        <SearchForm />
        <PostsList>
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
          <Post
            id={Math.ceil(Math.random() * 999)}
            body={postData.body}
            createdAt={postData.created_at}
            title={postData.title}
          />
        </PostsList>
      </PostsContainer>
    </>
  )
}
