import React from "react";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TextField from "@mui/material/TextField"
import Button  from "@mui/material/Button";

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = (props) => {
    return (
        <div>
            <Grid container spacing={1} border="solid 2px black">
                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth />
                </Grid>

                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>

                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </Grid>

                <Grid xs={12}>
                    <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" />
                </Grid>

                <Button variant="contained">Register</Button>
            </Grid>
        </div>
    )
}

export default Register;