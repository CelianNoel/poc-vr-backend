const express = require('express')
const app = express()
const readXlsxFile = require('read-excel-file/node')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })

//Set the materials column number
const id = 0;
const part = 1;
const name = 2;
const origin = 3;
const airPollution = 4;
const ghg = 5;
const landUse = 6;
const waste = 7;
const waterConsumption = 8;
const waterPollution = 9;
const totalEnv = 10;
const workingCondition = 11;
const animalTreatement = 12;
const totalSocial = 13;


const bag = { 
    material : {
        outside : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollution : 0,
            ghg : 0,
            landUse : 0,
            waste : 0,
            waterConsumption : 0,
            waterPollution : 0,
            totalEnv : 0,
            workingCondition : 0,
            animalTreatement : 0,
            totalSocial: 0,
        },
        inside : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollution : 0,
            ghg : 0,
            landUse : 0,
            waste : 0,
            waterConsumption : 0,
            waterPollution : 0,
            totalEnv : 0,
            workingCondition : 0,
            animalTreatement : 0,
            totalSocial: 0,
        },
        ornements : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollution : 0,
            ghg : 0,
            landUse : 0,
            waste : 0,
            waterConsumption : 0,
            waterPollution : 0,
            totalEnv : 0,
            workingCondition : 0,
            animalTreatement : 0,
            totalSocial: 0,
        },
        handle : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollution : 0,
            ghg : 0,
            landUse : 0,
            waste : 0,
            waterConsumption : 0,
            waterPollution : 0,
            totalEnv : 0,
            workingCondition : 0,
            animalTreatement : 0,
            totalSocial: 0,
        },
    },
    environmentScore : {
        airPollution : 0,
        ghg : 0,
        landUse : 0,
        waste : 0,
        waterConsumption : 0,
        waterPollution : 0,
        total : 0,
    },
    socialScore : {
        workingCondition : 0,
        animalTreatement : 0,
        total: 0,
    },
}


// File path.

function updateMaterial(material) {
    if (material[part] == "outside") {
        bag.material.outside.id = material[id];
        bag.material.outside.part = material[part];
        bag.material.outside.name = material[name];
        bag.material.outside.origin = material[origin];
        bag.material.outside.airPollution = material[airPollution];
        bag.material.outside.ghg = material[ghg];
        bag.material.outside.landUse = material[landUse];
        bag.material.outside.waste = material[waste];
        bag.material.outside.waterConsumption = material[waterConsumption];
        bag.material.outside.waterPollution = material[waterPollution];
        bag.material.outside.totalEnv = material[totalEnv];
        bag.material.outside.workingCondition = material[workingCondition];
        bag.material.outside.animalTreatement = material[animalTreatement];
        bag.material.outside.totalSocial = material[totalSocial];
    }
    if (material[part] == "inside") {
        bag.material.inside.id = material[id];
        bag.material.inside.part = material[part];
        bag.material.inside.name = material[name];
        bag.material.inside.origin = material[origin];
        bag.material.inside.airPollution = material[airPollution];
        bag.material.inside.ghg = material[ghg];
        bag.material.inside.landUse = material[landUse];
        bag.material.inside.waste = material[waste];
        bag.material.inside.waterConsumption = material[waterConsumption];
        bag.material.inside.waterPollution = material[waterPollution];
        bag.material.inside.totalEnv = material[totalEnv];
        bag.material.inside.workingCondition = material[workingCondition];
        bag.material.inside.animalTreatement = material[animalTreatement];
        bag.material.inside.totalSocial = material[totalSocial];
    }
    if (material[part] == "ornements") {
        bag.material.ornements.id = material[id];
        bag.material.ornements.part = material[part];
        bag.material.ornements.name = material[name];
        bag.material.ornements.origin = material[origin];
        bag.material.ornements.airPollution = material[airPollution];
        bag.material.ornements.ghg = material[ghg];
        bag.material.ornements.landUse = material[landUse];
        bag.material.ornements.waste = material[waste];
        bag.material.ornements.waterConsumption = material[waterConsumption];
        bag.material.ornements.waterPollution = material[waterPollution];
        bag.material.ornements.totalEnv = material[totalEnv];
        bag.material.ornements.workingCondition = material[workingCondition];
        bag.material.ornements.animalTreatement = material[animalTreatement];
        bag.material.ornements.totalSocial = material[totalSocial];
    }
    if (material[part] == "handle") {
        bag.material.handle.id = material[id];
        bag.material.handle.part = material[part];
        bag.material.handle.name = material[name];
        bag.material.handle.origin = material[origin];
        bag.material.handle.airPollution = material[airPollution];
        bag.material.handle.ghg = material[ghg];
        bag.material.handle.landUse = material[landUse];
        bag.material.handle.waste = material[waste];
        bag.material.handle.waterConsumption = material[waterConsumption];
        bag.material.handle.waterPollution = material[waterPollution];
        bag.material.handle.totalEnv = material[totalEnv];
        bag.material.handle.workingCondition = material[workingCondition];
        bag.material.handle.animalTreatement = material[animalTreatement];
        bag.material.handle.totalSocial = material[totalSocial];
    }

    
    bag.environmentScore.airPollution = bag.material.outside.airPollution + bag.material.inside.airPollution + bag.material.ornements.airPollution + bag.material.handle.airPollution;
    bag.environmentScore.ghg = bag.material.outside.ghg + bag.material.inside.ghg + bag.material.ornements.ghg + bag.material.handle.ghg;
    bag.environmentScore.landUse = bag.material.outside.landUse + bag.material.inside.landUse + bag.material.ornements.landUse + bag.material.handle.landUse;
    bag.environmentScore.waste = bag.material.outside.waste + bag.material.inside.waste + bag.material.ornements.waste + bag.material.handle.waste;
    bag.environmentScore.waterConsumption = bag.material.outside.waterConsumption + bag.material.inside.waterConsumption + bag.material.ornements.waterConsumption + bag.material.handle.waterConsumption;
    bag.environmentScore.waterPollution = bag.material.outside.waterPollution + bag.material.inside.waterPollution + bag.material.ornements.waterPollution + bag.material.handle.waterPollution;
    bag.environmentScore.total = bag.material.outside.totalEnv + bag.material.inside.totalEnv + bag.material.ornements.totalEnv + bag.material.handle.totalEnv;
    
    bag.socialScore.workingCondition = bag.material.outside.workingCondition + bag.material.inside.workingCondition + bag.material.ornements.workingCondition + bag.material.handle.workingCondition;
    bag.socialScore.animalTreatement = bag.material.outside.animalTreatement + bag.material.inside.animalTreatement + bag.material.ornements.animalTreatement + bag.material.handle.animalTreatement;
    bag.socialScore.total = bag.material.outside.totalSocial + bag.material.inside.totalSocial + bag.material.ornements.totalSocial + bag.material.handle.totalSocial;
 } 


app.get('/materials', (req,res) => {
    res.status(200).json(bag)
})

app.get('/materials/:id', (req,res) => {
    const id = parseInt(req.params.id)
    readXlsxFile('db1.xlsx').then((rows) => {
        updateMaterial(rows[id]);
        res.status(200).json(bag);
    })
})

app.listen((process.env.PORT || 5000), () => {
    console.log("Serveur à l'écoute")
  })