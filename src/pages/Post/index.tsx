import {
  ArrowLeft,
  ArrowSquareOut,
  CalendarBlank,
  Chats,
  GithubLogo,
} from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { PostInfo, PostContent, PostContainer, PostBody } from './styles'

export function Post() {
  const { id } = useParams()

  return (
    <>
      <Header />
      <PostContainer>
        <PostContent>
          <header>
            <Link to="/">
              <ArrowLeft /> VOLTAR
            </Link>
            <a href="">
              VER NO GITHUB <ArrowSquareOut />
            </a>
          </header>
          <strong>Javascript data types and data structures</strong>
          <PostInfo>
            <span>
              <GithubLogo size={16} weight="fill" /> leotheodoro
            </span>
            <span>
              <CalendarBlank size={16} weight="fill" /> Há um dia
            </span>
            <span>
              <Chats size={16} weight="fill" /> 5 comentários
            </span>
          </PostInfo>
        </PostContent>

        <PostBody>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </PostBody>
      </PostContainer>
    </>
  )
}
