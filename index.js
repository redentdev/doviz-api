const fetch = require("node-fetch");
const express = require('express');
const app = new express();
console.log("API Aktif")
app.get("/", function(req, res) {
  res.json({api: "/doviz"})
})
app.get("/doviz", function(req, res) {
  fetch(`https://dovizkurlari-l6vtviaacq-uc.a.run.app/api/doviz`).then(a => a.json()).then(x => {
      res.status(200).json({
      USD: {
      alis: x.USD.ForexBuying,
      satis: x.USD.ForexSelling
      },
      EUR: {
        alis: x.EUR.ForexBuying,
        satis: x.EUR.ForexSelling
      },
      GBP: {
        alis: x.GBP.ForexBuying,
        satis: x.GBP.ForexSelling
      }
      })
  })
})

app.listen(3000)