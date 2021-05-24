import styles from "./starShipCard.module.css";
import { FunctionComponent } from "react";
import Link from "next/link";

type Props = {
  infos: any;
  href: string;
};

export const StarShipCard: FunctionComponent<Props> = ({ infos, href }) => {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <p className={styles.name}>{infos.name}</p>
        <p className={styles.model}>{infos.model}</p>
        <p>{infos.cost_in_credits} credits</p>
        <p>Capacité max: {infos.cargo_capacity}</p>
        <p>{infos.MGLT} megalight/h</p>
      </div>
    </Link>
  );
};
