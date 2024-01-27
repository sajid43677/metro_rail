import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FareEntity } from 'src/models/fare/fare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FareEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
