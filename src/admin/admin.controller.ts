import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { AdminService } from './admin.service';
import { fareDTO } from 'src/models/fare/fare.dto';
import { FareService } from 'src/models/fare/fare.service';

@Controller("admin")
export class AdminController {
  constructor(private readonly AdminService: AdminService,
    private readonly fareservice:FareService) {}

  @Post('/addfare')
  @UsePipes(new ValidationPipe())
  async addFare(@Body() fareinfo:fareDTO):Promise<{message:string}>{
    try{
       const msg = this.fareservice.addFare(fareinfo);
      return msg;
    }
    catch(e){
      console.log(e);
      return {message:e.message};
    }
  }

  
}
