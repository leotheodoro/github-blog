import { Link } from 'react-router-dom'
import { PostContainer } from './styles'

interface PostProps {
  id: number
  title: string
  body: string
  createdAt: string
}

export function Post({ id, title, body, createdAt }: PostProps) {
  return (
    <PostContainer>
      <div>
        <Link to={`/${id}`}>{title}</Link>
        <span>{createdAt}</span>
      </div>

      <p>{body}</p>
    </PostContainer>
  )
}
