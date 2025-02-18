import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindAllParameters, TaskDto } from '../DTO/task.dto';

@Injectable()
export class TaskService {
  private exampleTask: TaskDto[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: true,
      expiration_date: new Date(),
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description 2',
      status: false,
      expiration_date: new Date(),
    },
  ];

  create(task: TaskDto): object {
    this.exampleTask.push(task);
    return task;
  }

  findAll(params: FindAllParameters): TaskDto[] | string {
    const tasks = this.exampleTask.filter((task) => {
      const selector = true;

      if (params.title && !task.title.includes(params.title)) {
        return false;
      }

      if (params.status && task.status != (params.status == 'true')) {
        return false;
      }

      return selector;
    });

    return tasks;
  }

  findOneById(id: string): TaskDto | undefined {
    const task = this.exampleTask.find((task) => task.id == id);

    if (task) {
      return task;
    }

    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }

  update(task: TaskDto): object | string {
    const taskIndex = this.exampleTask.findIndex((task) => task.id == task.id);
    console.log(task);
    if (taskIndex >= 0) {
      this.exampleTask[taskIndex] = task;
      return task.title;
    }

    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }

  delete(id: string): object | string {
    const taskIndex = this.exampleTask.findIndex((task) => task.id == id);

    if (taskIndex >= 0) {
      const task = this.exampleTask[taskIndex];
      this.exampleTask.splice(taskIndex, 1);
      return task;
    }

    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }
}
