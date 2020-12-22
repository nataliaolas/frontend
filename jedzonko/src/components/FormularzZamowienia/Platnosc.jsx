import React from 'react';
import { useForm } from "react-hook-form";
import { Grid, TextField, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
//     miejscowosc: yup.string().required(),
//     ulica: yup.string().required(),
//     nrbudynku: yup.number().required(),
//     nrtelefonu: yup.number().required()
// });
const OrangeCheckbox = withStyles({
    root: {
        color: orange[400],
        '&$checked': {
            color: orange[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
export default function Platnosc() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm({
        //  resolver: yupResolver(schema),
    })
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <Grid container className={classes.calykomponent}>
                <Paper elevation={3} >
                    <Grid className={classes.napis}>
                        <Grid>
                            <FormControlLabel
                                control={<OrangeCheckbox checked={state.checked} onChange={handleChange} name="checkedG" />}
                                label="Płatność przy odbiorze"
                            />
                        </Grid>
                        <Typography variant="h4" variant="overline" gutterBottom>Płatność kartą</Typography>
                    </Grid>
                    <Grid className={classes.poszczegolnegridy}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Numer karty"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Termin karty"
                            variant="outlined"
                            ref={register}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Numer seryjny"
                            variant="outlined"
                            ref={register}
                        />
                    </Grid>
                </Paper>
            </Grid>
        </form>
    )
}