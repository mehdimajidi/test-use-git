import express from "express";
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hi", function (req, res) {
  console.log("aaa");
  res.send("Hello Ravak");
});

app.get("/getname/:firstname/:lastname", function (req, res) {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.post("/addUser", function (req, res) {
  const { firstname, lasatname } = req.body;
  res.send(`Hello ${firstname} ${lasatname}`);
});

app.put("/updateUser", function (req, res) {
  const { firstname, lasatname } = req.body;
  res.send(`Hello ${firstname} ${lasatname}`);
});

app.delete("/deleteUser", function (req, res) {
  const { firstname, lasatname } = req.body;

  res.status(500).send("error");
});

app.listen(3000, () => {
  console.log(`Hello world app listening on port http://localhost:3000 !`);
});
