import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'
import { PostCardContainer } from './styles'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  id: number
  title: string
  body: string
  createdAt: string
  number: number
}

export function PostCard({
  id,
  title,
  body,
  createdAt,
  number,
}: PostCardProps) {
  return (
    <PostCardContainer>
      <div>
        <Link to={`/${number}`}>{title}</Link>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <p>{body}</p>
    </PostCardContainer>
  )
}
