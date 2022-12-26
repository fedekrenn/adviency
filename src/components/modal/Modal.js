import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Modal = ({ handleAdd, setGiftName, setGiftThumbnail, setGiftQuantity, setGiftPrice, handleClose, open, setGiftReceiver, addRandomGift }) => {

    

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar un regalo</DialogTitle>
            <DialogContent>
                <form className='add-product-form'>
                    <TextField label="Nombre del regalo" variant="standard" onChange={(e) => setGiftName(e.target.value)} required />
                    <TextField type="url" label="Url de imagen" variant="standard" onChange={(e) => setGiftThumbnail(e.target.value)} required />
                    <TextField type="number" label="Cantidad" variant="standard" onChange={(e) => setGiftQuantity(e.target.value)} required />
                    <TextField type="number" label="Precio" variant="standard" onChange={(e) => setGiftPrice(e.target.value)} required />
                    <TextField label="Para quien es?" variant="standard" onChange={(e) => setGiftReceiver(e.target.value)} required />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={addRandomGift}>Agregar aleatorio</Button>
                <Button onClick={handleAdd}>Agregar</Button>
                <Button onClick={handleClose}>Cancelar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal