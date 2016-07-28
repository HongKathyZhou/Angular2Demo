export class InMemoryDataService {
  createDb() {
    let patients = [
      {id: 1, name: 'Bob Joe'},
      {id: 2, name: 'Bill T'},
      {id: 3, name: 'Ice Man'},
      {id: 4, name: 'Charles'},
      {id: 5, name: 'Magic'},
      {id: 6, name: 'Chunky'},
      {id: 7, name: 'Silk Teddy'},
      {id: 8, name: 'Kid Lupus'},
      {id: 9, name: 'Mocha Rose'},
      {id: 10, name: 'Molly Popper'}
    ];

    let funds = [
      {id: 1, name: 'General Pediatrics', ticker: 'GP'},
      {id: 2, name: 'Pediatric Cardiology, Pediatrics', ticker: 'PCP'},
      {id: 3, name: 'Pediatrics/Neonatal Care Nursing', ticker: 'PNCN'},
      {id: 4, name: 'Pediatric Ophthalmology', ticker: 'PO'},
      {id: 5, name: 'Adolescent Medicine, Pediatrics', ticker: 'AMP'},
      {id: 6, name: 'Child Abuse Pediatrics', ticker: 'CAP'},
      {id: 7, name: 'Developmental-Behavioral Pediatrics', ticker: 'DBP'},
      {id: 8, name: 'Diagnostic Laboratory Immunology', ticker: 'DLI'},
      {id: 9, name: 'Medical Toxicology', ticker: 'MT'},
      {id: 10, name: 'Neonatal-Perinatal Medicine, Pediatrics', ticker: 'NMP'},
      {id: 11, name: 'Neurodevelopmental Disabilities', ticker: 'ND'},
      {id: 12, name: 'Pediatric Dermatology', ticker: 'PD'}
    ];
    return {patients, funds};
  }
}
