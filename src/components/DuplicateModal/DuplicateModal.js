import { useEffect } from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';

const DuplicateModal = ({ openDuplicate,
    handleClose,
    gifts,
    idToEdit,
    setGiftName,
    setGiftThumbnail,
    setGiftQuantity,
    setGiftReceiver,
    setGiftPrice,
    addGift,
    giftName,
    giftThumbnail,
    giftQuantity,
    giftPrice,
    giftReceiver
}) => {

    useEffect(() => {
        const giftToEdit = gifts.find(gift => gift.id === idToEdit)

        setGiftName(giftToEdit.name)
        setGiftThumbnail(giftToEdit.thumbnail)
        setGiftQuantity(giftToEdit.quantity)
        setGiftPrice(giftToEdit.totalPrice / giftToEdit.quantity)
        setGiftReceiver(giftToEdit.giftReceiver)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Dialog open={openDuplicate} onClose={handleClose}>
            <DialogTitle>Duplicar producto</DialogTitle>
            <DialogContent>
                <form className='add-product-form'>
                    <TextField value={giftName} label="Nombre del regalo" onChange={(e) => setGiftName(e.target.value)} variant="standard" required />
                    <TextField value={giftThumbnail} type="url" label="Url de imagen" onChange={(e) => setGiftThumbnail(e.target.value)} variant="standard" required />
                    <TextField value={giftQuantity} type="number" label="Cantidad" onChange={(e) => setGiftQuantity(e.target.value)} variant="standard" required />
                    <TextField value={giftPrice} type="number" label="Precio" onChange={(e) => setGiftPrice(e.target.value)} variant="standard" required />
                    <TextField value={giftReceiver} label="Para quien es?" onChange={(e) => setGiftReceiver(e.target.value)} variant="standard" required />
                </form>
            </DialogContent>
            <DialogActions>
                <Button color='error' variant='text' onClick={addGift}>Duplicar</Button>
                <Button color='error' variant='text' onClick={handleClose}>Cancelar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DuplicateModal