import styles from "./card.module.css";
import TransportView from "../components/transport_view/transport_view";

const Card = (props) => {
  return (
    <div className={styles.card__container}>
      <TransportView details={props.contents} />
    </div>
  );
};

export default Card;
