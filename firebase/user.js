import { app, db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

const dbInstance = collection(db, 'user');

export const saveUser = ({ email, phoneNumber, name, lastName }) => {
    addDoc(dbInstance, {
        email,
        phoneNumber,
        name,
        lastName,
        updatedAt: new Date().getTime(),
        createdAt: new Date().getTime(),
    }).catch(
        throwError('Error al agregar devit')
    )
}


