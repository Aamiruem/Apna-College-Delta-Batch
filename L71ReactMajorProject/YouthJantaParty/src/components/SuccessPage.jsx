import { useParams, useNavigate } from "react-router-dom";
import { Container, Paper, Typography, Button, Box, Avatar, Divider, IconButton } from "@mui/material";
import { CheckCircle, Share, Home, WhatsApp, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
    palette: { primary: { main: '#FF5722' } },
    typography: { fontFamily: '"Poppins", "Roboto", sans-serif' },
});

export default function SuccessPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const copyToClipboard = () => {
        const formUrl = `${window.location.origin}/form/yjp-registration`;
        navigator.clipboard.writeText(formUrl);
        alert("Link copied to clipboard!");
    };
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', py: 4 }}>
                <Container maxWidth="md">
                    <Paper elevation={24} sx={{ p: 6, textAlign: "center", borderRadius: 4 }}>
                        <Avatar sx={{ width: 100, height: 100, margin: '0 auto', bgcolor: '#4CAF50', mb: 2 }}>
                            <CheckCircle sx={{ fontSize: 60, color: 'white' }} />
                        </Avatar>
                        
                        <Typography variant="h3" gutterBottom sx={{ color: '#FF5722', fontWeight: 'bold', mt: 3 }}>
                            Registration Successful!
                        </Typography>
                        
                        <Typography variant="h5" gutterBottom>Welcome to Youth Janta Party</Typography>
                        
                        <Paper elevation={3} sx={{ p: 3, bgcolor: '#f5f5f5', my: 3, borderRadius: 2 }}>
                            <Typography variant="body2" color="text.secondary">Your Application ID</Typography>
                            <Typography variant="h4" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#FF5722' }}>{id}</Typography>
                        </Paper>
                        
                        <Typography variant="body1" paragraph>
                            Thank you for registering with Youth Janta Party! Our team will review your application and contact you within 48 hours.
                        </Typography>
                        
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4, flexWrap: 'wrap' }}>
                            <Button variant="contained" size="large" onClick={copyToClipboard} startIcon={<Share />}>
                                Share Form
                            </Button>
                            <Button variant="outlined" size="large" onClick={() => navigate("/")} startIcon={<Home />}>
                                Go to Homepage
                            </Button>
                        </Box>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="body2" color="text.secondary">
                            Follow us on social media for updates
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                            <IconButton color="primary" href="https://facebook.com" target="_blank"><Facebook /></IconButton>
                            <IconButton color="primary" href="https://twitter.com" target="_blank"><Twitter /></IconButton>
                            <IconButton color="primary" href="https://linkedin.com" target="_blank"><LinkedIn /></IconButton>
                            <IconButton color="primary" href="https://wa.me/" target="_blank"><WhatsApp /></IconButton>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
