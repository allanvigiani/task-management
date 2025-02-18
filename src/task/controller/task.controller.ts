import { Controller, Post, Get, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { FindAllParameters, TaskDto } from '../DTO/task.dto';
import { TaskService } from '../service/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() task: TaskDto): object {
    const createdTask = this.taskService.create(task);
    return createdTask;
  }

  @Get('all')
  findAll(@Query() params: FindAllParameters): TaskDto[] | string {
    const tasks = this.taskService.findAll(params);
    return tasks;
  }

  @Get('one/:id')
  findOneById(@Param('id') id: string): TaskDto | undefined {
    const task = this.taskService.findOneById(id);
    return task;
  }

  @Put()
  update(@Body() task: TaskDto): object | string {
    const updatedTask = this.taskService.update(task);
    return updatedTask;
  }

  @Delete(':id')
  delete(@Param('id') id: string): object | string {
    const deletedTask = this.taskService.delete(id);
    return deletedTask;
  }
}
