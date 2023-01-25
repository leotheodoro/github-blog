import { Link } from 'react-router-dom'
import { PostCardContainer } from './styles'

interface PostCardProps {
  id: number
  title: string
  body: string
  createdAt: string
}

export function PostCard({ id, title, body, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <div>
        <Link to={`/${id}`}>{title}</Link>
        <span>{createdAt}</span>
      </div>

      <p>{body}</p>
    </PostCardContainer>
  )
}
