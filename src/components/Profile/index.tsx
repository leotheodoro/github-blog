import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../contexts/UserContext'
import {
  ProfileContainer,
  ProfileContent,
  ProfileInformation,
  ProfileSocialMedias,
} from './styles'

export function Profile() {
  const user = useContextSelector(UserContext, (context) => {
    return context.user
  })

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={user.avatar_url} alt="" />
        <ProfileInformation>
          <strong>
            {user.name}
            <a href={user.html_url} target="_blank" rel="noreferrer">
              GITHUB <ArrowSquareOut size={16} />
            </a>
          </strong>
          <p>{user.bio}</p>
          <ProfileSocialMedias>
            <span>
              <GithubLogo weight="fill" /> {user.login}
            </span>
            {user.company && (
              <span>
                <Buildings weight="fill" /> {user.company}
              </span>
            )}
            {user.followers > 0 && (
              <span>
                <Users weight="fill" /> {user.followers}{' '}
                {user.followers === 1 ? 'Seguidor' : 'Seguidores'}
              </span>
            )}
          </ProfileSocialMedias>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
