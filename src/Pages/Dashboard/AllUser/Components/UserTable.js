import React from 'react';
import avatar from '../../../../assets/images/images/avatar.png';

const UserTable = ({ user }) => {
    const { name, email } = user;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={avatar} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
};

export default UserTable;
