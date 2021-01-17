import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileUserType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
    profile: ProfileUserType
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return < Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img></img>
                ava+description
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
        </div>

    )
}

export default ProfileInfo;