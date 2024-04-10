
const express = require('express')
const path = require("path");
const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: [''],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('https://www.facebook.com/profile.php?id=100083772122314&mibextid=ZbWKwL', options))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Svelte app listening at http://localhost:${port}`)
})
