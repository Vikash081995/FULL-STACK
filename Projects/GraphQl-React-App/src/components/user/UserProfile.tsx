import { useQuery } from "@apollo/client";
import { GET_USER } from "../../queries/queries";
import { UserData } from "../../types";



type UserProfileProps = {
    userName: string
}


const UserProfile = ({ userName }: UserProfileProps) => {

    const { data, loading, error } = useQuery<UserData>(GET_USER, {
        variables: {
            userName
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    if (!data) return <p>No data</p>

    const { avatarUrl, name, bio, login } = data;
    return (
        <div>
            <img src={avatarUrl} alt={login} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}

export default UserProfile