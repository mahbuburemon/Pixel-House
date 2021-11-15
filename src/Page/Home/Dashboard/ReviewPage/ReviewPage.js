import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const ReviewPage = (props) => {

    const { name, review } = props.review

    return (
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                <CardContent>

                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        {review}

                    </Typography>

                </CardContent>

            </Card>
        </Grid>

    );
};

export default ReviewPage;