import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { UserContext } from '../../contexts/UserContext'
import { SearchForm } from './components/SearchForm'
import { PostsContainer, PostsList } from './styles'

export function Home() {
  const issues = useContextSelector(UserContext, (context) => context.issues)

  return (
    <>
      <Header />
      <Profile />

      <PostsContainer>
        <SearchForm />
        <PostsList>
          {issues &&
            issues.map((issue) => {
              return (
                <PostCard
                  key={issue.id}
                  id={issue.id}
                  body={issue.body}
                  createdAt={issue.created_at}
                  title={issue.title}
                  number={issue.number}
                />
              )
            })}
        </PostsList>
      </PostsContainer>
    </>
  )
}
