import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";


const UserList: FC = () => {
    const history = useNavigate();
    // Context should be here to map the added users
    const users: any[] = [];

    const handleGoBack = () => {
        // Go back to Form
    };

    const handleUserClick = (userId: number) => {
       // Go to selected user in table
    };

    return (
        <>
            <div
                style={{
                    color: "blue",
                    margin: "0 0 1rem 0",
                    cursor: "pointer",
                }}
                onClick={handleGoBack}
            >
                Return To Form
            </div>
            <div>
                <h2>User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th
                                style={{
                                    padding: "1rem",
                                }}
                            >
                                ID
                            </th>
                            <th
                                style={{
                                    padding: "1rem",
                                }}
                            >
                                Email
                            </th>
                            <th
                                style={{
                                    padding: "1rem",
                                }}
                            >
                                Tier
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr 
                                key={user.id} 
                                onClick={() => handleUserClick(user.id)}
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                <td
                                    style={{
                                        padding: "1rem",
                                    }}
                                >
                                    {user.id}
                                </td>
                                <td
                                    style={{
                                        padding: "1rem",
                                    }}
                                >
                                    {user.email}
                                </td>
                                <td
                                    style={{
                                        padding: "1rem",
                                    }}
                                >
                                    {user.tier}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserList;