
const Emoji = ({ misdemeanour }) => {
    let emoji = '';
    switch (misdemeanour) {
        case 'lift': emoji = ' 🗣'; break;
        case 'rudeness': emoji = ' 🤪'; break;
        case 'united': emoji = ' 😈'; break;
        case 'vegetables': emoji = ' 🥗'; break;
        default: emoji = '';
    };
     return (
        <>
            {emoji}
        </>
    )
};

export default Emoji;