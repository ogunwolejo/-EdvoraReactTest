import { lazy, useState } from "react";
/** defined componenets */
const Header = lazy(() => import("../components/header/header"));
const Nav = lazy(() => import("../components/navigation/nav"));

const UpcomingRidePage = (props) => {
  return (
    <div>
      <Header company_name={props.title} profile__name={props.profile} />
      <Nav></Nav>
    </div>
  );
};

export default UpcomingRidePage;
