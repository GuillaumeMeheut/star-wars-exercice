import styles from "./persoCard.module.css";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  infos: any;
  href: string;
};

export const PersoCard: FunctionComponent<Props> = ({ infos, href }) => {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <p className={styles.name}>{infos.name}</p>
        <p>{infos.height} cm</p>
        <p>{infos.mass} lb</p>
        <div className={styles.genderContainer}>
          <p className={styles.gender}>Genre: </p>
          {infos.gender === "n/a" ? (
            <p>Non défini</p>
          ) : (
            <Image
              src={
                infos.gender === "male"
                  ? "/assets/male.svg"
                  : "/assets/female.svg"
              }
              width="20px"
              height="20px"
            />
          )}
        </div>
      </div>
    </Link>
  );
};
