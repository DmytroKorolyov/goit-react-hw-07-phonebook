import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/operation';


const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li key={id}>
      {name}: {phone}
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;















// import React from 'react';

// const ContactListItem = ({ id, name, phone, onDeleteContact }) => {
//   const handleDelete = () => {
//     onDeleteContact(id);
//   };

//   return (
//     <li key={id}>
//       {name}: {phone}
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// };

// export default ContactListItem;














// import React from 'react';


// const ContactListItem = ({ id, name, number, onDeleteContact }) => {
//   return (
//     <li key={id}>
//       {name}: {number}
//       <button onClick={() => onDeleteContact(id)}>Delete</button>
//     </li>
//   );
// };

// export default ContactListItem;
















