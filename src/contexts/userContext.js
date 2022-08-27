import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [blog, setBlog] = useState("");
  const [company, setCompany] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [linkProfile, setLinkProfile] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [repos, setRepos] = useState("");
  const [twitter, setTwitter] = useState("");
  const [username, setUsername] = useState("");

  function searchUser(name) {
    api
      .get(`/users/${name}`)
      .then((res) => {
        console.log("RESULT: ", res.data);
        const { data } = res;
        setAvatar(data.avatar_url);
        setBio(data.bio);
        setBlog(data.blog);
        setCompany(data.company);
        setCreatedAt(data.created_at);
        setFollowers(data.followers);
        setFollowing(data.following);
        setLinkProfile(data.html_url);
        setLocation(data.location);
        setName(data.name);
        setRepos(data.public_repos);
        setTwitter(data.twitter_username);
        setUsername(data.login);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  return (
    <UserContext.Provider
      value={{
        avatar,
        bio,
        blog,
        company,
        createdAt,
        followers,
        following,
        linkProfile,
        location,
        name,
        repos,
        twitter,
        username,
        searchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
