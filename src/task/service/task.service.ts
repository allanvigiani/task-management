import { Injectable } from '@nestjs/common';
import { TaskDto } from '../DTO/task.dto';

@Injectable()
export class TaskService {
  private exampleTask: TaskDto[] = [];

  create(task: TaskDto): object {
    this.exampleTask.push(task);
    console.log('Task created');
    return task;
  }
}
