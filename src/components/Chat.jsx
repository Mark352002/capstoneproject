import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Chat = (props) => {
    let user_id = props.user ? props.user.id : '';
    const [chat,setChat] = useState([]);

    const [state, setState] = useState({
        user_id: user_id,
        chat: ''
    });

    // form submit handler
// form submit handler
const formSubmit = (e) => {
    e.preventDefault(); // prevent page refresh on form submit

    // create data to hold the values to be passed into axios
    const data = {
        user_id: state.user_id,
        chat: state.chat,
        created_at: new Date().toISOString() 
    };

    axios.post('/chat', data)
        .then((response) => {
            // handle response if needed
            alert('Message sent successfully!');
            setState({
                ...state,
                chat: '' // Clear the chat input field
            });
        })
        .catch((error) => {
            // handle error if needed
            console.error('Error sending message:', error);
        });
};


    // input change handler
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    useEffect(()=>{
        axios.get(`/chat/${user_id}`)

        .then(response=>{
          setChat(response.data)
        })
        .catch(error=>{   
          console.error('Error fetching data',error);
        })
      },[]);

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='bg-light p-5 mt-5 rounded col-lg-4 offset-lg-4'>
                <h3 className='text-center'>Chat Support</h3>
                
                
                <div className='bg-white p-2 rounded'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
       
       <div className='reply'>Hi! How can we help you?</div>
   </div>   
                {chat.map(chat => (
  <div key={chat.id}>
    {/* Check if both chat and reply are not null or no data */}
    
    {(chat.chat || chat.reply) && (
      <div className='bg-white p-2 rounded'>
       
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Render chat message if it exists */}
          {chat.chat && <div className='chat' style={{ marginLeft: 'auto' }}>{chat.chat}</div>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Render reply if it exists */}
        {chat.reply && <div className='reply'>{chat.reply}</div>}
        </div>

      </div>
    )}
  </div>
))}
                </div>





                   

                    <form onSubmit={formSubmit} id='submitform'>
                        <div className="mb-3">
                            <label htmlFor="chatInput" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                name='chat'
                                id='chatInput'
                                placeholder='Enter your question'
                                value={state.chat}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='d-grid gap-2 mb-2'>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
