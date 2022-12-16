import { useState } from 'react';

import Modal from './components/modal/Modal';
import EditModal from './components/EditModal/EditModal';

import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function App() {

  const [gifts, setGifts] = useState(JSON.parse(localStorage.getItem("gifts")) || []);

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  
  const [idToEdit, setIdToEdit] = useState(0);
  
  const [giftName, setGiftName] = useState('');
  const [giftThumbnail, setGiftThumbnail] = useState('');
  const [giftQuantity, setGiftQuantity] = useState('');
  const [giftReceiver, setGiftReceiver] = useState('');

  const addGift = () => {

    if (giftName === "") return alert("El campo no puede estar vacío")

    const existentName = gifts.some(gift => gift.name.trim().toLowerCase() === giftName.toLowerCase())

    if (existentName) return alert("Ese regalo ya existe")

    const idArr = gifts.map(item => item.id)
    const maxId = idArr.length === 0 ? 0 : Math.max(...idArr)

    const newGift = {
      id: maxId + 1,
      name: giftName,
      quantity: giftQuantity,
      thumbnail: giftThumbnail,
      giftReceiver: giftReceiver
    }

    setGifts([...gifts, newGift])

    localStorage.setItem("gifts", JSON.stringify([...gifts, newGift]))
  }

  const deleteGift = (id) => {

    const filteredArr = gifts.filter(gift => gift.id !== id)

    setGifts(filteredArr)

    localStorage.setItem("gifts", JSON.stringify(filteredArr))
  }

  const deleteAll = () => {
    setGifts([])
    localStorage.setItem("gifts", "[]")
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false);
  };

  const handleAdd = () => {
    addGift()
    handleClose();
  }

  const handleEdit = (id, newName, newThumbnail, newQuantity, newReceiver) => {

    const findGift = gifts.find(gift => gift.id === id)

    const updatedGift = {
      ...findGift,
      name: newName,
      thumbnail: newThumbnail,
      quantity: newQuantity,
      giftReceiver: newReceiver
    }

    const updatedGifts = gifts.map(gift => gift.id === id ? updatedGift : gift)

    setGifts(updatedGifts)

    localStorage.setItem("gifts", JSON.stringify(updatedGifts))

    handleClose();

  }


  return (
    <div className="box-section">
      <h1>Regalos</h1>

      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar Regalos
      </Button>

      <Modal
        handleAdd={handleAdd}
        setGiftName={setGiftName}
        setGiftThumbnail={setGiftThumbnail}
        setGiftQuantity={setGiftQuantity}
        open={open}
        handleClose={handleClose}
        setGiftReceiver={setGiftReceiver}
      />



      {gifts.length === 0 ?
        <h4 className='gifts-container'>Agrega un relago!</h4>
        :
        <div>
          <ul className="gifts-container">
            {gifts.map((gift) => (
              <li key={gift.id}>
                <img className='thumb' src={gift.thumbnail} alt={gift.name} />
                <div>
                  <h4>{gift.name} {gift.quantity > 1 && `X ${gift.quantity}`}</h4>
                  <p className='receiver'>{gift.giftReceiver}</p>
                </div>
                <EditIcon className='icon' onClick={() => {
                  setIdToEdit(gift.id)
                  handleClickOpenEdit()
                }} />


                {openEdit &&
                  <EditModal
                    openEdit={openEdit}
                    handleClose={handleClose}
                    gifts={gifts}
                    handleEdit={handleEdit}
                    idToEdit={idToEdit}
                  />}

                <DeleteForeverIcon className='icon' onClick={() => deleteGift(gift.id)} />
              </li>
            ))}
          </ul>
          <Button variant='outlined' onClick={deleteAll}>Eliminar todo</Button>
        </div>
      }
    </div>
  );
}

export default App;
