import BookCard from "./components/BookCard";
import {useState} from 'react';
 export default function App() {
  const [estDisponible,SetEstDisponible]= useState(true);
  const onClickEmprunt = () =>{
    SetEstDisponible(!estDisponible)
  }
  return(
  <div style={{padding:"20px"}}>
    <BookCard titre={"joe"} autheur={"jack"} estDisponible={estDisponible} onClickEmprunt={onClickEmprunt}></BookCard>
  </div>
  )
}
