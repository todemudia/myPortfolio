import React, {useState} from 'react';
import Axios from 'axios';

const CardForm = (props) => {
    const [userName, setUserName] = useState('');
    const handleSubmit = async (event) => {
      event.preventDefault(); //Prevents react from updating the page immediately after the submit action occurs
      const resp = await Axios.get(`https://api.github.com/users/${userName}`); //used to dynamically insert the username
      props.onSubmit(resp.data) //Sends the data to the onSubmit prop
      setUserName('');
    };
          return (
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={userName}
            onChange={event => setUserName(event.target.value)} //Allows the userInput to be updated
            placeholder="GitHub username" 
            required 
          />
          <button>Add card</button>
          </form>
      );
  }

  export default CardForm;