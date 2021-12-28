const express = require("express");
const fs = require("fs");
const { getAccountData, saveAccountData } = require("../utils/saving.js");
const accountRouter = require("./account.js");
const router = express.Router();

router.use(accountRouter);

accountRouter.post("/account/addAccount", (req, res) => {
  console.log("get req made");
  var existAccount = getAccountData();
  const newAccountId = Math.floor(100000 + Math.random() * 900000);

  existAccounts[newAccountId] = req.body;
  console.log(existAccount);
  saveAccountData(existAccount);
  res.send({ success: true, msg: "account added successfully" });
});
accountRouter.get("/account/list", (req, res) => {
  const accounts = getAccountData();
  res.send(accounts);
});
accountRouter.put("/account/:id", (req, res) => {
  var existAccounts = getAccountData();
  fs.readFile(
    dataPath,
    "utf8",
    (err, data) => {
      const accountId = req.params["id"];
      existAccounts[accountId] = req.body;
      saveAccountData(existAccounts);
      res.send(`accounts with id ${accountId} has been updated`);
    },
    true
  );
});
accountRouter.delete("/account/delete/:id", (req, res) => {
  fs.readFile(
    dataPath,
    "utf8",
    (err, data) => {
      var existAccounts = getAccountData();
      const userId = req.params["id"];
      delete existAccounts[userId];
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`);
    },
    true
  );
});

module.exports = { routes: router };
