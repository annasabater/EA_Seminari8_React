import React, { useState, useEffect } from 'react';
import { User } from '../../types';

type Props = {
  initialData?: User;
  onSubmit: (data: User) => void;
};

const UserForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<User>(
    initialData || { id: 0, name: '', age: 0, email: '', password: '', phone: 0 }
  );

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' || name === 'phone' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom</label>
      <input name="name" value={formData.name} onChange={handleChange} />

      <label>Edat</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label>Email</label>
      <input name="email" value={formData.email || ''} onChange={handleChange} />

      <label>Telèfon</label>
      <input
        type="number"
        name="phone"
        value={formData.phone || ''}
        onChange={handleChange}
      />

      <label>Contrasenya</label>
      <input
        type="password"
        name="password"
        value={formData.password || ''}
        onChange={handleChange}
      />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default UserForm;
