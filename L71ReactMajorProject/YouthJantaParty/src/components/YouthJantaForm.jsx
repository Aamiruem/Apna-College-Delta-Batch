import { useState } from "react";
import {
    Container, Paper, TextField, Button, Typography, Box,
    FormControl, InputLabel, Select, MenuItem, RadioGroup,
    FormControlLabel, Radio, Checkbox, FormGroup, Alert,
    Snackbar, Grid, Avatar, Divider, Stepper, Step, StepLabel, 
    IconButton
} from "@mui/material";
import {
    Flag, VolunteerActivism, CheckCircle, Send, 
    Facebook, Twitter, LinkedIn, WhatsApp
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// Custom theme for Youth Janta Party
const theme = createTheme({
    palette: {
        primary: {
            main: '#FF5722',
            light: '#FF8A50',
            dark: '#C41C00',
        },
        secondary: {
            main: '#4CAF50',
        },
        background: {
            default: '#FFF8E1',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: { fontWeight: 700 },
        h6: { fontWeight: 600 },
    },
});

export default function YouthJantaForm() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "", email: "", phone: "", dateOfBirth: "", age: "",
        gender: "", address: "", city: "", state: "", pincode: "",
        education: "", occupation: "", politicalInterest: "", skills: [],
        experience: "", motivation: "", agreeTerms: false, receiveUpdates: true,
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submissionId, setSubmissionId] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const skillsList = [
        "Leadership", "Public Speaking", "Social Media Management",
        "Event Planning", "Fundraising", "Community Outreach",
        "Research & Analysis", "Legal Knowledge", "Digital Marketing",
        "Volunteer Coordination", "Content Writing", "Data Analysis"
    ];

    const steps = ['Personal Info', 'Background', 'Political Interest', 'Review'];

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const handleSkillsChange = (skill) => {
        const currentSkills = formData.skills;
        const newSkills = currentSkills.includes(skill)
            ? currentSkills.filter(s => s !== skill)
            : [...currentSkills, skill];
        setFormData({ ...formData, skills: newSkills });
    };

    const validatePersonalInfo = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateBackground = () => {
        const newErrors = {};
        if (!formData.education) newErrors.education = "Education is required";
        if (!formData.occupation) newErrors.occupation = "Occupation is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePoliticalInterest = () => {
        const newErrors = {};
        if (!formData.politicalInterest) newErrors.politicalInterest = "Please select your political interest";
        if (formData.skills.length === 0) newErrors.skills = "Please select at least one skill";
        if (!formData.motivation) newErrors.motivation = "Please share your motivation";
        if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        let isValid = false;
        if (activeStep === 0) isValid = validatePersonalInfo();
        else if (activeStep === 1) isValid = validateBackground();
        else if (activeStep === 2) isValid = validatePoliticalInterest();
        
        if (isValid) {
            setActiveStep((prev) => prev + 1);
        } else {
            setSnackbar({ open: true, message: "Please fill all required fields correctly", severity: "error" });
        }
    };

    const handleBack = () => setActiveStep((prev) => prev - 1);

    const handleSubmit = async () => {
        if (validatePoliticalInterest()) {
            try {
                const id = `YJP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                setSubmissionId(id);
                localStorage.setItem('lastSubmissionId', id);
                localStorage.setItem('lastFormData', JSON.stringify(formData));
                
                setSubmitted(true);
                setSnackbar({ open: true, message: "Registration successful! Welcome to Youth Janta Party!", severity: "success" });
                
                setTimeout(() => {
                    navigate(`/success/${id}`);
                }, 2000);
            } catch (error) {
                setSnackbar({ open: true, message: "Submission failed. Please try again.", severity: "error" });
            }
        }
    };

    const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

    const getStepContent = (step) => {
        switch (step) {
            case 0: return (
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange}
                            error={!!errors.fullName} helperText={errors.fullName} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email}
                            onChange={handleChange} error={!!errors.email} helperText={errors.email} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Phone Number" name="phone" value={formData.phone}
                            onChange={handleChange} error={!!errors.phone} helperText={errors.phone} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Date of Birth" name="dateOfBirth" type="date"
                            value={formData.dateOfBirth} onChange={handleChange} error={!!errors.dateOfBirth}
                            helperText={errors.dateOfBirth} required InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <Typography variant="subtitle1">Gender</Typography>
                            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            {errors.gender && <Typography color="error" variant="caption">{errors.gender}</Typography>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Address" name="address" multiline rows={2}
                            value={formData.address} onChange={handleChange} error={!!errors.address}
                            helperText={errors.address} required />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="City" name="city" value={formData.city}
                            onChange={handleChange} error={!!errors.city} helperText={errors.city} required />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="State" name="state" value={formData.state} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
                    </Grid>
                </Grid>
            );
            
            case 1: return (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Highest Education</InputLabel>
                            <Select name="education" value={formData.education} onChange={handleChange} error={!!errors.education}>
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="highschool">High School</MenuItem>
                                <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
                                <MenuItem value="master">Master's Degree</MenuItem>
                                <MenuItem value="doctorate">Doctorate</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                            {errors.education && <Typography color="error" variant="caption">{errors.education}</Typography>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Occupation" name="occupation" value={formData.occupation}
                            onChange={handleChange} error={!!errors.occupation} helperText={errors.occupation} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Previous Experience" name="experience" multiline rows={3}
                            value={formData.experience} onChange={handleChange}
                            placeholder="Describe any previous political or social work experience" />
                    </Grid>
                </Grid>
            );
            
            case 2: return (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Political Interest</InputLabel>
                            <Select name="politicalInterest" value={formData.politicalInterest} onChange={handleChange}
                                error={!!errors.politicalInterest}>
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="youth_wing">Youth Wing Member</MenuItem>
                                <MenuItem value="volunteer">Volunteer</MenuItem>
                                <MenuItem value="candidate">Future Candidate</MenuItem>
                                <MenuItem value="supporter">Supporter</MenuItem>
                                <MenuItem value="intern">Intern</MenuItem>
                            </Select>
                            {errors.politicalInterest && <Typography color="error" variant="caption">{errors.politicalInterest}</Typography>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom>Skills (Select all that apply)</Typography>
                        <FormGroup>
                            <Grid container spacing={1}>
                                {skillsList.map((skill) => (
                                    <Grid item xs={6} sm={4} key={skill}>
                                        <FormControlLabel control={<Checkbox checked={formData.skills.includes(skill)}
                                            onChange={() => handleSkillsChange(skill)} />} label={skill} />
                                    </Grid>
                                ))}
                            </Grid>
                        </FormGroup>
                        {errors.skills && <Typography color="error" variant="caption">{errors.skills}</Typography>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Why do you want to join Youth Janta Party?" name="motivation"
                            multiline rows={4} value={formData.motivation} onChange={handleChange}
                            error={!!errors.motivation} helperText={errors.motivation} required
                            placeholder="Share your vision and motivation to join our party..." />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox name="agreeTerms" checked={formData.agreeTerms}
                            onChange={handleChange} />}
                            label="I agree to the terms and conditions and confirm that the information provided is accurate" />
                        {errors.agreeTerms && <Typography color="error" variant="caption">{errors.agreeTerms}</Typography>}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox name="receiveUpdates" checked={formData.receiveUpdates}
                            onChange={handleChange} />}
                            label="I want to receive updates about party activities and events" />
                    </Grid>
                </Grid>
            );
            
            case 3: return (
                <Box>
                    <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>Please review your information before submitting</Alert>
                    <Paper sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom color="primary">Personal Information</Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={6}><Typography><strong>Name:</strong> {formData.fullName}</Typography></Grid>
                            <Grid item xs={6}><Typography><strong>Email:</strong> {formData.email}</Typography></Grid>
                            <Grid item xs={6}><Typography><strong>Phone:</strong> {formData.phone}</Typography></Grid>
                            <Grid item xs={6}><Typography><strong>DOB:</strong> {formData.dateOfBirth}</Typography></Grid>
                            <Grid item xs={12}><Typography><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state}</Typography></Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" gutterBottom color="primary">Background</Typography>
                        <Typography><strong>Education:</strong> {formData.education}</Typography>
                        <Typography><strong>Occupation:</strong> {formData.occupation}</Typography>
                        {formData.experience && <Typography><strong>Experience:</strong> {formData.experience}</Typography>}
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" gutterBottom color="primary">Political Interest</Typography>
                        <Typography><strong>Interest:</strong> {formData.politicalInterest}</Typography>
                        <Typography><strong>Skills:</strong> {formData.skills.join(", ")}</Typography>
                        <Typography><strong>Motivation:</strong> {formData.motivation}</Typography>
                    </Paper>
                </Box>
            );
            default: return "Unknown step";
        }
    };

    if (submitted) {
        return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
                    <Paper elevation={6} sx={{ p: 6, textAlign: "center", borderRadius: 4 }}>
                        <CheckCircle sx={{ fontSize: 80, color: "#4CAF50", mb: 2 }} />
                        <Typography variant="h4" gutterBottom>Registration Successful!</Typography>
                        <Typography variant="h6" color="primary" gutterBottom>Application ID: {submissionId}</Typography>
                        <Typography variant="body1" paragraph>Thank you for registering with Youth Janta Party. Our team will contact you within 48 hours.</Typography>
                        <Button variant="contained" color="primary" onClick={() => navigate("/")} sx={{ mt: 2 }}>Go to Homepage</Button>
                    </Paper>
                </Container>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
                <Container maxWidth="md">
                    <Paper elevation={8} sx={{ borderRadius: 4, overflow: 'hidden' }}>
                        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #FF5722 0%, #FF8A50 100%)' }}>
                            <Avatar sx={{ width: 80, height: 80, margin: '0 auto', bgcolor: 'white', color: '#FF5722', mb: 2 }}>
                                <Flag />
                            </Avatar>
                            <Typography variant="h4" gutterBottom>Youth Janta Party</Typography>
                            <Typography variant="subtitle1">Join the movement for change • Youth for Nation Building</Typography>
                        </Box>
                        <Box sx={{ p: 4 }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}
                            </Stepper>
                            <Box sx={{ mt: 4, mb: 2 }}>{getStepContent(activeStep)}</Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
                                {activeStep !== 0 && <Button onClick={handleBack} variant="outlined">Back</Button>}
                                {activeStep === steps.length - 1 ? (
                                    <Button variant="contained" color="primary" onClick={handleSubmit} startIcon={<Send />} size="large">Submit Application</Button>
                                ) : (
                                    <Button variant="contained" color="primary" onClick={handleNext} startIcon={<VolunteerActivism />} size="large">Continue</Button>
                                )}
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 3, textAlign: 'center', bgcolor: '#f9f9f9' }}>
                            <Typography variant="body2" gutterBottom>Follow us on social media</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton color="primary" href="https://facebook.com" target="_blank"><Facebook /></IconButton>
                                <IconButton color="primary" href="https://twitter.com" target="_blank"><Twitter /></IconButton>
                                <IconButton color="primary" href="https://linkedin.com" target="_blank"><LinkedIn /></IconButton>
                                <IconButton color="primary" href="https://wa.me/" target="_blank"><WhatsApp /></IconButton>
                            </Box>
                            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>© 2024 Youth Janta Party. All rights reserved.</Typography>
                        </Box>
                    </Paper>
                </Container>
                <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>{snackbar.message}</Alert>
                </Snackbar>
            </Box>
        </ThemeProvider>
    );
}
