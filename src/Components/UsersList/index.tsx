import styled from "styled-components";
import User from "../../Models/User";
import {FunctionComponent} from "react";

const UsersListFigure = styled.figure`
    grid-area: users;
    padding: 0;
    margin: 0;
    border: 1px solid #000000;
    border: 1px solid #000;
`;

const UsersListCaption = styled.figcaption`
    padding: 10px 20px;
    font-weight: 600;

`;

const UserUnsortedList = styled.ul`
    padding-left: 10px;
    border-top: 1px solid #000000;
    list-style: none;
`;


const UserListItem = styled.li`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:before {
      content: "\\2022";
      color: #00c20a;
      font-weight: bold;
      font-size: 30px;
      display: inline-block;
      width: .8em;
      height: 15px;
      margin-left: .8em;
    }
`;

interface UsersListProps {
    users: Array<User>
}

const UsersList: FunctionComponent<UsersListProps> = ({ users }: UsersListProps) => (
    <UsersListFigure>
        <UsersListCaption>Online</UsersListCaption>
        <UserUnsortedList>
            {users.map((user) => <UserListItem key={user.name}>{user.name}</UserListItem>)}
        </UserUnsortedList>
    </UsersListFigure>
);

export default UsersList;
