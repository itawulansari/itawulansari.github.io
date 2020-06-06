const express - require ('express')
const app - express()

const port = process.env.PORT || 3000

app.use('/', (req,res)=>{
  res.send('Berhasil hosting')
})

app.listen(purl,()=>{
  console.log('web is running')
})
