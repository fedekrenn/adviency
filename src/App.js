import { useState } from 'react';

import Modal from './components/modal/Modal';

import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {

  const [gifts, setGifts] = useState(JSON.parse(localStorage.getItem("gifts")) || []);

  const [open, setOpen] = useState(false);
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    addGift()
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
