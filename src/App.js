import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';
import { getVisibleContacts } from './store/contacts/selectors';

export default function App() {
    const contacts = useSelector(getVisibleContacts);

    return (
        <div className="App">
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter title={'Find contacts by name'} />
            {contacts.length ? (
                <ContactList contacts={contacts} />
            ) : (
                <Alert className="Alert" variant="dark">
                    Nothing found
                </Alert>
            )}
            <ToastContainer />
        </div>
    );
}
