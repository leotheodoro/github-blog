import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostsContainer, PostsList } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Profile />

      <PostsContainer>
        <SearchForm />
        <PostsList>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsList>
      </PostsContainer>
    </>
  )
}
