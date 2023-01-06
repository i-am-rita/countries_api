import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import cardDetails from "../Constants/data"

const details = [
    {
        country: sdvsd,
    },
    {
        country: sdvsd,
    },
    {
        country: sdvsd,
    }
]
export default function MediaCard() {
  return (
    <>
      {details.map(country => (
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 220 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {population}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {region}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {capital}
            </Typography> */}
          </CardContent>
          {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
      ))}
    </>
  );
}
