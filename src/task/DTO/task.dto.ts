export class TaskDto {
  id: string;
  title: string;
  description: string;
  status: boolean;
  expiration_date: Date;
}

export interface FindAllParameters {
  title?: string;
  status?: string;
}