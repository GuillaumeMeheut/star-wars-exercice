import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { CategoryButton } from "../components/categoryButton";
import { PersoCard } from "../components/persoCard";
import { StarShipCard } from "../components/starShipCard";

export default function Home() {
  const [data, setData] = useState<any>({ results: [] });
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("people");

  const onSearch = async () => {
    const res = await fetch(
      `https://swapi.dev/api/${category}/?search=${search}`
    );
    let data = await res.json();
    console.log(data);
    setData(data);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h2 className={styles.title}>
          Bonjour rebelle quel données souhaitez-vous consulter ?
        </h2>
      </div>
      <div className={styles.container}>
        <div>
          <h3>Sélectionnez une catégorie et procédez à votre recherche</h3>
          <div className={styles.linkContainer}>
            <CategoryButton
              value="people"
              text="Personnes"
              onChange={(value) => setCategory(value)}
            />
            <CategoryButton
              value="planets"
              text="Planètes"
              onChange={(value) => setCategory(value)}
            />
            <CategoryButton
              value="species"
              text="Espèce"
              onChange={(value) => setCategory(value)}
            />
            <CategoryButton
              value="vehicles"
              text="Véhicule"
              onChange={(value) => setCategory(value)}
            />
            <CategoryButton
              value="starships"
              text="Vaisseau"
              onChange={(value) => setCategory(value)}
            />
          </div>
        </div>
        <input
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button className={styles.searchButton} onClick={() => onSearch()}>
          Afficher les résultats
        </button>
        <div className={styles.cardContainer}>
          {data.results.length === 0 ? (
            search === "" ? (
              <p>Commencez par effectuer une recherche</p>
            ) : (
              <p>Aucun résultats</p>
            )
          ) : (
            data.results.map((infos: any) => {
              return (
                <>
                  {category === "people" ? (
                    <PersoCard infos={infos} href={`/people/${infos.name}`} />
                  ) : category === "starships" ? (
                    <StarShipCard
                      infos={infos}
                      href={`/starships/${infos.name}`}
                    />
                  ) : null}
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}