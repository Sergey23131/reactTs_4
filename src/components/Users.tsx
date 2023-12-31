import {FC, useEffect, useState} from 'react'
import {IUser} from '../interfaces/user.interface';
import {userService} from "../services/user.service";
import { User } from './User';

interface IProps {

}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export {Users};
