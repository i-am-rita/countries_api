import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ data, theme }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "50px",
        }}
      >
        {data.map((detail, id) => (
          <Card
            sx={{
              maxWidth: 320,
              maxHeight: 500,
              padding: "0 0 10px 0",
            }}
            key={id}
          >
            <div key="id">
              <CardMedia sx={{ height: 200 }} image={detail?.flags.svg} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontSize="1rem"
                  fontWeight="700"
                >
                  {detail.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: "#111214" }}>Population: </span>
                  {detail.population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: "#111214" }}>Region: </span>
                  {detail.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: "#111214" }}> Capital: </span>
                  {detail.capital}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
