import React from 'react';
import './css/InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox(props) {
    const { title, cases, total } = props;
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="infoBox__cases">{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    Total {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
