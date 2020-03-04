import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


class RatingComponent extends React.Component {

    render() {
        return (
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Zootopia</Typography>
                    <Rating
                        name="simple-controlled"
                        value="5"
                    />
                </Box>
            </div>
        )
    }
}

export default RatingComponent;
