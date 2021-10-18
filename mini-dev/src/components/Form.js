import react, { useState } from "react";

const EmailForm = (props) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log(email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Wanna to get in touch? Add your email: 
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EmailForm;