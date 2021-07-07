import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import avatarPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Pagination} from "@material-ui/lab";

type PropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    // setTotalUsersCount: (users: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (currentPage: number) => void
    followingIsProgress: Array<number>
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pagesSize)
    let arrayPageCount: Array<number> = []
    for (let i = 1; i <= pageCount; i++) {
        arrayPageCount.push(i)
    }
    const handleChange = (event: React.FormEvent<EventTarget>, value: number) => {
        props.onPageChanged(value)
    };

    return <div className={s.wrapper}>
        <div className={s.pagination}>
            <Pagination count={pageCount} page={props.currentPage} onChange={handleChange} variant="outlined"
                        color="primary"/>
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small
                                ? u.photos.small
                                : avatarPhoto}
                                 alt="avatarPhoto" className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>{u.followed
                        ? <button disabled={props.followingIsProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollowUser(u.id)
                                  }}>Unfollow</button>
                        : <button disabled={props.followingIsProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.followUser(u.id)
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