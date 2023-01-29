import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import {
  ArrowLeft,
  ArrowSquareOut,
  CalendarBlank,
  Chats,
  GithubLogo,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { UserContext } from '../../contexts/UserContext'
import { PostInfo, PostContent, PostContainer, PostBody } from './styles'

export function Post() {
  const { number } = useParams()

  const { getIssueById, issueOpened } = useContext(UserContext)

  useEffect(() => {
    getIssueById(Number(number))
  }, [getIssueById, number])

  console.log(issueOpened)
  return (
    <>
      <Header />
      <PostContainer>
        <PostContent>
          <header>
            <Link to="/">
              <ArrowLeft /> VOLTAR
            </Link>
            <a href={issueOpened.html_url} target="_blank" rel="noreferrer">
              VER NO GITHUB <ArrowSquareOut />
            </a>
          </header>
          <strong>{issueOpened.title}</strong>
          <PostInfo>
            {issueOpened.user && (
              <span>
                <GithubLogo size={16} weight="fill" /> {issueOpened.user.login}
              </span>
            )}
            <span>
              <CalendarBlank size={16} weight="fill" />{' '}
              {issueOpened.created_at &&
                formatDistanceToNow(new Date(issueOpened.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
            <span>
              <Chats size={16} weight="fill" /> {issueOpened.comments}{' '}
              {issueOpened.comments === 1 ? 'Comentário' : 'Comentários'}
            </span>
          </PostInfo>
        </PostContent>

        <PostBody>
          <p>{issueOpened.body}</p>
        </PostBody>
      </PostContainer>
    </>
  )
}
