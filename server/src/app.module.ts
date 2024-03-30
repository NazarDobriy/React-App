import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { TaskList } from './task-list/task-list.model';
import { TaskListModule } from './task-list/task-list.module';
import { TaskCardModule } from './task-card/task-card.module';
import { TaskCard } from './task-card/task-card.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [TaskList, TaskCard],
      autoLoadModels: true
    }),
    TaskListModule,
    TaskCardModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
