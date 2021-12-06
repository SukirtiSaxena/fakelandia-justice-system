import Emoji from "./Emoji";

const MisdemeanourCard = ({ citizenId, date, misdemeanour, punishmentIdea }) => {
   return (
      <tr>
         <td>
            {citizenId}
         </td>
         <td>
            {date}
         </td>
         <td>
            {misdemeanour}
            <Emoji misdemeanour={misdemeanour}/>
         </td>
         <td>
            {punishmentIdea}
            <img src='https://picsum.photos/10px/10px' alt="random Punishment"/>
         </td>
      </tr>
   )
};

export default MisdemeanourCard;