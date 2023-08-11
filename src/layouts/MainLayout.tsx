import {FC} from 'react'
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () =>{
    return (
        <div className="MainLayout">
            <Outlet/>
            </div>
    );
}

export {MainLayout};
