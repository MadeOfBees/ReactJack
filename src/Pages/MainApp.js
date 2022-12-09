import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function MainApp() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [output, setOutput] = React.useState();
    const [input, setInput] = React.useState();

    function logic() {

    }

    return (
        <div>
            <h1>INPUT HERE:</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} className="NoDoubtPut">
                    <Item className="screenText">
                        <Input></Input>
                        <Item><Button onClick={logic}>MAIN BUTTON</Button></Item>
                    </Item>
                </Stack>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            We have chosen:
                        </Typography>
                        <Typography id="modal-modal-description" className='NoCont'>
                            {output}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default MainApp;