import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class Codetribe{
    
    details=[];
    tribers=[
        {name:'Baldwin',pic:'bal.png',surname:'Mahole',age:'25',email:'baldwin@gmail.com'},
        {name: 'Romeo', pic:'rom.png',surname:'Chivambu',age:'27',email:'romeo@gmail.com'},
        {name:'Winny',pic:'wi.png', surname:'Rikhotso',age:'24', email:'winny@gmail.com'},
        {name: 'Nompilo', pic:'no.png',surname:'Mofokeng',age:'24', email:'nompilo@gmail.com'},
        {name:'Nthu', pic:'nthu.png',surname:'Zitha',age:'27', email:'nthu@gmail.com'},
        {name: 'Pogisho', pic:'pog.png',surname:'Ntshecheng',age:'23', email:'pogisho@gmail.com'},];
    
 
    constructor(){
        
    }
    gettribers(){
        return this.tribers;
    }
    addDetails(index:number){
        this.details.push(this.tribers[index]);
    }
    getDetails(){
        return this.details;
    }
 }