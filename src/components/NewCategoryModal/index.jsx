import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Container, Header, Cancel, Add, Menu , CampInput} from './styles';

export default function NewCategoryModal({setIsOpenNewCategoryModal, isOpenNewCategoryModal}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#33333322");

    Modal.setAppElement('#root');

    function handleCloseNewCategoryModal() {
      setIsOpenNewCategoryModal(false);
    }

    function handleTitle(ev) {
      setTitle(ev.target.value);
    }

    function handleColor(ev) {
      console.log(ev.target.value);
      setColor(ev.target.value);
    }

    function handleSubmit(ev) {
      ev.preventDefault();
      const newCategory = {
        color,
        title
      }
      dispatch({type: 'ADD_CATEGORY', payload: newCategory});
      setIsOpenNewCategoryModal(false);
      setTitle("");
      setColor("#33333322");
    }

    return (
      <Modal
       isOpen={isOpenNewCategoryModal}
       onRequestClose={handleCloseNewCategoryModal}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
      >
        <Container onSubmit={handleSubmit}> 
          <Header> 
            <Cancel onClick={handleCloseNewCategoryModal}>Cancelar</Cancel>
            <Add type="submit">Adicionar</Add>
          </Header>
          <Menu>
            <CampInput>
              <label htmlFor="title">Título</label>
              <input required value={title} onChange={handleTitle} type="text" name="title" id="title" placeholder="adicione um título..." />
            </CampInput>
            <CampInput color={color}>
              <label htmlFor="color">Cor</label>
              <div className="container-color">
              <input value={color} onChange={handleColor} type="color" name="color" id="color" />
              </div>
            </CampInput>
          </Menu>
        </Container>
          
      </Modal>
    );
}