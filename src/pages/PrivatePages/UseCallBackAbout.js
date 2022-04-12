import React, { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../redux/actions/users";
import { useSelector, useDispatch } from "react-redux";

import { connect } from "react-redux";
import UserList from "./UserList";
import UserData from "./UserData";

const UseCallBackAbout = (props) => {
  const dispatch = useDispatch();

  const [showRecord, setShowRecord] = useState(false);
  const [count, setCount] = useState(0);

  const userList = useSelector((state) => state.users.users);

  useEffect(() => {
   dispatch(getUsers());

  }, []);

  const getUserList = useCallback(() => {
    setShowRecord(true);
    props.getApi();
  }, [userList]);

  const UserCount = useCallback(() => {
    setCount(userList.length);
  }, [userList]);

  return (
    <div>
      <h2>This is about us page!</h2>
      Read more about us at :
      <div>
        <button onClick={getUserList}>Display Records</button>
      </div>
      <div>
        <button onClick={UserCount}>Display Count</button>
      </div>
      {showRecord && <UserList userList={userList} />}
      <UserData count={count} />
    </div>
  );
};


export default UseCallBackAbout;
