import React from 'react';

class Car extends React.Component {
    
    constructor(name) {
        this.brand = name;
    }
    
    present() {
        return 'I have a ' + this.brand;
    }
}
var mycar = new Car("Ford");
mycar.present();

export default Car;



