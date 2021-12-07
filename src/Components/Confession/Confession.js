import ConfessForm from "./ConfessForm";
import ConfessionPageText from "./ConfessionPageText"
import "./Confess.css"

const Confession = () => {
    return (
        <div>
            <h3>Confession</h3>
            <section> <ConfessionPageText /> </section>
            <section> <ConfessForm /> </section>

        </div>
    )
}
export default Confession;