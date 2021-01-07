import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase/app";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from '../modelos/producto';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {

    public user = firebase.auth().currentUser;
    public formulario: boolean;

    constructor(private afauth: AngularFireAuth) { }

    async getSessionActive(){
        return await new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    resolve(this.formulario = false);
                    console.log(user.displayName);
                } else {
                    reject(this.formulario = true);
                }
            })
        }).then(() => {
            console.log("Redireccionando");
        }).catch(()=> {
            console.log('Formulario servicio '+ this.formulario)
            console.log('Ningun usuario activo');
        });
    }

    public registrarUsuario(name: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(name, password).then(data => {
                console.log("Nuevo usuario registrado: ", data);
                resolve(data);
            }).catch(error => {
                console.log("Error al registrar el usuario: ", error);
                reject(error);
            })
        })
    }

    public actualizarNombre(name: string): any {
        const user = firebase.auth().currentUser;
        return new Promise((resolve, reject) => {
            user.updateProfile({
                displayName: name
            }).then(data => {
                console.log("Nuevo registro exitoso: ");
                console.log(data);
            }).catch(error => {
                console.log("Error al registrar nuevo usuario: ");
                    console.log(error);
                    reject(error);
            })
        })
    }
}
