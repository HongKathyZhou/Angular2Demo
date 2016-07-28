"use strict";
class InMemoryDataService {
    createDb() {
        let patients = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        let funds = [
            { id: 1, name: 'General Pediatrics', ticker: 'AMCR1' },
            { id: 2, name: 'Pediatric Cardiology, Pediatrics', ticker: 'AMCR2' },
            { id: 3, name: 'Pediatrics/Neonatal Care Nursing', ticker: 'AMCR3' },
            { id: 4, name: 'Pediatric Ophthalmology', ticker: 'FDAF1' },
            { id: 5, name: 'Adolescent Medicine, Pediatrics', ticker: 'FDAF2' },
            { id: 6, name: 'Child Abuse Pediatrics', ticker: 'TRPEF1' },
            { id: 7, name: 'Developmental-Behavioral Pediatrics', ticker: 'TRPEB' },
            { id: 8, name: 'Diagnostic Laboratory Immunology', ticker: 'TAACB' },
            { id: 9, name: 'Medical Toxicology', ticker: 'TAACI' },
            { id: 10, name: 'Neonatal-Perinatal Medicine, Pediatrics', ticker: 'VANGI' },
            { id: 11, name: 'Neurodevelopmental Disabilities', ticker: 'VANGI' },
            { id: 12, name: 'Pediatric Dermatology', ticker: 'VANGI' }
        ];
        return { patients: patients, funds: funds };
    }
}
exports.InMemoryDataService = InMemoryDataService;
