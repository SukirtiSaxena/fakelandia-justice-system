
const DropDownMisdemeanour = ({ onChangeFilterValue }) => {
    return (
        <select onChange={(e) => onChangeFilterValue(e.target.value)}>
            <option defaultValue="misdemeanour" >Misdemeanours</option>
            <option value="united">united</option>
            <option value="vegetables">vegetables</option>
            <option value="rudeness">rudeness</option>
            <option value="lift">lift</option>
        </select>
    )
};

export default DropDownMisdemeanour;