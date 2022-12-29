import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

const PreviewModal = ({ openPreview, handleClose, gifts }) => {

    const [showButton, setShowButton] = useState(true)

    const handlePrint = () => {
        setShowButton(!showButton)
        setTimeout(() => {
            window.print()
            handleClose()
        }, 100)
    }

    return (
        <Dialog open={openPreview} onClose={handleClose}>
            <DialogTitle>Lista de regalos</DialogTitle>
            <DialogContent className='preview-modal'>

                {gifts.map(gift => (
                    <li key={gift.id}>
                        <img className='thumb' src={gift.thumbnail} alt={gift.name} />
                        <div>
                            <h4>{gift.name} {gift.quantity > 1 && `X ${gift.quantity}`}</h4>
                            <p className='receiver'>{gift.giftReceiver}</p>
                        </div>
                    </li>
                ))}

            </DialogContent>
            <DialogActions>
                <Button className={showButton ? '' : 'hide-btn'} onClick={handleClose}>Cerrar</Button>
                <Button className={showButton ? '' : 'hide-btn'} onClick={handlePrint}>Imprimir</Button>
            </DialogActions>
        </Dialog>
    )
}

export default PreviewModal