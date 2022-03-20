import React from "react";
import styles from "./userCard.module.css";

const Card = ({ avatar_url, name, followers, following, public_repos }) => {
  return (
    <>
      <section className={`${styles.cardBox}`}>
        <div className={styles.img}>
          <img src={avatar_url} alt="" />
        </div>
        <div className={styles.userDetails}>
          <li>NAME: {name} </li>
          <li>followers: {followers}</li>
          <li>following: {following}</li>
          <li>public_repos: {public_repos}</li>
        </div>
      </section>
    </>
  );
};

export default Card;
