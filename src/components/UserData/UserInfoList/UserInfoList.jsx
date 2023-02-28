import UserFieldPhone from './UserField/UserFieldPhone';
import UserField from './UserField/UserField';
import { UserBoxList, UserList } from './UserInfoList.styled';
import UserFieldBirthday from './UserField/UserFieldBirthday';

const UserInfoList = ({ name, email, userPhone, userBirthday }) => {
  return (
    <UserBoxList>
      <UserList>
        <UserField value={name} text="name" />
        <UserFieldPhone userPhone={userPhone} />
        <UserField value={email} text="email" />
        <UserFieldBirthday userBirthday={userBirthday} />
      </UserList>
    </UserBoxList>
  );
};
export default UserInfoList;
