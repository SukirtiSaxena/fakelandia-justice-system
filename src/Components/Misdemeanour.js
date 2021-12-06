import { useState, useEffect } from "react";
import generateMisdemeanours from "../Docs/generate_misdemeanours"
import MisdemeanourCard from "./MisdemeanourCard";
import "./Misdemeanour.css";

const Misdemeanour = () => {
   const [misdemeanour, setMisdemeanour] = useState([]);

   useEffect(() => {
      getData()
   }, [])

   const getData = async () => {
      const response = await generateMisdemeanours();
      setMisdemeanour(response);
   }

   console.log("misdemeanour", misdemeanour);

   return (
      <div>
         <h3>Misdemeanour</h3>
         <table>
            <thead>
               <tr >
                  <th style={{ width: '25%' }}>Citizen ID </th>
                  <th style={{ width: '25%' }}>Date </th>
                  <th style={{ width: '25%' }}> Misdemeanour </th>
                  <th style={{ width: '25%' }}> Punishment Idea </th>
               </tr>
            </thead>
            <tbody>
               {misdemeanour.map(o => {
                  return <MisdemeanourCard key={o.citizenId} citizenId={o.citizenId}
                     date={o.date}
                     misdemeanour={o.misdemeanour}
                  />
               })}
            </tbody>
         </table>
      </div>
   )
};

export default Misdemeanour;