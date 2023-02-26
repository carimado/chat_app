// import app from './firebase-config'
import React, { useState } from 'react'
import io from 'socket.io-client'
import ChatWindow from './ChatWindow'

const socket = io.connect('http://localhost:3001')

export default function ChatApp() {
    const [room, setRoom] = useState("null")

    const handleJoinRoom = () => {
        if (room === "null") {
            alert("Please enter a room name")
            return
        } else {
            socket.emit("join", room)
        }
    }

    return (
        <div>
            <h2>Enter Room Name</h2>
            <input 
                type="text" 
                placeholder="Room Name" 
                onChange={(e) => {setRoom(e.target.value)}}
                />
            <button onClick={handleJoinRoom}>Join Room</button>

            <ChatWindow socket={socket} room={room}/>
        </div>
    )
}
