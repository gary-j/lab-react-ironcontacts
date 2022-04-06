import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';






function App() {
  
  const initialContacts = contacts.slice(0, 5);
  const [contactsDisplayed, setContacts] = useState(initialContacts);

  function AddRandomContact(){


    const randomIndex = Math.floor(Math.random()* contacts.length);
    const randomContact = contacts[randomIndex];
    
    if(contactsDisplayed.includes(randomContact)){
      AddRandomContact()
    }else{

      const newContactList = [...contactsDisplayed, randomContact];
      setContacts(newContactList);
    }
  }

  return (
    <div className="App">
    <button className="btn" onClick={AddRandomContact}>Add random contact</button>
      <div className="contact-list">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contactsDisplayed.map((contact) => ( 
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} className="picture"/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <p>🏆 </p> }</td>
                <td>{contact.wonEmmy && <p>🏆 </p> }</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
