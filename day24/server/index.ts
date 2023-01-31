import express from "express";
import fs from "fs";
import type { Videogame } from "./domain/videogame";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// at /videogame open file, videogames.json, and return that to client
app.get("/videogame", function (req, res) {
  const videogames = fs.readFileSync("./videogames.json");
  res.send(videogames);
});

app.post("/videogame", function (req, res) {
  // req.body has the incoming JSON data
  const name = req.body.name;
  const platform = req.body.platform;
  const yearOfRelease = req.body.yearOfRelease;
  const genre = req.body.genre;
  const ratingESRB = req.body.ratingESRB;
  const goodGame = req.body.goodGame;
  const videogame: Videogame = {
    name: name,
    platform: platform,
    yearOfRelease: yearOfRelease,
    genre: genre,
    ratingESRB: ratingESRB,
    goodGame: goodGame,
  };

  // read file, add videogame to array, save the file
  const videogames: Videogame[] = JSON.parse(
    fs.readFileSync("./videogames.json") as any as string
  );

  videogames.push(videogame);
  fs.writeFileSync("./videogames.json", JSON.stringify(videogames));

  res.send(videogame);
});

app.listen("3002");
