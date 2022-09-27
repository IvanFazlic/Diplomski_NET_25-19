// req = HTTP dolazeca poruka, res = HTTP odgovor servera
export default function handler(req, res) {
  res.status(200).json({ name: 'Hello World' })
}
