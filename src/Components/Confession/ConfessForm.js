

const ConfessForm = () => {
    return (
        <form>
            <p>
            <label htmlFor="subject"> Subject: </label>
            <input type = "text" id="subject" size = "20" />
            </p>
            <p>
            <label htmlFor="reason"> Reason for Contact: </label>
            <select>
                <option value="misdemeanour"> Misdemeanour </option>
                <option value="talk"> I just want to talk </option>
            </select>
            </p>
            <p>
            <label htmlFor="reason">Explain:</label>
            <textarea row="4" cols="50" />
            </p>
            <p>
                <button> Confess </button>
            </p>

        </form>
    )
}
export default ConfessForm;