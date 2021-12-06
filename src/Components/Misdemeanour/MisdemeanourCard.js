import Emoji from "./Emoji";

const MisdemeanourCard = ({ citizenId, date, misdemeanour }) => {
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
            <Emoji misdemeanour={misdemeanour} />
         </td>
         <td>
            <img src='https://picsum.photos/100' alt="random Punishment" />
         </td>
      </tr>
   )
};

export default MisdemeanourCard;