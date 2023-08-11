import {FC, useEffect, useState} from 'react'
import { useParams} from "react-router-dom";
import {useAppLocation} from "../hooks/router.hooks";
import {IUser} from '../interfaces/user.interface';
import {UserDetail} from "../components/UserDetail";
import {userService} from "../services/user.service";

const UserDetailsPage: FC = () => {
    const {id} = useParams()

    const {state} = useAppLocation<IUser>()

    const [user, setUser] = useState<IUser>(null);

    useEffect(() => {
        if (!state) {
            userService.getById(id).then(value => value.data).then(value => setUser(value))
        } else {
        }
        setUser(state)
    }, [id,state])

    return (
        <div>
            {user && <UserDetail user={user}/>}
        </div>
    );
}

export {UserDetailsPage};
