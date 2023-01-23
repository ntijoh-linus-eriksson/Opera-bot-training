import React from "react";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TextField from "@mui/material/TextField"
import Button  from "@mui/material/Button";

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = (props) => {
    return (
        <div>
            <Grid container spacing={1} border="solid 2px grey" margin="10px" borderRadius={2}>
                <Grid xs={12} margin="5px">
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth />
                </Grid>

                <Grid xs={12} margin="5px">
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                </Grid>

                <Grid xs={12} margin="5px">
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                </Grid>

                <Grid xs={12} margin="5px">
                    <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" fullWidth/>
                </Grid>
                
                <Grid margin="5px">
                    <Button variant="contained">Register</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Register;