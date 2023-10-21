
interface Props  {
    accountId: string
    authUserId: string
    name: string
    username: string
    imgUrl: string
    bio: String
}

const ProfileHeader = ({accountId, authUserId, name, username, imgUrl, bio
}: Props) => {
    return (
        <div>
            <h1>profile header</h1>
        </div>
    )
}

export default ProfileHeader