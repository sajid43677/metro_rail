import { IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class fareDTO{

    @IsNotEmpty({message:"please enter a valid location name"})
    location1:string;

    @IsNotEmpty({message:"please enter a valid location name"})
    @IsNotEmpty()
    location2:string;

    @IsNotEmpty({message:"please enter a valid location name"})
    @IsNumber()
    farePrice:number;
}