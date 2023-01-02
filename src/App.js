import { useState, useEffect, useRef } from 'react';

import Modal from './components/modal/Modal';
import EditModal from './components/EditModal/EditModal';
import DuplicateModal from './components/DuplicateModal/DuplicateModal';
import PreviewModal from './components/PreviewModal/PreviewModal';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import Spinner from './components/Spinner/Spinner';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';

import { faker } from '@faker-js/faker';

import Swal from 'sweetalert2'
import Snowfall from 'react-snowfall'

import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


function App() {

  const [gifts, setGifts] = useState([]);

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDuplicate, setOpenDuplicate] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  const [idToEdit, setIdToEdit] = useState(0);

  const [loading, setLoading] = useState(true);

  const [soundIcon, setSoundIcon] = useState(true);

  const [giftName, setGiftName] = useState('');
  const [giftThumbnail, setGiftThumbnail] = useState('');
  const [giftQuantity, setGiftQuantity] = useState('');
  const [giftReceiver, setGiftReceiver] = useState('');
  const [giftPrice, setGiftPrice] = useState(0);

  const audioRef = useRef();

  const apiGifts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem("gifts")) || [])
    }, 2000)
  })

  useEffect(() => {
    apiGifts.then((data) => {
      setGifts(data)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const addGift = () => {

    if (giftName === "") return alert("El campo no puede estar vacío")

    const existentName = gifts.some(gift => gift.name.trim().toLowerCase() === giftName.toLowerCase())
    const exitentReceiver = gifts.some(gift => gift.giftReceiver.trim().toLowerCase() === giftReceiver.toLowerCase())

    if (existentName && exitentReceiver) return alert("Ese regalo ya existe para ese destinatario")

    const idArr = gifts.map(item => item.id)
    const maxId = idArr.length === 0 ? 0 : Math.max(...idArr)

    const newGift = {
      id: maxId + 1,
      name: giftName,
      quantity: giftQuantity,
      thumbnail: giftThumbnail,
      totalPrice: giftPrice * giftQuantity,
      giftReceiver: giftReceiver
    }

    setGifts([...gifts, newGift])

    localStorage.setItem("gifts", JSON.stringify([...gifts, newGift]))

    handleClose();
  }

  const addRandomGift = () => {

    const idArr = gifts.map(item => item.id)
    const maxId = idArr.length === 0 ? 0 : Math.max(...idArr)

    const newGift = {
      id: maxId + 1,
      name: faker.commerce.product(),
      quantity: Math.floor(Math.random() * 10) + 1,
      thumbnail: faker.image.image(200, 200, true),
      totalPrice: parseInt(Math.floor(Math.random() * 1000) + 1),
      giftReceiver: faker.name.firstName()
    }

    setGifts([...gifts, newGift])

    localStorage.setItem("gifts", JSON.stringify([...gifts, newGift]))

    handleClose();
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

  const handleClickOpenDuplicate = () => {
    setOpenDuplicate(true);
  };

  const handleClickOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false);
    setOpenDuplicate(false);
    setOpenPreview(false);
  };

  const handleEdit = (id, newName, newThumbnail, newQuantity, newTotalPrice, newReceiver) => {

    const findGift = gifts.find(gift => gift.id === id)

    const updatedGift = {
      ...findGift,
      name: newName,
      thumbnail: newThumbnail,
      quantity: newQuantity,
      totalPrice: newTotalPrice * newQuantity,
      giftReceiver: newReceiver
    }

    const updatedGifts = gifts.map(gift => gift.id === id ? updatedGift : gift)

    setGifts(updatedGifts)

    localStorage.setItem("gifts", JSON.stringify(updatedGifts))

    handleClose();
  }

  const handleSong = () => {
    audioRef.current.play()

    audioRef.current.volume = 0.08
    audioRef.current.autoplay = true
    audioRef.current.muted = !audioRef.current.muted

    setSoundIcon(!soundIcon)
  }

  return (
    <>
      <Snowfall style={{zIndex: 1}}/>
      <div className="box-section">
        <h1>Regalos</h1>

        {soundIcon ?
          <VolumeUpIcon className='icon volume-icon' onClick={handleSong} />
          :
          <VolumeOffIcon className='icon volume-icon' onClick={handleSong} />
        }

        <audio ref={audioRef} src='./song/navidad.mp3' autoPlay loop muted></audio>

        {loading ?
          <Spinner />
          :
          <>
            <Button variant="outlined" onClick={handleClickOpen}>
              Agregar Regalos
            </Button>

            <Modal
              addGift={addGift}
              setGiftName={setGiftName}
              setGiftThumbnail={setGiftThumbnail}
              setGiftQuantity={setGiftQuantity}
              open={open}
              handleClose={handleClose}
              setGiftReceiver={setGiftReceiver}
              addRandomGift={addRandomGift}
              setGiftPrice={setGiftPrice}
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
                        <h4>{gift.name} {gift.quantity > 1 && `X ${gift.quantity}`} - ${gift.totalPrice}</h4>
                        <p className='receiver'>{gift.giftReceiver}</p>
                      </div>
                      <div className='buttons'>

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

                        <ControlPointDuplicateIcon className='icon' onClick={() => {
                          setIdToEdit(gift.id)
                          handleClickOpenDuplicate()
                        }} />

                        {openDuplicate &&
                          <DuplicateModal
                            openDuplicate={openDuplicate}
                            handleClose={handleClose}
                            gifts={gifts}
                            idToEdit={idToEdit}

                            setGiftName={setGiftName}
                            setGiftThumbnail={setGiftThumbnail}
                            setGiftQuantity={setGiftQuantity}
                            setGiftReceiver={setGiftReceiver}
                            setGiftPrice={setGiftPrice}
                            addGift={addGift}

                            giftName={giftName}
                            giftThumbnail={giftThumbnail}
                            giftQuantity={giftQuantity}
                            giftReceiver={giftReceiver}
                            giftPrice={giftPrice}
                          />}

                        <DeleteForeverIcon className='icon' onClick={() => deleteGift(gift.id)} />
                      </div>
                    </li>
                  ))}
                </ul>
                <h4 className='total'>Total: ${gifts.reduce((acc, gift) => acc + gift.totalPrice, 0)}</h4>
                <Button variant='outlined' onClick={deleteAll}>Eliminar todo</Button>
                <Button variant='outlined' onClick={handleClickOpenPreview}>Previsualizar</Button>

                {openPreview &&
                  <PreviewModal
                    openPreview={openPreview}
                    handleClose={handleClose}
                    gifts={gifts}
                  />
                }
              </div>
            }
          </>
        }
      </div>
    </>
  );
}

export default App;
