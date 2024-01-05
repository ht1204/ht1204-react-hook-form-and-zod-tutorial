import { FC } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";


const UserView: FC  = () => {
    const history = useNavigate();
    const { id } = useParams();
    // Context should be here to check selected user data
    const users: any[] = [];

    // Catch the userId and find to show its data.
    const userId = 0;
    const selectedUser = users.find((user) => user.id === userId);

    if (!selectedUser) {
        return <div>User not found</div>;
    }

    const handleGoBack = () => {
        // Go to UserList
    };


    return (
        <section>
            <div
                style={{
                    color: "blue",
                    margin: "0 0 1rem 0",
                    cursor: "pointer",
                }}
                onClick={handleGoBack}
            >
                Return To List
            </div>
            <div>
                <h2>User Details</h2>
                <p>ID: {selectedUser.id}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Tier: {selectedUser.tier}</p>
            </div>
        </section>
    );
  };

  export default UserView;