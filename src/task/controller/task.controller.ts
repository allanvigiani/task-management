import { Controller, Post, Get, Body } from '@nestjs/common';
import { TaskDto } from '../DTO/task.dto';
import { TaskService } from '../service/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() task: TaskDto): object {
    const createdTask = this.taskService.create(task);
    return createdTask;
  }

  @Get('all')
  findAll(): string {
    return 'This action returns all tasks';
  }
}
