import React, { useState } from 'react';
import avatar from '../../../../assets/images/images/avatar.png';

const UserTable = ({ user }) => {
    console.log('user123', user);
    const [deleteUser, setDeleteUser] = useState('')
    const handelDeleteUser = (id) => {
        fetch(`https://server-side-ashen.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setDeleteUser(data.deletedCount)
            })
    }
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
            <button onClick={() => handelDeleteUser(user._id)} className='btn bg-sky-500 mt-4'>Delate</button>
        </tr>
    );
};

export default UserTable;
