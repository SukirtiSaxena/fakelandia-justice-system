import { useState } from "react";
import generateMisdemeanours from "../Docs/generate_misdemeanours"
import MisdemeanourCard from "./MisdemeanourCard";

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
         {obj.map(o=>{
            return <MisdemeanourCard id={o.citizenId} date={o.date} misdemeanour={o.misdemeanour} />
         })}
      </div>
   )
};

export default Misdemeanour;