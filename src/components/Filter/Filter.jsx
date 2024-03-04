import React from 'react';


const Filter = ({ value, onChange }) => {
  return (
    <div>
      {' '}
      Find contacs by name
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
















// import React from 'react';

// const Filter = ({ value, onChange }) => {
//   return (
//     <div>
//       {' '}
//       Find contacs by name
//       <input type="text" value={value} onChange={onChange} />
//     </div>
//   );
// };

// export default Filter;