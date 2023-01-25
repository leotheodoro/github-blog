import { ProfileContainer, ProfileContent, ProfileInformation } from './styles'

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
            Leonardo Theodoro <a href="#">GITHUB</a>
          </strong>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            illo laboriosam reprehenderit, exercitationem totam consequuntu
          </p>
          <div>
            <span>leotheodoro</span>
            <span>Recruit Robin</span>
            <span>32 Seguidores</span>
          </div>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
