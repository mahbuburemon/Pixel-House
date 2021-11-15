import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ReviewPage from '../ReviewPage/ReviewPage';

const ReviewProcess = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?emaill=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Typography sx={{ color: 'info.main', m: 2 }} variant="h4" component="div">
                Product Review
            </Typography>


            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <ReviewPage
                            key={review._id}
                            review={review}

                        ></ReviewPage>)
                    }
                </Grid>
            </Box>



        </div>
    );
};

export default ReviewProcess;