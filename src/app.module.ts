import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, AdminModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sajid',
    database: 'metro rail',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
