import {Avatar} from "antd";
import "./style.scss";

const UserAvatar = ({size = 85, user}) => {
    return (
        <Avatar
            src={user.image}
            style={{
                width: size,
                height: size,
            }}
            className='userAvatar'
        >
            {user.firstName[0]}
        </Avatar>
    )
};

export default UserAvatar;