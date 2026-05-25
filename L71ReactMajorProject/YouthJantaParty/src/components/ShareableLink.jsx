import { useState } from "react";
import { Box, Button, TextField, Alert, Snackbar, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { ContentCopy, Share, QrCode, Close } from "@mui/icons-material";
import QRCode from "qrcode.react";

export default function ShareableLink({ formId, open, onClose }) {
    const [copied, setCopied] = useState(false);
    const [showQR, setShowQR] = useState(false);
    
    const formUrl = `${window.location.origin}/form/${formId}`;
    
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(formUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    const shareForm = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Youth Janta Party Registration',
                    text: 'Join Youth Janta Party and be part of the change!',
                    url: formUrl,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            copyToClipboard();
        }
    };
    
    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Share Registration Form
                    <IconButton onClick={onClose}><Close /></IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ p: 2 }}>
                        <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>Share this registration form with others!</Alert>
                        
                        <Box display="flex" gap={2} alignItems="center" flexWrap="wrap" sx={{ mb: 3 }}>
                            <TextField fullWidth size="small" value={formUrl} InputProps={{ readOnly: true }} sx={{ flex: 1 }} />
                            <Button variant="outlined" onClick={copyToClipboard} startIcon={<ContentCopy />}>Copy</Button>
                            <Button variant="contained" onClick={shareForm} startIcon={<Share />} sx={{ background: "linear-gradient(45deg, #FF5722 30%, #FF8A50 90%)" }}>Share</Button>
                        </Box>
                        
                        <Box textAlign="center" sx={{ mt: 2 }}>
                            <Button onClick={() => setShowQR(!showQR)} startIcon={<QrCode />}>Show QR Code</Button>
                            {showQR && (
                                <Box sx={{ mt: 2, p: 2, bgcolor: 'white', display: 'inline-block', borderRadius: 2 }}>
                                    <QRCode value={formUrl} size={200} />
                                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>Scan to open form</Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
            
            <Snackbar open={copied} autoHideDuration={2000}>
                <Alert severity="success">Link copied to clipboard!</Alert>
            </Snackbar>
        </>
    );
}
