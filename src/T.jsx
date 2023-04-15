
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from './firebase';


export const AddDataForm = () => {
  const [inputs, setInputs] = useState([{ name: '', email: '', password: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    const newInputs = [...inputs, { name: '', email: '', password: '' }];
    setInputs(newInputs);
  };
  const [inputss, setInputss] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
inputs.map((i) => {

setDoc(doc(db,"thi is test",i.email),{ name: i.name, email: i.email, password: i.password })
 
})
    setInputs([{ name: '', email: '', password: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddInput}>Add Another Input</button>
      <button type="submit">Save</button>
    </form>
  );
};



