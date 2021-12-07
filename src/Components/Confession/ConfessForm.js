import { useContext, useState } from "react";
import { misdemeanourContext } from "../../App";
import { v4 as uuidv4 } from 'uuid';

const ConfessForm = () => {
    const [misdemeanour, setMisdemeanour] = useContext(misdemeanourContext);
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [disable,setDisable] = useState('true');


    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable(true);
        if (reason === "talk")
            setMessage(`Welcome Citizen!! You want to talk about ${subject}`);
        else {
            setMessage('New Crime Added');
            newMisdemeanour({
                citizenId: uuidv4(),
                date: new Date().toLocaleDateString(),
                misdemeanour: subject
            });
        }
 
    }

    const newMisdemeanour = (misdemeanour) => {
        setMisdemeanour((prevMisdemeanour) => {
            return [{ ...misdemeanour }, ...prevMisdemeanour];
        })
    }
    return (
        <>
            <form >
                <p>
                    <label htmlFor="subject"> Subject: </label>
                    <input type="text" id="subject" size="20"
                        onChange={e => {
                            setSubject(e.target.value);
                            setDisable(false);
                        }}
                    />
                </p>
                <p>
                    <label htmlFor="reason"> Reason for Contact: </label>
                    <select onChange={(e) => {
                        setReason(e.target.value);
                    }}>
                        <option value="misdemeanour"> Misdemeanour </option>
                        <option value="talk"> I just want to talk </option>
                    </select>
                </p>
                <p>
                    <label htmlFor="reason">Explain:</label>
                    <textarea />
                </p>
                <p>
                    <button type="button" onClick={handleSubmit} disabled={disable}>
                        Confess
                    </button>
                </p>

            </form>
            <p>
               <h3> {message} </h3>
            </p>
        </>
    )
}

export default ConfessForm;