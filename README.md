# Döviz API Template

### Kullanım
```js
fetch(`https://api.lunabot.ml/translate?text=merhaba&lang=en`).then(a => a.json()).then(x => {
  res.send({x.text})
```

### Çıktı
```
Hello there
```

### node-fetch sürümü
**v2.6.1**