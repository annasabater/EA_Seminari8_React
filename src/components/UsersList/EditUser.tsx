import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../../services/usersService';
import UserForm from '../Form/UserForm';
import { User } from '../../types';

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      getUserById(id).then((data) => setUser(data));
    }
  }, [id]);

  const handleSubmit = async (updatedUser: User) => {
    await updateUser(updatedUser);
    navigate('/users'); 
  };

  return (
    <div>
      <h2>Editar Usuari</h2>
      {user ? <UserForm initialData={user} onSubmit={handleSubmit} /> : <p>Carregant...</p>}
    </div>
  );
};

export default EditUser;
