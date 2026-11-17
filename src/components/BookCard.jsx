
export default function BookCard({titre,autheur,estDisponible,onClickEmprunt}) {
    return(
        <div  style={{padding:"15px",margin:"10px", borderRadius:"10px", border:"2px solid white", width:"150px"}}>
            <p>Titre du livre:{titre}</p>
            <p>Autheur :{autheur}</p>
            <button>{estDisponible ? "🟢Disponible" : "🔴Emprunte"}</button>
            <button id="emprunt" onClick={onClickEmprunt}>{estDisponible ? "Emprunter" : "Rendre"}</button>
        </div>
    )
}
