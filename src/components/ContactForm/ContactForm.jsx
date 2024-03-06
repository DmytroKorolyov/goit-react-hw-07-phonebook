import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

const ContactForm = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(addContactThunk({ name, phone }));
    onAddContact(name, phone);

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        Phone
        <input
          type="tel"
          name="phone"
          required
          value={phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
















// import React from 'react';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContactThunk } from '../../redux/operation';
// import { selectContacts } from '../../redux/contactsSlice';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   const handleChange = e => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'phone') {
//       setPhone(value);
//     }
//   };

//   const handleAddContact = (name, phone) => {
//     const newContact = {
//       name: name.trim(),
//       phone: phone.trim(),
//     };
//     const isContactExist = contacts.some(contact => contact.name === name);
//     if (isContactExist) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     dispatch(addContactThunk(newContact));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     handleAddContact(name, phone);
//     setName('');
//     setPhone('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         Name
//         <input
//           type="text"
//           name="name"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         Number
//         <input
//           type="tel"
//           name="phone"
//           required
//           value={phone}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;











// import React, { useState } from 'react';

// const ContactForm = ({ onAddContact }) => {
//   const [formData, setFormData] = useState({ name: '', number: '' });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onAddContact(formData.name, formData.number);
//     setFormData({ name: '', number: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         Name
//         <input
//           type="text"
//           name="name"
//           required
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         Number
//         <input
//           type="tel"
//           name="number"
//           required
//           value={formData.number}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;


























// import React, { useState } from 'react';

// import {
//   Form,
//   FormDiv,
// } from './ContactForm.styled';




// const ContactForm = ({onAddContact}) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onAddContact(name, number);
//     setName('');
//     setNumber('');
//   };


//   return (
//       <Form onSubmit={handleSubmit}>
//         <FormDiv>
//           {' '}
//           Name
//           <input type="text" name="name" required value={name} onChange={handleChange}
//           />
//         </FormDiv>
//         <FormDiv>
//           {' '}
//           Number
//           <input type="tel" name="number" required value={number} onChange={handleChange}
//           />
//         </FormDiv>
//         <button type="submit">Add contact</button>
//       </Form>
//     );
//   }


//   export default ContactForm









