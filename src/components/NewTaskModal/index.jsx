import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import SingleCategory from './SingleCategory'
import { Container, Header, Cancel, Add, Menu, CampInput, CampCategory } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function NewTaskModal({isNewTaskModalOpen, setNewTaskModalOpen}) {

  Modal.setAppElement('#root');

  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(allCategories);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    setCategories(allCategories);
  }, [allCategories]);

  function handleCloseNewTaskModal() {
    setNewTaskModalOpen(false);
  }

  function handleTitle(ev) {
    setTitle(ev.target.value);
  }

  function handleDescription(ev) {
    setDescription(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const newTask = {
      title,
      text: description,
      categories: category
    }
    dispatch({type: 'ADD_ITEM', payload: newTask});
    setNewTaskModalOpen(false);
    setTitle("");
    setDescription("");
    setCategory([]);
  }

  return (
    <Modal 
      isOpen={isNewTaskModalOpen}
      onRequestClose={handleCloseNewTaskModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmit}>
        <Header>
          <Cancel onClick={handleCloseNewTaskModal}>Cancelar</Cancel>
          <Add type="submit">Adicionar</Add>
        </Header>
        <Menu>
          <CampInput>
            <label htmlFor="title">Título</label>
            <input required value={title} onChange={handleTitle} type="text" name="title" id="title" placeholder="adicione um título..."></input>
          </CampInput>
          <CampInput>
            <label htmlFor="description">Descrição</label>
            <textarea value={description} onChange={handleDescription} name="description" id="description" placeholder="adicione uma descrição..."></textarea>
          </CampInput>
          <CampCategory>
            {categories !== null ? categories.map((ct, i) => 
              <SingleCategory 
              setCategory={setCategory} 
              categoryCurent={category} 
              category={ct} 
              key={i}/>
            ) : ""}
          </CampCategory>
        </Menu>
      </Container>
    </Modal>
  );
}