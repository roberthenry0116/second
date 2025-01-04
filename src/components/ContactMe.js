import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Snackbar, Alert, } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,    
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ContactMe() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError(true);
            return;
        }
        console.log('Form submitted:', formData);

        setSuccess(true);
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}

                disableEnforceFocus
            >
                <Box sx={{ ...style, width: 400, backgroundColor:'white' }}>
                    <Container maxWidth="sm" sx={{ mt: 5 }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Contact Me
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                                required
                            />
                            <Button sx={{padding:'10px', font:'xl'}} type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Box>
                        <Snackbar
                            open={success}
                            autoHideDuration={4000}
                            onClose={() => setSuccess(false)}
                        >
                            <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                                Message sent successfully!
                            </Alert>
                        </Snackbar>
                        <Snackbar
                            open={error}
                            autoHideDuration={4000}
                            onClose={() => setError(false)}
                        >
                            <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                                Please fill in all fields.
                            </Alert>
                        </Snackbar>
                    </Container>
                </Box>
            </Modal>
        </div>
    );
}

