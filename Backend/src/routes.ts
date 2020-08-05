import { Router } from "express";

const routes = Router()

routes.get("/users", (req, res) => {
  console.log(req.body);
  res.json({ ok: true });
});

export default routes
