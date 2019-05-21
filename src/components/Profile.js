import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, Button } from '@material-ui/core';

const Profile = ({ profile}) => (
    <div>
        {profile.series.map(serie => (
            <Card key={serie.id}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                       {serie.title}
                    </Typography>
                    <Typography component="p">
                        Platz {serie.rank}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Tabelle
                    </Button>
                </CardActions>
            </Card>
        ))}
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Statistiken
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h3">
                    Weltmeisterschaften
                </Typography>
                <Typography component="p">
                    <span><span>Titel</span><span>{profile.wm.titel}</span></span>
                    <span><span>Podien</span><span>{profile.wm.top3}</span></span>
                    <span><span>Top5</span><span>{profile.wm.top5}</span></span>
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h3">
                    Rennen
                </Typography>
                <Typography component="p">
                    <span>Siege</span><span>{profile.races.wins}</span>
                    <span>Podien</span><span>{profile.races.top3}</span>
                    <span>Top5</span><span>{profile.races.top5}</span>
                    <span>Schnellste Runde</span><span>{profile.races.fastest}</span>
                </Typography>
            </CardContent>
        </Card>
    </div>
)

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps)(Profile)