import React from 'react';


const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
















