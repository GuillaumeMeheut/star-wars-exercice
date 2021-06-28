import React, { useState } from "react";
import { StarShipCard } from "../../components/starShipCard";
import styles from "./global.module.css";

export default function Home() {
  const [data, setData] = useState<any>({ results: [] });
  const [search, setSearch] = useState<string>("");

  const onSearch = async () => {
    const res = await fetch(`http://localhost:4000/starships?search=${search}`);
    let DATA = await res.json();
    setData(DATA);
  };
  return (
    <div>
      <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} />
      <button className={styles.searchButton} onClick={() => onSearch()}>
        Afficher les résultats pour les vaisseaux
      </button>
      {data.results.map((infos: any) => {
        return (
          <>
            <StarShipCard infos={infos} href={`/starships/${infos.name}`} />
          </>
        );
      })}
    </div>
  );
}
