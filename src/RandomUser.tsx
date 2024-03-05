import { useEffect, useState } from "react";

export default function RandomUser() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function callAPI() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const { results } = await response.json();
        if (Array.isArray(results) && results.length !== 0) {
          setUser(results[0]);
        }
      } catch (error: unknown) {
        console.log("call API failed", error);
      }
    }
    callAPI();
  }, [])
  if (!user) {
    return <h2>Loading ...</h2>
  }
  console.log('user', user)
  return (
    <div className="random-user">
      <img className="avatar" src={user.picture.large} />
      <div className="row">
        <strong>Name:</strong>
        <p>{user.name.title} {user.name.first} {user.name.last}</p>
      </div>
      <div className="row">
        <strong>Gender:</strong>
        <p>{user.gender.toUpperCase()}</p>
      </div>
      <div className="row">
        <strong>Email:</strong>
        <p>{user.email}</p>
      </div>
      <div className="row">
        <strong>Phone:</strong>
        <p>{user.phone}</p>
      </div>
    </div>
  );
}

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  }
}