import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import avatarPhoto from "../../assets/images/user.png"

type PropsType = {
    users: Array<UserType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

// React.FC<PropsType>
class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small
                                ? u.photos.small
                                : avatarPhoto}
                                 alt="avatarPhoto" className={s.photo}/>
                        </div>
                        <div>{u.followed
                            ? <button onClick={() => {
                                this.props.unfollowUser(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.followUser(u.id)
                            }}>Follow</button>
                        }
                        </div>
                    </span>
                    <span>
                        <div>
                            <span>{u.name}</span>
                            <span>{"u.location.city"},{"u.location.country"}</span>
                        </div>
                        <div>{u.status}</div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users