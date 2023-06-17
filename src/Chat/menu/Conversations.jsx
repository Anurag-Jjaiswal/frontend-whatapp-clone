import React, { useEffect, useState } from "react";
import { getUsers } from "../../service/api";
import Conversation from "./Conversation";

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Conversation />
    </div>
  );
};

export default Conversations;
