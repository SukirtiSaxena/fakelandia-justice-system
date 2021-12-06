import ConfessForm from "./ConfessForm";
import ConfessionPageText from "./ConfessionPageText"
import "./Confess.css"

const Confession = () => {
    return (
        <div>
            <h3>Confession</h3>
            <p> <ConfessionPageText /> </p>
            <ConfessForm />

        </div>
    )
}
export default Confession;