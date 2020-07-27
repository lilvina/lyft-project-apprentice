const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(express.json())
server.use(bodyParser.json())


server.post('/test', (req, res) => {
  const { string_to_cut } = req.body

  let pointer = 0
  let finalStr = ""

  while(pointer < string_to_cut.length) {
    if(pointer % 3 === 0 && pointer >= 3) {
      finalStr += string_to_cut[pointer - 1]
    }
    pointer++
  }

  res.json({ return_string: finalStr })

})

server.listen(3000, () => {
  console.log('\n ** Server running on 3000')
})
