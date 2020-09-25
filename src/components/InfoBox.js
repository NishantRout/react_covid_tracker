import React from 'react';
import './css/InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ isRed, title, cases, active, total, onClick }) {
    return (
        <Card onClick={onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    Total {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
