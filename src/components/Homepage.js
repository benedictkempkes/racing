import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, Button } from '@material-ui/core';

const Homepage = ({ series, loading }) => (
    <div>
        {(loading) ?  null : series.map(serie => (
            <Card key={serie.id}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {serie.title}
                    </Typography>
                    <Typography component="p">
                        {serie.nextRace}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Reglement
                    </Button>
                    <Button size="small" color="primary">
                        Tabellen
                    </Button>
                    <Button size="small" color="primary">
                        Rennkalender
                    </Button>
                </CardActions>
            </Card>
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    series: state.series,
    loading: state.loading
})

export default connect(mapStateToProps)(Homepage)