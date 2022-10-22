import { saveUser } from '../../firebase/user'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, phoneNumber, name, lastName } = req.body;
    const newUser = { email, phoneNumber, name, lastName };
    saveUser(newUser).then(r => {
      res.status(200).json({message: "Registro exitoso"})
    })
    
  
  } else {
    res.status(500).json({ message: 'Unauthorized' })
  }
}