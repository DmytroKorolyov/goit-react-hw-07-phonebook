import React from 'react';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          // onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;











// import React from 'react';
// import ContactListItem from './ContactListItem/ContactListItem';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(({ id, name, phone }) => (
//         <ContactListItem key={id} id={id} name={name} phone={phone} onDeleteContact={onDeleteContact} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;














// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectFilter } from '../../redux/filterSlice';
// import ContactListItem from './ContactListItem/ContactListItem';

// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);

//   const filteredContacts = contacts.items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul>
//       {filteredContacts.map(({ id, name, phone }) => (
//         <ContactListItem key={id} id={id} name={name} phone={phone} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;









// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectFilter } from '../../redux/filterSlice';
// import ContactListItem from './ContactListItem/ContactListItem';


// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);


// const filteredContacts = filter
//     ? contacts.filter(item => item.name.toLowerCase().includes(filter))
//     : contacts;

//   return (
//     <ul>
//       {filteredContacts.map(({ id, name, phone }) => (
//         <ContactListItem key={id} id={id} name={name} phone={phone} />
//       ))}
//     </ul>
//   );
// };


// export default ContactList;













// import React from 'react';
// import ContactListItem from '../ContactList/ContactListItem/ContactListItem'

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <ContactListItem
//           key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}
//         />
//       ))}
//     </ul>
//   );
// };


// export default ContactList;