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
const airPollutionValue = 4;
const airPollutionScore = 5;
const ghgValue = 6;
const ghgScore = 7;
const landUseValue = 8;
const landUseScore = 9;
const wasteValue = 10;
const wasteScore = 11;
const waterConsumptionValue = 12;
const waterConsumptionScore = 13;
const waterPollutionValue = 14;
const waterPollutionScore = 15;
const totalEnv = 16;
const workingConditionValue = 17;
const workingConditionScore = 18;
const animalTreatementValue = 19;
const animalTreatementScore = 20;
const totalSocial = 21;


const bag = { 
    material : {
        outside : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollutionValue : 0,
            airPollutionScore : 0,
            ghgValue : 0,
            ghgScore : 0,
            landUseValue : 0,
            landUseScore : 0,
            wasteValue : 0,
            wasteScore : 0,
            waterConsumptionValue : 0,
            waterConsumptionScore : 0,
            waterPollutionValue : 0,
            waterPollutionScore : 0,
            totalEnv : 0,
            workingConditionValue : 0,
            workingConditionScore : 0,
            animalTreatementValue : 0,
            animalTreatementScore : 0,
            totalSocial: 0,
        },
        inside : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollutionValue : 0,
            airPollutionScore : 0,
            ghgValue : 0,
            ghgScore : 0,
            landUseValue : 0,
            landUseScore : 0,
            wasteValue : 0,
            wasteScore : 0,
            waterConsumptionValue : 0,
            waterConsumptionScore : 0,
            waterPollutionValue : 0,
            waterPollutionScore : 0,
            totalEnv : 0,
            workingConditionValue : 0,
            workingConditionScore : 0,
            animalTreatementValue : 0,
            animalTreatementScore : 0,
            totalSocial: 0,
        },
        ornements : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollutionValue : 0,
            airPollutionScore : 0,
            ghgValue : 0,
            ghgScore : 0,
            landUseValue : 0,
            landUseScore : 0,
            wasteValue : 0,
            wasteScore : 0,
            waterConsumptionValue : 0,
            waterConsumptionScore : 0,
            waterPollutionValue : 0,
            waterPollutionScore : 0,
            totalEnv : 0,
            workingConditionValue : 0,
            workingConditionScore : 0,
            animalTreatementValue : 0,
            animalTreatementScore : 0,
            totalSocial: 0,
        },
        handle : {
            id : 0,
            part : "",
            name : "",
            origin : "",
            airPollutionValue : 0,
            airPollutionScore : 0,
            ghgValue : 0,
            ghgScore : 0,
            landUseValue : 0,
            landUseScore : 0,
            wasteValue : 0,
            wasteScore : 0,
            waterConsumptionValue : 0,
            waterConsumptionScore : 0,
            waterPollutionValue : 0,
            waterPollutionScore : 0,
            totalEnv : 0,
            workingConditionValue : 0,
            workingConditionScore : 0,
            animalTreatementValue : 0,
            animalTreatementScore : 0,
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
        bag.material.outside.airPollutionValue = material[airPollutionValue];
        bag.material.outside.airPollutionScore = material[airPollutionScore];
        bag.material.outside.ghgValue = material[ghgValue];
        bag.material.outside.ghgScore = material[ghgScore];
        bag.material.outside.landUseValue = material[landUseValue];
        bag.material.outside.landUseScore = material[landUseScore];
        bag.material.outside.wasteValue = material[wasteValue];
        bag.material.outside.wasteScore = material[wasteScore];
        bag.material.outside.waterConsumptionValue = material[waterConsumptionValue];
        bag.material.outside.waterConsumptionScore = material[waterConsumptionScore];
        bag.material.outside.waterPollutionValue = material[waterPollutionValue];
        bag.material.outside.waterPollutionScore = material[waterPollutionScore];
        bag.material.outside.totalEnv = material[totalEnv];
        bag.material.outside.workingConditionValue = material[workingConditionValue];
        bag.material.outside.workingConditionScore = material[workingConditionScore];
        bag.material.outside.animalTreatementValue = material[animalTreatementValue];
        bag.material.outside.animalTreatementScore = material[animalTreatementScore];
        bag.material.outside.totalSocial = material[totalSocial];
    }
    if (material[part] == "inside") {
        bag.material.inside.id = material[id];
        bag.material.inside.part = material[part];
        bag.material.inside.name = material[name];
        bag.material.inside.origin = material[origin];
        bag.material.inside.airPollutionValue = material[airPollutionValue];
        bag.material.inside.airPollutionScore = material[airPollutionScore];
        bag.material.inside.ghgValue = material[ghgValue];
        bag.material.inside.ghgScore = material[ghgScore];
        bag.material.inside.landUseValue = material[landUseValue];
        bag.material.inside.landUseScore = material[landUseScore];
        bag.material.inside.wasteValue = material[wasteValue];
        bag.material.inside.wasteScore = material[wasteScore];
        bag.material.inside.waterConsumptionValue = material[waterConsumptionValue];
        bag.material.inside.waterConsumptionScore = material[waterConsumptionScore];
        bag.material.inside.waterPollutionValue = material[waterPollutionValue];
        bag.material.inside.waterPollutionScore = material[waterPollutionScore];
        bag.material.inside.totalEnv = material[totalEnv];
        bag.material.inside.workingConditionValue = material[workingConditionValue];
        bag.material.inside.workingConditionScore = material[workingConditionScore];
        bag.material.inside.animalTreatementValue = material[animalTreatementValue];
        bag.material.inside.animalTreatementScore = material[animalTreatementScore];
        bag.material.inside.totalSocial = material[totalSocial];
    }
    if (material[part] == "ornements") {
        bag.material.ornements.id = material[id];
        bag.material.ornements.part = material[part];
        bag.material.ornements.name = material[name];
        bag.material.ornements.origin = material[origin];
        bag.material.ornements.airPollutionValue = material[airPollutionValue];
        bag.material.ornements.airPollutionScore = material[airPollutionScore];
        bag.material.ornements.ghgValue = material[ghgValue];
        bag.material.ornements.ghgScore = material[ghgScore];
        bag.material.ornements.landUseValue = material[landUseValue];
        bag.material.ornements.landUseScore = material[landUseScore];
        bag.material.ornements.wasteValue = material[wasteValue];
        bag.material.ornements.wasteScore = material[wasteScore];
        bag.material.ornements.waterConsumptionValue = material[waterConsumptionValue];
        bag.material.ornements.waterConsumptionScore = material[waterConsumptionScore];
        bag.material.ornements.waterPollutionValue = material[waterPollutionValue];
        bag.material.ornements.waterPollutionScore = material[waterPollutionScore];
        bag.material.ornements.totalEnv = material[totalEnv];
        bag.material.ornements.workingConditionValue = material[workingConditionValue];
        bag.material.ornements.workingConditionScore = material[workingConditionScore];
        bag.material.ornements.animalTreatementValue = material[animalTreatementValue];
        bag.material.ornements.animalTreatementScore = material[animalTreatementScore];
        bag.material.ornements.totalSocial = material[totalSocial];
    }
    if (material[part] == "handle") {
        bag.material.handle.id = material[id];
        bag.material.handle.part = material[part];
        bag.material.handle.name = material[name];
        bag.material.handle.origin = material[origin];
        bag.material.handle.airPollutionValue = material[airPollutionValue];
        bag.material.handle.airPollutionScore = material[airPollutionScore];
        bag.material.handle.ghgValue = material[ghgValue];
        bag.material.handle.ghgScore = material[ghgScore];
        bag.material.handle.landUseValue = material[landUseValue];
        bag.material.handle.landUseScore = material[landUseScore];
        bag.material.handle.wasteValue = material[wasteValue];
        bag.material.handle.wasteScore = material[wasteScore];
        bag.material.handle.waterConsumptionValue = material[waterConsumptionValue];
        bag.material.handle.waterConsumptionScore = material[waterConsumptionScore];
        bag.material.handle.waterPollutionValue = material[waterPollutionValue];
        bag.material.handle.waterPollutionScore = material[waterPollutionScore];
        bag.material.handle.totalEnv = material[totalEnv];
        bag.material.handle.workingConditionValue = material[workingConditionValue];
        bag.material.handle.workingConditionScore = material[workingConditionScore];
        bag.material.handle.animalTreatementValue = material[animalTreatementValue];
        bag.material.handle.animalTreatementScore = material[animalTreatementScore];
        bag.material.handle.totalSocial = material[totalSocial];
    }

    
    bag.environmentScore.airPollution = Number(((bag.material.outside.airPollutionScore + bag.material.inside.airPollutionScore + bag.material.ornements.airPollutionScore + bag.material.handle.airPollutionScore) / 4).toFixed(0));
    bag.environmentScore.ghg = Number(((bag.material.outside.ghgScore + bag.material.inside.ghgScore + bag.material.ornements.ghgScore + bag.material.handle.ghgScore)/4).toFixed(0));
    bag.environmentScore.landUse = Number(((bag.material.outside.landUseScore + bag.material.inside.landUseScore + bag.material.ornements.landUseScore + bag.material.handle.landUseScore)/4).toFixed(0));
    bag.environmentScore.waste = Number(((bag.material.outside.wasteScore + bag.material.inside.wasteScore + bag.material.ornements.wasteScore + bag.material.handle.wasteScore)/4).toFixed(0));
    bag.environmentScore.waterConsumption = Number(((bag.material.outside.waterConsumptionScore + bag.material.inside.waterConsumptionScore + bag.material.ornements.waterConsumptionScore + bag.material.handle.waterConsumptionScore)/4).toFixed(0));
    bag.environmentScore.waterPollution = Number(((bag.material.outside.waterPollutionScore + bag.material.inside.waterPollutionScore + bag.material.ornements.waterPollutionScore + bag.material.handle.waterPollutionScore)/4).toFixed(0));
    bag.environmentScore.total = Number(((bag.material.outside.totalEnv + bag.material.inside.totalEnv + bag.material.ornements.totalEnv + bag.material.handle.totalEnv)/4).toFixed(0));
    
    bag.socialScore.workingCondition = Number(((bag.material.outside.workingConditionScore + bag.material.inside.workingConditionScore + bag.material.ornements.workingConditionScore + bag.material.handle.workingConditionScore)/4).toFixed(0));
    bag.socialScore.animalTreatement = Number(((bag.material.outside.animalTreatementScore + bag.material.inside.animalTreatementScore + bag.material.ornements.animalTreatementScore + bag.material.handle.animalTreatementScore)/4).toFixed(0));
    bag.socialScore.total = Number(((bag.material.outside.totalSocial + bag.material.inside.totalSocial + bag.material.ornements.totalSocial + bag.material.handle.totalSocial)/4).toFixed(0));
 } 


app.get('/materials', (req,res) => {
    res.status(200).json(bag)
})

app.get('/materials/:id', (req,res) => {
    const id = parseInt(req.params.id)
    readXlsxFile('db2.xlsx').then((rows) => {
        updateMaterial(rows[id]);
        res.status(200).json(bag);
    })
})

app.listen((process.env.PORT || 5000), () => {
    console.log("Serveur à l'écoute")
  })