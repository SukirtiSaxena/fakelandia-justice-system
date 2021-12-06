import { useContext } from "react";
import MisdemeanourCard from "./MisdemeanourCard";
import DropDownMisdemeanour from "./DropDownMisdemeanour"
import "./Misdemeanour.css";
import { misdemeanourContext } from "../App";

const Misdemeanour = () => {

   const [misdemeanour, setMisdemeanour] = useContext(misdemeanourContext);

   return (
      <div>
         <h3>Misdemeanour</h3>
         <table>
            <thead>
               <tr >
                  <th style={{ width: '25%' }}>Citizen ID </th>
                  <th style={{ width: '25%' }}>Date </th>
                  <th style={{ width: '25%' }}> <DropDownMisdemeanour /> </th>
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