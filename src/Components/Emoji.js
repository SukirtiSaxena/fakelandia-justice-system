
const Emoji = ({ misdemeanour }) => {

    return (
        <>
        {(()=>{
                switch ({misdemeanour}) {
                    case "lift": return '🗣';
                        case "rudeness": return '🤪';
                        case "united": return '😈';
                        case "vegetables": return '🥗';
                        default: return null;
                };
        })}
        </>
    )
};

export default Emoji;