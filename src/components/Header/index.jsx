import React from 'react';
import Add from '../Svgs/Add';
import { Container, Title } from './styles';
import { useState } from 'react';
import NewTaskModal from '../NewTaskModal';

export default function Header() {
  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setNewTaskModalOpen(true);
  }
  
  return (
    <Container>
        <Title>todo</Title>
        <Add className="button-add" onClick={handleOpenNewTaskModal} />
        <NewTaskModal 
          isNewTaskModalOpen={isNewTaskModalOpen}
          setNewTaskModalOpen={setNewTaskModalOpen}
        />
    </Container>
  );
}