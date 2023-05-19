import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CountrySkeleton = () => {
  return (
    <div>
      <Skeleton height="150px" width={"264px"}></Skeleton>
      <Skeleton count={1}></Skeleton>
      <Skeleton count={1}></Skeleton>
      <Skeleton count={1}></Skeleton>
      <Skeleton count={1}></Skeleton>
    </div>
  );
};

export default CountrySkeleton;
