import { writeFileSync } from "fs";
import { sampleJson } from "./sample";

export class modelGenerator {
    public modelFileString: string;
    private modelName: string;
    private interfaces: { [key: string]: string } = {};

    constructor(jsonFile: any, modelName: string) {
        this.modelFileString = ''
        this.modelName = modelName
        this.makeModelFile(jsonFile)
    }

    private makeModelFile(jsonFile: any) {
        this.generateInterface(this.modelName, jsonFile);
        this.modelFileString = Object.values(this.interfaces).reverse().join('\n');
        this.writeToModelFile();
    }

    private generateInterface(modelName: string, data: any) {
        let str = `interface ${modelName} {\n`;
        for (let key in data) {
            let value = data[key];
            if (value !== null && typeof value === 'object') {
                const isArray = Array.isArray(value);
                const subModelName = key;
                this.generateInterface(subModelName, isArray ? value[0] : value);
                str += `${key}: ${subModelName}${isArray ? '[]' : ''};\n`;
            }
            else {
                str += `${key}: ${value === null ? 'any' : typeof value};\n`;
            }
        }
        str += '}\n';
        this.interfaces[modelName] = str;
    }

    writeToModelFile() {
        console.log("Start Write")
        writeFileSync(this.modelName + '.ts', this.modelFileString, {
            flag: 'w'
        })
        console.log("End Write")
    }
}

function main() {
    let modelGen = new modelGenerator(sampleJson, 'GenModel');
    console.dir(modelGen.modelFileString, { depth: Infinity });
}

main();