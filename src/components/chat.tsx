import React, { useState, useRef } from "react";
import '../styles/style.scss';
import lucas from'../images/lucas.png';
import lux from'../images/lux.jpg';
import mel from'../images/mel.png';
import { Messages } from "../file/message";


function Chat() {
    const defaultmessage = Messages

    interface Ichat {
        id: number,
        sender: String,
        receiver: String,
        date: String,
        text: String
    }

    const message: Ichat[] = []

    const [messages, setMessages] = useState(defaultmessage);
    const [usernameValue, setUsernameValue] = useState("");
    const [textValue, setTextValue] = useState("");

    function setNewMessage(msg: any) {
        setMessages([
            ...messages, msg
        ]);
    }
    function sendMessage() {

        const msg = {

            id: 1,
            receiver: "Lucas",
            sender: "Me",
            date: "11:15AM",//formAT date
            text: textValue

        };

        setUsernameValue("");
        setTextValue("");
        setNewMessage(msg);
    }
    return (
        <div className="chat-container">
            <div className="container clearfix">
                <div className="leeft">
                    <h2>E-FANDRAY</h2>
                </div>
                <div className="friend-list" id="friend-list">
                    <div className="discussion">
                        <h1>Friends</h1>
                    </div>
                    <ul className="list">
                        <li className="clearfix">
                            <img src={lucas} alt="avatar" className="avatar-image" />
                            <div className="about">
                                <div className="name">RAKOTOARIHANTA Lucas</div>
                                <div className="status">
                                Active
                                </div>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src={lux} alt="avatar" className="avatar-image" />
                            <div className="about">
                                <div className="name">RAVELOSON Antsa</div>
                                <div className="status">
                                   Active
                                </div>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src={mel} alt="avatar" className="avatar-image" />
                            <div className="about">
                                <div className="name">RAKOTOBE Volasoa</div>
                                <div className="status">
                                    Active
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="chat">
                    <div className="chat-header clearfix">
                        <img src={lucas} alt="avatar" className="avatar-image" />

                        <div className="chat-about">
                            <div className="chat-with">RAKOTOARIHANTA Lucas</div>
                            <div className="chat-num-messages">Active now</div>
                        </div>
                       
                    </div>

                    <div className="chat-chat">
                        <ul>
                            {messages.map((mes, index) =>
                                mes.sender === "Me" ? <li key={index} className="clearfix">
                                    <div className="message-data align-right">
                                        <span className="message-data-time">{mes.date}</span> &nbsp;&nbsp;
                                        <span className="message-data-name">{mes.sender}</span> 
                                    </div>
                                    <div className="message other-message float-right">
                                        {mes.text}
                                    </div>

                                </li> : <li>
                                    <div className="message-data">
                                        <span className="message-data-name">{mes.sender}</span>
                                        <span className="message-data-time">{mes.date}</span>
                                    </div>
                                    <div className="message my-message">
                                        {mes.text}
                                    </div>
                                </li>
                            )}

                        </ul>

                    </div>
                    <div className="chat-message clearfix">
                        <textarea name="message-to-send" id="message-to-send" placeholder="New message" value={textValue}
                            onChange={(e) => {
                                setTextValue(e.currentTarget.value)
                            }
                            }></textarea>
                        <button onClick={sendMessage}>SEND</button>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default Chat;