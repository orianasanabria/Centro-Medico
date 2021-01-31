var radiologia = [
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

var traumatologia = [
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

var dental = [
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

document.write(`Número de consultas de la especialidad de Radiología: ${radiologia.length} </br> Número de consultas de la especialidad de Traumatología: ${traumatologia.length} </br> Número de consultas de la especialidad de Dental: ${dental.length} </br>`);

document.write(`</br> Primera atención de la especialidad de Radiología: ${radiologia[0].Paciente} - ${radiologia[0].Prevision} | Última atención: ${radiologia[radiologia.length - 1].Paciente} - ${radiologia[radiologia.length - 1].Prevision}</br>`); 

document.write(`</br> Primera atención de la especialidad de Traumatología: ${traumatologia[0].Paciente} - ${traumatologia[0].Prevision} | Última atención: ${traumatologia[traumatologia.length - 1].Paciente} - ${traumatologia[traumatologia.length - 1].Prevision} </br>`); 

document.write(`</br> Primera atención de la especialidad de Dental: ${dental[0].Paciente} - ${dental[0].Prevision} | Última atención: ${dental[dental.length - 1].Paciente} - ${dental[dental.length - 1].Prevision}</br>`); 
