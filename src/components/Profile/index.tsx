import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  ProfileContainer,
  ProfileContent,
  ProfileInformation,
  ProfileSocialMedias,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/31370547?v=4"
          alt=""
        />
        <ProfileInformation>
          <strong>
            Leonardo Theodoro
            <a href="#">
              GITHUB <ArrowSquareOut size={16} />
            </a>
          </strong>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            illo laboriosam reprehenderit, exercitationem totam consequuntu
          </p>
          <ProfileSocialMedias>
            <span>
              <GithubLogo weight="fill" /> leotheodoro
            </span>
            <span>
              <Buildings weight="fill" /> Recruit Robin
            </span>
            <span>
              <Users weight="fill" /> 32 Seguidores
            </span>
          </ProfileSocialMedias>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
