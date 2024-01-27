import { Module } from '@nestjs/common';
import { AdminController} from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FareEntity } from 'src/models/fare/fare.entity';
import { AdminService } from './admin.service';
import { FareService } from 'src/models/fare/fare.service';

@Module({
  imports: [TypeOrmModule.forFeature([FareEntity])],
  controllers: [AdminController],
  providers: [AdminService,FareService],
})
export class AdminModule {}
