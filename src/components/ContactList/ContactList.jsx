import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/';
import styled from 'styled-components';

import contactsActions from '../../store/contacts/actions';

const List = styled.ul`
    margin-top: 20px;
`;

export default function ContactList({ contacts }) {
    const dispatch = useDispatch();

    const onDelete = id => dispatch(contactsActions.deleteContact(id));

    return (
        <List>
            {contacts.map(contact => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
