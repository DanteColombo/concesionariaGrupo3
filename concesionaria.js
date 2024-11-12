const autos = require('./autos.js');
const concesionaria = {
    vehiculos:autos,
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    autosVendidos: function () {
        return this.vehiculos.filter(car => car.vendido === true)
    },
    vender:function (dominio) {
        this.vehiculos.forEach(car => {
            if(car.patente == dominio){
                car.vendido = true
            }
        })
    },
    autoFinanciable:function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },
    totalDeVentas:function (total) {
        const vendidos = this.autosVendidos();
        return vendidos.reduce((total, car) => total + car.precio, 0);
    },
    autosQuePuedeComprar:function (importe) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.precio <= importe);
    }

}

module.exports = concesionaria;