import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


export default function Menu({modulus_state, multiplier_state, color_loops_state}) {

  const [modulus, setModulus] = modulus_state;
  const [multiplier, setMultiplier] = multiplier_state;
  const [color_loops, setColorLoops] = color_loops_state;

  return (
      <Container   sx={{
        display: 'flex',
        padding: '10px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        boxShadow: 1,
        fontWeight: 'bold',
        position: 'absolute',
        top: 'calc(100% - 100px)',
        minHeight: '100px',
        justifyContent: 'center'
      }} maxWidth="100%">
        <Box sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={
                        {
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }
                    }>
                <TextField
                    sx={
                        {
                            minWidth: '300px'
                        }
                    }
                    id="outlined-basic"
                    label="Modulus"
                    variant="outlined"
                    type="number"
                    defaultValue={modulus}
                    inputProps={
                        { inputMode: 'numeric', pattern: '[0-9]*' }
                    }
                    onChange={(event) => setModulus(event.target.value)}
                />
            </Box>
            <Box sx={
                        {
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }
                    }>
                <TextField
                    sx={
                        {
                            minWidth: '300px'
                        }
                    }
                    id="outlined-basic"
                    label="Multiplier"
                    variant="outlined"
                    type="number"
                    defaultValue={multiplier}
                    onChange={(event) => setMultiplier(event.target.value)}
                    inputProps={
                        { inputMode: 'numeric', pattern: '[0-9]*' }
                    }
                />
            </Box>
        </Box>
        <Box sx={{
            flexDirection: 'column',
            flexWrap: 'wrap',
            paddingLeft: '10px'
        }}>
            <FormControlLabel
                color={"warning"} control={
                    <Checkbox defaultChecked onChange={(event) => setColorLoops(event.target.checked)} />
                }
                label={<Typography style={{color: "#ffffff"}}>Color Lines</Typography>} />
        </Box>
      </Container>

  );
}
