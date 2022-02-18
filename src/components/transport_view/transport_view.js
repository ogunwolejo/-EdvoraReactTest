import styles from "./transport.module.css";
// assets
import Map from "../../images/image_1.svg";

const TransportView = (props) => {
  const list = props.details;

  return (
    <div className={styles.transport__container}>
      <img src={Map} alt="" />
      <ul>
        <li>Ride Id : {list.id}</li>
        <li>Origin State : {list.origin_station_code}</li>
        <li>Station Path : {list.station_path_s}</li>
        <li>
          Date :{" "}
          {new Intl.DateTimeFormat("en-us", {
            dateStyle: "long",
            hour12: false,
            timeStyle: "short",
          }).format(list.date)}
        </li>
        <li>Distance : 0</li>
      </ul>
    </div>
  );
};

export default TransportView;
