import {FC} from 'react'
import {useNavigate} from 'react-router-dom';
import {IUser} from '../interfaces/user.interface';

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    const {id, name} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={() => navigate(`${id}`,{state:{...user}}) }>UserDetails</button>
        </div>
    );
}

export {User};
