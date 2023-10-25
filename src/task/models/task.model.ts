import { Status } from "./task.enum";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status
}