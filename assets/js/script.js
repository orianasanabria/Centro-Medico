/* Empieza Desafío 1 */

let radiologia = [
    {
        Hora: '11:00',
        Especialista: 'Ignacio Schuls',
        Paciente: 'Francisca Rojas',
        RUT: '9878782-1',
        Prevision: 'Fonasa'
    },
    {
        Hora: '11:30',
        Especialista: 'Federico Subercaseaux',
        Paciente: 'Pamela Estrada',
        RUT: '15345241-3',
        Prevision: 'Isapre'
    },
    {
        Hora: '15:00',
        Especialista: 'Fernando Wurthz',
        Paciente: 'Armando Luna',
        RUT: '16445345-9',
        Prevision: 'Isapre'
    },
    {
        Hora: '15:30',
        Especialista: 'Ana María Gudoy',
        Paciente: 'Manuel Godoy',
        RUT: '17666419-0',
        Prevision: 'Fonasa'
    },
    {
        Hora: '16:00',
        Especialista: 'Patricia Suazo',
        Paciente: 'Ramón Ulloa',
        RUT: '14989389-K',
        Prevision: 'Fonasa'
    }
];

let traumatologia = [
    {
        Hora: '8:00',
        Especialista: 'Maria Paz Altuzarra',
        Paciente: 'Paula Sanchez',
        RUT: '15554774-5',
        Prevision: 'Fonasa'
    },
    {
        Hora: '10:00',
        Especialista: 'Raul Araya',
        Paciente: 'Angélica Navas',
        RUT: '15444147-9',
        Prevision: 'Isapre'
    },
    {
        Hora: '10:30',
        Especialista: 'Maria Arriagada',
        Paciente: 'Ana Klapp',
        RUT: '17879423-9',
        Prevision: 'Isapre'
    },
    {
        Hora: '11:00',
        Especialista: 'Alejandro Badilla',
        Paciente: 'Felipe Mardones',
        RUT: '1547423-6',
        Prevision: 'Isapre'
    },
    {
        Hora: '11:30',
        Especialista: 'Cecilia Budnik',
        Paciente: 'Diego Marre',
        RUT: '16554741-k',
        Prevision: 'Fonasa'
    },
    {
        Hora: '12:00',
        Especialista: 'Arturo Cavagnaro',
        Paciente: 'Cecilia Mendez',
        RUT: '9747535-8',
        Prevision: 'Isapre'
    },
    {
        Hora: '12:30',
        Especialista: 'Andres Kanacri',
        Paciente: 'Marcial Suazo',
        RUT: '11254785-5',
        Prevision: 'Isapre'
    }
];

let dental = [
    {
        Hora: '8:30',
        Especialista: 'Andrea Zuñiga',
        Paciente: 'Marcela Retamal',
        RUT: '11123425-6',
        Prevision: 'Isapre'
    },
    {
        Hora: '11:00',
        Especialista: 'Maria Pia Zañartu',
        Paciente: 'Angel Muñoz',
        RUT: '9878789-2',
        Prevision: 'Isapre'
    },
    {
        Hora: '11:30',
        Especialista: 'Scarlett Witting',
        Paciente: 'Mario Kast',
        RUT: '7998789-5',
        Prevision: 'Fonasa'
    },
    {
        Hora: '13:00',
        Especialista: 'Francisco Von Teuber',
        Paciente: 'Karin Fernandez',
        RUT: '18887662-k',
        Prevision: 'Fonasa'
    },
    {
        Hora: '13:30',
        Especialista: 'Eduardo Viñuela',
        Paciente: 'Hugo Sanchez',
        RUT: '17665461-4',
        Prevision: 'Fonasa'
    },
    {
        Hora: '14:00',
        Especialista: 'Raquel Villaseca',
        Paciente: 'Ana Sepulveda',
        RUT: '14441281-0',
        Prevision: 'Isapre'
    }
];

document.write("<h3>Número de consultas</h3>")
document.write(`<p>Número de consultas de la especialidad de Radiología: ${radiologia.length}</p>`);
document.write(`<p>Número de consultas de la especialidad de Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Número de consultas de la especialidad de Dental: ${dental.length}</p>`);


document.write("<h3>Primeras y últimas atenciones</h3>")
document.write(`<p>Primera atención de la especialidad de Radiología: ${radiologia[0].Paciente} - ${radiologia[0].Prevision} | Última atención: ${radiologia[radiologia.length - 1].Paciente} - ${radiologia[radiologia.length - 1].Prevision}</p>`); 

document.write(`<p>Primera atención de la especialidad de Traumatología: ${traumatologia[0].Paciente} - ${traumatologia[0].Prevision} | Última atención: ${traumatologia[traumatologia.length - 1].Paciente} - ${traumatologia[traumatologia.length - 1].Prevision}</p>`); 

document.write(`<p>Primera atención de la especialidad de Dental: ${dental[0].Paciente} - ${dental[0].Prevision} | Última atención: ${dental[dental.length - 1].Paciente} - ${dental[dental.length - 1].Prevision}</p>`); 

/* Termina Desafío 1 */

/* Empieza Desafío 2 */

// 1. Agregar las siguientes horas al arreglo de Traumatología:

let newTrauma = [
    {
        Hora: '9:00',
        Especialista: 'RENÉ POBLETE',       
        Paciente: 'Ana Gellona',
        RUT: '13123329-7', 
        Prevision: 'ISAPRE'
    },
    {
        Hora: '9:30',
        Especialista: 'MARIA SOLAR',   
        Paciente: 'Ramiro Andrade',    
        RUT: '12221451-K',  
        Prevision: 'FONASA'
    },
    {
        Hora: '10:00',
        Especialista: 'RAUL LOYOLA ',    
        Paciente: 'Carmen Isla',     
        RUT: '10112348-3',  
        Prevision: 'ISAPRE'
    },
    {
        Hora: '10:30',
        Especialista: 'ANTONIO LARENAS',
        Paciente: 'Pablo Loaiza',
        RUT: '13453234-1', 
        Prevision: 'ISAPRE'
    },
    {
        Hora: '12:00',
        Especialista: 'MATIAS ARAVENA',     
        Paciente: 'Susana Poblete ',   
        RUT: '14345656-6', 
        Prevision: 'FONASA'
    }
];

let allTrauma = newTrauma.forEach(function(consulta){
    traumatologia.push(consulta);
});

// 2. Eliminar el primer y último elemento del arreglo de Radiología.

radiologia.pop();
radiologia.shift();

// 3. Lista de consultas médicas de Dental

document.write("<h3>Consultas Médicas Dentales</h3>")
dental.map(function(infoDental){
    document.write(`<p>${infoDental.Hora} - ${infoDental.Especialista} - ${infoDental.Paciente} - ${infoDental.RUT} - ${infoDental.Prevision}</p>`)
});

/*
4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para ésto,
deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.
*/

let allPacientes = radiologia.concat(traumatologia, dental);
document.write("<h3>Pacientes atendidos</h3>")
allPacientes.forEach(function(pacientesTotal) {
document.write(`<p>${pacientesTotal.Paciente}</p>`)
});

/*
5. Modificar mediante funciones las previsiones de Dental: aquellas que indican ser FONASA
cambiarlas por ISAPRE y viceversa. Luego, imprimir este resultado junto con el rut asociado a
dicha consulta, separados por punto y coma.
*/

let changePrevision = dental.map(function(change){
    if (change.Prevision === 'Fonasa') {
        change.Prevision = 'Isapre';
    }
    else if (change.Prevision === 'Isapre') {
        change.Prevision = 'Fonasa'
    }
    return change;
})

document.write("<h3>Previsiones de la especialidad Dental</h3> ")
dental.forEach(function(el){
document.write(`<p>Nombre: ${el.Paciente} ; RUT: ${el.RUT} ; Previsión: ${el.Prevision}</p>`)    
})