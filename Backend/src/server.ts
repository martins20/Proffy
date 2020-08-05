import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  console.log(req.body);
  res.json({ ok: true });
});

app.listen(3333);
