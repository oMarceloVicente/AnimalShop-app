"use client";

import { useUsers } from "@/data/user";
import React from "react";

const TestApi = () => {
  const { data: user } = useUsers();

  if (!user) {
    console.log("No user defined");
    return;
  }

  return <div>This is the test of the user: {user[0].email}</div>;
};

export default TestApi;
