import React, { useState } from "react";
import { PersoCard } from "../../components/persoCard";
import styles from "./global.module.css";

export default function Home() {
  const [data, setData] = useState<any>({ results: [] });
  const [search, setSearch] = useState<string>("");

  const onSearch = async () => {
    const res = await fetch(`http://localhost:4000/people?search=${search}`);
    let DATA = await res.json();
    setData(DATA);
  };
  return (
    <div>
      <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} />
      <button className={styles.searchButton} onClick={() => onSearch()}>
        Afficher les résultats pour les personnes
      </button>
      {data.results.map((infos: any) => {
        return (
          <>
            <PersoCard infos={infos} href={`/people/${infos.name}`} />
          </>
        );
      })}
    </div>
  );
}
