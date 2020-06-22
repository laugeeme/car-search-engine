'use strict';

// create years in the options form
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 15;

for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  document.querySelector('#year').appendChild(option);
}

function getAutos() {
  return [
    {
      marca: 'BMW',
      modelo: 'Serie 3',
      year: 2012,
      precio: 30000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A4',
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2015,
      precio: 20000,
      puertas: 2,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A6',
      year: 2010,
      precio: 35000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2016,
      precio: 70000,
      puertas: 4,
      color: 'Rojo',
      transmision: 'automatico',
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2015,
      precio: 25000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Chevrolet',
      modelo: 'Camaro',
      year: 2018,
      precio: 60000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2019,
      precio: 80000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual',
    },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2017,
      precio: 40000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A3',
      year: 2017,
      precio: 55000,
      puertas: 2,
      color: 'Negro',
      transmision: 'manual',
    },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2012,
      precio: 25000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual',
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2018,
      precio: 45000,
      puertas: 4,
      color: 'Azul',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2019,
      precio: 90000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2017,
      precio: 60000,
      puertas: 2,
      color: 'Negro',
      transmision: 'manual',
    },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2015,
      precio: 35000,
      puertas: 2,
      color: 'Azul',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 3',
      year: 2018,
      precio: 50000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2017,
      precio: 80000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico',
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A4',
      year: 2016,
      precio: 30000,
      puertas: 4,
      color: 'Azul',
      transmision: 'automatico',
    },
  ];
}

//Globarl data for the search. This object will be updated in every applied filter
let dataSearch = {
  marca: '',
  year: '',
  minimum: '',
  maximum: '',
  puertas: '',
  transmision: '',
  color: '',
};

//Shows the autos in each applied filter
function showAutos(autos) {
  const container = document.querySelector('#resultado');

  //clean previous results
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  //Build the html from autos
  autos.forEach((auto) => {
    const autoHTML = document.createElement('p');
    autoHTML.innerHTML = `
      <p> ${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color ${auto.color}</p>
      
      `;
    container.appendChild(autoHTML);
  });
}

function filterAuto() {
  const result = getAutos()
    .filter(filterBrand)
    .filter(filterYear)
    .filter(filterMinimum)
    .filter(filterMaximum)
    .filter(filterDoors)
    .filter(filterTransmision)
    .filter(filterColor);

  if (result.length) {
    showAutos(result);
  } else {
    alert('No hay resultados');
  }
}

function filterBrand(auto) {
  if (dataSearch.marca) {
    return auto.marca === dataSearch.marca;
  } else {
    return auto;
  }
}

function filterYear(auto) {
  if (dataSearch.year) {
    return auto.year === dataSearch.year;
  } else {
    return auto;
  }
}

function filterMinimum(auto) {
  if (dataSearch.minimum) {
    return auto.precio >= dataSearch.minimum;
  } else {
    return auto;
  }
}

function filterMaximum(auto) {
  if (dataSearch.maximum) {
    return auto.precio <= dataSearch.maximum;
  } else {
    return auto;
  }
}

function filterDoors(auto) {
  if (dataSearch.puertas) {
    return auto.puertas === dataSearch.puertas;
  } else {
    return auto;
  }
}

function filterTransmision(auto) {
  if (dataSearch.transmision) {
    return auto.transmision === dataSearch.transmision;
  } else {
    return auto;
  }
}

function filterColor(auto) {
  if (dataSearch.color) {
    return auto.color === dataSearch.color;
  } else {
    return auto;
  }
}

//Event Listener from DOM Loaded
const autos = getAutos();
document.addEventListener('DOMContentLoaded', () => {
  showAutos(autos);
});

//Event Listeners form
const brand = document.querySelector('#marca');
brand.addEventListener('input', (e) => {
  dataSearch.marca = e.target.value;
  //filter autos
  filterAuto();
});

const year = document.querySelector('#year');
year.addEventListener('input', (e) => {
  dataSearch.year = Number(e.target.value); //save the year as a number, not string
  filterAuto();
});

const minimum = document.querySelector('#minimo');
minimum.addEventListener('input', (e) => {
  dataSearch.minimum = Number(e.target.value);
  filterAuto();
});

const maximum = document.querySelector('#maximo');
maximum.addEventListener('input', (e) => {
  dataSearch.maximum = Number(e.target.value);
  filterAuto();
});

const doors = document.querySelector('#puertas');
doors.addEventListener('input', (e) => {
  dataSearch.puertas = Number(e.target.value);
  filterAuto();
});

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', (e) => {
  dataSearch.transmision = e.target.value;
  filterAuto();
});

const color = document.querySelector('#color');
color.addEventListener('input', (e) => {
  dataSearch.color = e.target.value;
  filterAuto();
});
