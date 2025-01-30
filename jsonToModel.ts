import { writeFileSync } from "fs";
import { sampleJson } from "./sample";

export class modelGenerator {
    public modelFileString: string;

    constructor(jsonFile: any) {
        this.modelFileString = ''
        this.makeModelFile(jsonFile)
    }

    makeModelFile(jsonFile: any) {
        this.appendModelHeader('GenModel')
        this.makeModelFileString(jsonFile);
        this.appendModelFooter({ isTerminating: true });
        this.writeToModelFile();
    }

    appendModelHeader(modelName: string) {
        this.modelFileString += `interface ${modelName} `;
        this.modelFileString += `{ \n`;
    }

    appendModelFooter(params: { isTerminating: boolean }) {
        this.modelFileString += `}`;
        this.modelFileString += params.isTerminating ? '' : ', '
        this.modelFileString += `\n`;
    }

    makeModelFileString(jsonFile: any) {
        for (let key in jsonFile) {
            this.appendModel(key, jsonFile[key]);
        };
    }

    appendModel(key: string, value: string) {
        if (value === null) {
            this.modelFileString += (key + `: any , \n`);
            return;
        }

        const typeofField = typeof value;
        switch (typeofField) {
            case 'object':
                const isArray = Array.isArray(value);
                if (isArray)
                    value = value[0];

                this.modelFileString += key + `: {\n`;
                this.makeModelFileString(value);
                this.appendModelFooter({ isTerminating: !isArray });
                break;

            default:
                this.modelFileString += (key + ": " + typeofField + `, \n`);
        }
    }

    writeToModelFile() {
        console.log("Start Write")
        writeFileSync("models.ts", this.modelFileString, {
            flag: 'w'
        })
        console.log("End Write")
    }
}

function main() {
    let modelGenInstance = new modelGenerator(sampleJson);
    console.dir(modelGenInstance.modelFileString, { depth: Infinity });
}

main();