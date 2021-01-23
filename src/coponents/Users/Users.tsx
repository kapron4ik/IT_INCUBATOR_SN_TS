import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import avatarPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

type PropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (users: number) => void
    setCurrentPage: (currentPage: number) => void
    setPageChanged: (currentPage: number) => void
    followingIsProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pagesSize)
    let arrayPageCount: Array<number> = []
    for (let i = 1; i <= pageCount; i++) {
        arrayPageCount.push(i)
    }

    return <div>
        <div>
            {arrayPageCount.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.setPageChanged(p)
                             }}>{p}</span>
            })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+u.id}>
                                <img src={u.photos.small
                                    ? u.photos.small
                                    : avatarPhoto}
                                     alt="avatarPhoto" className={s.photo}/>
                            </NavLink>
                        </div>
                        <div>{u.followed
                            ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY":"4ea25f42-325c-423b-b922-486c47047752"
                                    }

                                })
                                    .then(response => {
                                        props.toggleFollowingProgress(false, u.id)
                                        if (response.data.resultCode === 0){
                                            props.unfollowUser(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY":"4ea25f42-325c-423b-b922-486c47047752"
                                    }
                                })
                                    .then(response => {
                                        props.toggleFollowingProgress(false, u.id)
                                        if (response.data.resultCode === 0){
                                            props.followUser(u.id)
                                        }
                                    })
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

export default Users