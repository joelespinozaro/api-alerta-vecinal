import { saveUser } from '../../firebase/user'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, phoneNumber, name, lastName } = req.body;
    newUser = { email, phoneNumber, name, lastName };
    saveUser(newUser);
  } else {
    // Handle any other HTTP method
  }
}