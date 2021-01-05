import { Component } from '@angular/core'; //The Component Directive has to be imported from @angular/core

@Component({                                        //The Component must be linked to thr HTML and CSS sheet and have a slector
    selector: 'app-binary-converter',
    templateUrl: './binary-converter.component.html',
    styleUrls: ['./binary-converter.component.scss']
})

export class BinaryConverterComponent {                                      //Initialize Binary Converter
    num: number;                                                    //Declare variable num
    warn: string;

    mathBin() {   
        return parseInt(this.num.toString(10), 2);
                                                                    /** This function returns the binary integer
                                                                     * ParseInt expects two args (string, base)
                                                                     * .toString expects one  arg and takes the number
                                                                     * .toString returns a string */
    }

    number(event: any) {
        this.num = Number((<HTMLInputElement>event.target).value);  
                                                                    /** This function recieves the HTMLInputElement
                                                                     * Number converts the Input into numbers
                                                                     * HTMLInputElement targets the imput element in the HTML Template */
    }

    binaryValidate(evt: KeyboardEvent) {
        const value = evt.key;
        if (value !== "1" && value !== "0") {
            this.warn = "Please enter a valid input";
        } else {
            this.warn = " "
        }
        return value === "1" || value === "0";
                                                                    /**
                                                                     * This function recives a KeyboardEvent
                                                                     * The key struck must be binary
                                                                     * return true is value is binary
                                                                     */

    }
}