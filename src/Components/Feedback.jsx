import React, { useState } from "react";
import "../CompCSS/Feedback.css";
import { db } from "../Firebase.jsx";
import Navbar from "./Navbar";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your response has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="FeedbackBack">
        <Navbar compActive='Feed' activeAlways={true} shadow = {true}  />
        <div className="FeedbackMain">
            <form className="Feedform" onSubmit={handleSubmit}>
                <h1><center>Feedback 🤳</center></h1>

                <label>Name</label>
                <input
                    className="FeedInput"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    className="FeedInput"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message</label>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                    Submit
                </button>
                </form>
            </div>
    </div>
    
  );
};

export default Feedback;
