import {PrismaClient} from '@prisma/client'
import express from 'express'

const app = express()
const prisma = new PrismaClient()
const port = 3000

app.use(express.json())

app.post('/users', async (req, res) => {
  const name = req.body.name
  if (!name) {
    return res.status(400).send('Name is required')
  }

  console.log(`[POST] /users`)

  const user = await prisma.user.create({
    data: {
      name,
    },
  })

  console.log(`User created: ${user.name}`)

  res.send(user)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.send(users)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
