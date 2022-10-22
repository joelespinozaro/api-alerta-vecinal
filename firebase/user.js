import { app, db } from './firebaseConfig';
import { collection, addDoc, Timestamp } from "firebase/firestore";

const dbInstance = collection(db, 'user');

export const saveUser = ({email, phoneNumber, name, lastName}) => {
    return addDoc(dbInstance, {
        email,
        phoneNumber,
        name,
        lastName,
        updatedAt: Timestamp.fromDate(new Date),
        createdAt: Timestamp.fromDate(new Date),
    }).then((docRef) => {
        return { id: docRef.id }
    })
}


