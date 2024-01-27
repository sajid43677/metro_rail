import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FareEntity } from './fare.entity';
import { Repository } from 'typeorm';
import { fareDTO } from './fare.dto';

@Injectable()
export class FareService {

    constructor(
        @InjectRepository(FareEntity) 
        private fareRepo: Repository<FareEntity>
      ) {}


    async addFare(fareinfo:fareDTO): Promise<{message:string}>{
        try{
            const res = await this.uniquefare(fareinfo);
            if(res === true){
                return {message:"already added"};
            }
            try{
                const a = await this.fareRepo.save(fareinfo);
                return {message:"fare info added"};
            }
            catch(e){
                console.log(e);
                return {message:e.message};
            }
        }
        catch(e){
            console.log(e);
            return {message:e.message};
        }
            

    }

    async uniquefare(fareinfo:fareDTO): Promise <boolean>{
        try {
            const res = await this.fareRepo.findOne({
                where: [{
                    location1: fareinfo.location1,
                    location2: fareinfo.location2
                },
                {
                    location1:fareinfo.location2,
                    location2:fareinfo.location1
                }
            ],
            })
            
            if(res != null){
                console.log(res);
                return true;
            }
            
            return false;
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }
}