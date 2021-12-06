import { useState } from "react";
import generateMisdemeanours from "../Docs/generate_misdemeanours"
import MisdemeanourCard from "./MisdemeanourCard";
import "./Misdemeanour.css";

const Misdemeanour = () => {
   const [Misdemeanour, setMisdemeanour] = useState([generateMisdemeanours()]);
   const obj = [{
      citizenId: 19739,
      date: "12/5/2021",
      misdemeanour: "lift"
   },
   {
      citizenId: 1455,
      date: "12/5/2021",
      misdemeanour: "rudeness"
   },
   {
      citizenId: 1783,
      date: "12/5/2021",
      misdemeanour: "united"
   },
   {
      citizenId: 10825,
      date: "12/5/2021",
      misdemeanour: "vegetables"
   },
   {
      citizenId: 130,
      date: "12/5/2021",
      misdemeanour: "rudeness"
   }

   ];
   
   return (
      <div>
         <h3>Misdemeanour</h3>
         <table> 
            <tr >
               <th style={{width: '25%'}}>Citizen ID </th>
               <th style={{width: '25%'}}>Date </th>
               <th style={{width: '25%'}}> Misdemeanour </th>
               <th style={{width: '25%'}}> Punishment Idea </th>
            </tr>
            
               {obj.map(o => {
                  return <MisdemeanourCard citizenId={o.citizenId}
                     date={o.date}
                     misdemeanour={o.misdemeanour}
                     punishmentIdea="Eat Junk Food"
                  />
               })}
            
         </table>
      </div>
   )
};

export default Misdemeanour;