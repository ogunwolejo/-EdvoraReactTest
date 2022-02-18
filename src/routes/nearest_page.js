import { lazy } from "react";

// import apis
import Ride from "../utils/transport/rides";

/** defined componenets */
const Header = lazy(() => import("../components/header/header"));
const Nav = lazy(() => import("../components/navigation/nav"));

// my user station
const user = {
  station_code: 40,
  name: "Dhruv Singh",
  profile_key: "url",
};

const filterRide = (_user) => {
  return Ride.forEach((element) => {
    element.station_path.reduce(function (prev, curr) {
      return Math.abs(curr - _user.station_code) <
        Math.abs(prev - _user.station_code)
        ? console.log(element)
        : null;
    });
  });
};

const NearestPage = (props) => {
  return (
    <div>
      <Header company_name={props.title} profile__name={props.profile} />
      <Nav />
    </div>
  );
};

export default NearestPage;
