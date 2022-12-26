import { useState, useEffect } from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';

const EditModal = ({ handleClose, openEdit, gifts, handleEdit, idToEdit }) => {

    const [id, setId] = useState(0)

    const [changedName, setChangedName] = useState('')
    const [changedThumbnail, setChangedThumbnail] = useState('')
    const [changedQuantity, setChangedQuantity] = useState('')
    const [cangedPrice, setChangedPrice] = useState('')
    const [changedGiftReceiver, setChangedGiftReceiver] = useState('')

    const handleEditGift = () => {
        handleEdit(id, changedName, changedThumbnail, changedQuantity, cangedPrice, changedGiftReceiver)
        handleClose()
    }

    useEffect(() => {
        const giftToEdit = gifts.find(gift => gift.id === idToEdit)

        setChangedName(giftToEdit.name)
        setChangedThumbnail(giftToEdit.thumbnail)
        setChangedQuantity(giftToEdit.quantity)
        setChangedPrice(giftToEdit.totalPrice / giftToEdit.quantity)
        setChangedGiftReceiver(giftToEdit.giftReceiver)
        setId(giftToEdit.id)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Dialog open={openEdit} onClose={handleClose}>
            <DialogTitle>Modificar "{changedName}"</DialogTitle>
            <DialogContent>
                <form className='add-product-form'>
                    <TextField value={changedName} label="Nombre del regalo" onChange={(e) => setChangedName(e.target.value)} variant="standard" required />
                    <TextField value={changedThumbnail} type="url" label="Url de imagen" onChange={(e) => setChangedThumbnail(e.target.value)} variant="standard" required />
                    <TextField value={changedQuantity} type="number" label="Cantidad" onChange={(e) => setChangedQuantity(e.target.value)} variant="standard" required />
                    <TextField value={cangedPrice} type="number" label="Precio" onChange={(e) => setChangedPrice(e.target.value)} variant="standard" required />
                    <TextField value={changedGiftReceiver} label="Para quien es?" onChange={(e) => setChangedGiftReceiver(e.target.value)} variant="standard" required />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEditGift}>Aplicar cambios</Button>
                <Button onClick={handleClose}>Cancelar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditModal