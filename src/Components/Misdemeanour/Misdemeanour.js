import { useContext, useState } from "react";
import MisdemeanourCard from "./MisdemeanourCard";
import DropDownMisdemeanour from "./DropDownMisdemeanour"
import "./Misdemeanour.css";
import { misdemeanourContext } from "../../App";

const Misdemeanour = () => {

   const [misdemeanour, setMisdemeanour] = useContext(misdemeanourContext);
   const [filterValue, setFilterValue] = useState('Misdemeanours');

   return (
      <div>
         <h3>Misdemeanour</h3>
         <table>
            <thead>
               <tr >
                  <th > Citizen ID </th>
                  <th > Date </th>
                  <th > <DropDownMisdemeanour onChangeFilterValue={(e) => setFilterValue(e)} /> </th>
                  <th > Punishment Idea </th>
               </tr>
            </thead>
            <tbody>
               {
                  misdemeanour
                     .filter(e => (filterValue === 'Misdemeanours') ? e : e.misdemeanour === filterValue)
                     .map(o => {
                        return <MisdemeanourCard
                           key={o.citizenId}
                           citizenId={o.citizenId}
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