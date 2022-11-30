import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserTable from './Components/UserTable';

const AllUser = () => {
    const users = useLoaderData();

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserTable user={user} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;