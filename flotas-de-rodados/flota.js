class Corsa{
    constructor(col){
        this.color = col

    }
    getColor(){return this.color}
	capacidad(){return 4}
	velocidadMaxima(){return 150}
	peso(){return 1300}
}
class Kwid{
    constructor(tanque){
        this.tieneTanqueAdicional = tanque
    }
    
    setTieneTanque(tanqe){
        this.tieneTanqueAdicional = tanqe
    }
    getTieneTanque(){
        return this.tieneTanqueAdicional
    }

	capacidad(){
        if(this.tieneTanqueAdicional){
            return 3
        }else{
            return 4
        }
    }
	velocidadMaxima() {if(this.tieneTanqueAdicional){return 120}else{return 110}}
	peso(){ if(this.tieneTanqueAdicional){return 1350}else{return 1200}}
	olor(){return azul}
}
const trafic = {
    this:motor = null,
	this:interior = null,
    
    setTieneMotor(op){this.motor = op},
    getTieneMotor(){this.motor},
    setQueInteriorTiene(int){this.interior = int},
    getQueInteriorTiene(){return interior},
	capacidad(){return this.interior.capacidad()},
	velocidadMaxima(){return this.motor.velocidadMaxima()},
	peso(){return 4000 + this.motor.peso() + this.interior.peso()},
	color(){return blanco}
}

const interiorComodo = {
	capacidad :() => 5,
	peso:() => 700
}
const interiorPopular = {
	capacidad :() =>  12,
	peso:() => 1000
}
const motorPulente = {
	peso:() => 800,
	velocidadMaxima:() => 130
}
const motorBataton = { 
	peso:() => 500,
	velocidadMaxima:() => 80
}

class AutoEspecial{
    constructor(p,c,v,col){
        peso = p
	    capacidad = c
	    velocidadMaxima = v
        color = col
    }

    setPeso(pes){
        peso = pes
    }
    getPeso(){
        return peso
    }

    setCapacidad(cap){
        capacidad = cap
    }
    getCapacidad(){
        return capacidad
    }

    setVelocidadMaxima(vm){
        velocidadMaxima = vm
    }
    getVelocidadMaxima(){
        return velocidadMaxima
    }

    setColor(col){
        color = col
    }
    getColor(){
        return color
    }
}

const azul = {}
const rojo = {}
const verde = {}
const blanco = {}
const beige = {}

class Dependencia{
    constructor(cantidad){
        flota = []
        empleado = cantidad
    }
		
	agregarFlota(rodado){flota.push(rodado)}
	pesoTotalFlota(){
        var sum
        flota.forEach(fl => sum += fl.peso())
        return sum
    }
	estaBienEquipado(){return flota.length >= 3 && flota.every(rodado => rodado.velocidadMaxima() > 100)}
	capacidadTotalEnColor(color){
		var flotaAux = flota.filter(rodado => rodado.color() == color)
		return flotaAux.sum(rodado => rodado.capacidad())
	}
	colorDelRodadoMasRapido(){return flota.max(rodado => rodado.velocidadMaxima()).color()}
	capacidadFaltante(){return empleado - (flota.sum(rodado => rodado.capacidad()))}
	esGrande(){return empleado >= 40 && flota.length >= 5}
}