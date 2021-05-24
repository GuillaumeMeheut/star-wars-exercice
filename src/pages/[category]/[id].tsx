import React, { useState } from "react";
// import styles from "../styles/Id.module.css";

export default function Id({ data }) {
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://swapi.dev/api/${params.category}/?search=${params.id}`
  );

  let data = await res.json();
  return {
    props: {
      data: data.results[0],
    },
  };
};
