import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
})

function App() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(()=>{
    socket.on('message', (data) => {
      setMessages([...messages, data])
    })
  }, [messages])

  const sendMessage=()=>{
    if(message.trim()){
      socket.emit('sendMessage', message)
      setMessage('')
    }
  }

  return (
    <div className='bg-blue-50 text-black w-screen h-screen text-center'>
      <h1 className='text-4xl m-5'>Real Time Chat App</h1>
      <div className='messages-container m-auto w-4xl'>
     {
      messages && messages.map((msg, index)=>{
        return (
          <p key={index} className='bg-blue-200 p-5 rounded m-2 w-fit'>{msg}</p>
        )
      })
     }
      </div>
      <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} className='w-1/2 m-5 border-blue-200 p-2 rounded' placeholder='Type your message..' />
      <button className='bg-blue-500 text-white p-2 rounded-lg pointer' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
