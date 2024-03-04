import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(formData.name, formData.number);
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        Number
        <input
          type="tel"
          name="number"
          required
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;


























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









