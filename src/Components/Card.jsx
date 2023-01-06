import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { flexbox } from "@mui/system";
// import cardDetails from "../Constants/data"

const details = [
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
  {
    country: "fdfvs",
    population: "vsfvsd",
    region: "svsxdv",
    capital: "Svxv",
  },
];
export default function MediaCard({ country, population, region, capital }) {
  return (
    <>
      <div
        style={{
        display: "grid",
        gridTemplateColumns:"repeat(4, 1fr)",
        gap: "50px",
        }}
      >
        {details.map(() => (
          <Card sx={{ maxWidth: 320 }}>
            <div>
              <CardMedia
                sx={{ height: 255 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {capital}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
