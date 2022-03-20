import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/actions/getProfile";
import Card from "./Card";
import styles from "./userCard.module.css";
import UserNotFound from "./UserNotFound";

const UserCard = ({ inputValue }) => {
  const { userData, userDataLoading, userDataError } = useSelector(
    (state) => state.getProfileReducer
  );

  console.log(userDataError, "userDataError");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(inputValue));
  }, [inputValue]);

  const { avatar_url, name, followers, following, public_repos } = userData;

  return (
    <div className={styles.mainBox}>
      {userDataLoading ? (
        <h1>loading...</h1>
      ) : userDataError ? (
        <UserNotFound />
      ) : (
        <Card
          avatar_url={avatar_url}
          name={name}
          followers={followers}
          following={following}
          public_repos={public_repos}
        />
      )}
    </div>
  );
};

export default UserCard;
