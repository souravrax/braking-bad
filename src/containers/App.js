import React, { useState, useEffect } from "react";
import '../styles/app.scss'
import Header from "../components/Header.component";
import Axios from 'axios';
import CharacterGrid from "../components/CharacterGrid";
import Search from '../components/Search'

export default () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query]);


  return (
    <div>
      <Header />
      <Search getQuery={(q) => {
        setQuery(q);
      }} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}