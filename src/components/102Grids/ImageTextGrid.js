import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';

function ImageTextGrid(props) {
    return (
        <div className="ImageTextGrid">
            <Grid container spacing={16}>
                <Grid item xs={6}>
                    <div className="bottom">
                        <Grid container spacing={16}>
                            <Grid item xs={4}>
                                <div className="left">
                                    <img src={require(props.img)} alt="" />
                                </div>
                            </Grid>
                            <Grid item xs={8}>
                                <div className="right">
                                    <h4>{props.title}</h4>
                                    <p>{props.p}</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default withTranslation()(ImageTextGrid);