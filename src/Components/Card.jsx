import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export default function MediaCard({ data }) {
  return (
    <CardWrapper>
      <div className="card-container">
        {data.map((detail, id) => (
          <Card className="card" key={id}>
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
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin: 0;
  width: 100%;

  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;

    padding: 0px 60px;

    .card {
      max-width: 320;
      max-height: 500;
      padding: 0 0 10px 0;
    }
  }

  @media screen and (max-width: 475px) {
    .card-container {
      grid-template-columns: 1fr;
      padding: 0 40px;

      .card {
        width: 100%;
        ${"" /* height: 500; */}
        ${"" /* padding: 0 0 10px 0; */}
      }
    }
  }
`;
