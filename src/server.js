import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "YOUR_GOOGLE_API_KEY";
const PLACE_ID = "YOUR_PLACE_ID";

app.get("/api/reviews", async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const reviews = (data.result.reviews || []).map(r => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
    }));

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
