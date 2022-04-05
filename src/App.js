import "./App.css";
import contacts from "./contacts.json";

const fiveContacts = contacts.slice(0, 5);

function App() {
  return (
    <div className="App">
      <div className="contact-list">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {fiveContacts.map((contact) => ( 
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
