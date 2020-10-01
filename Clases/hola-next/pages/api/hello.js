// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    console.log('ESTOY DEL LADO DEL SERVER')
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
