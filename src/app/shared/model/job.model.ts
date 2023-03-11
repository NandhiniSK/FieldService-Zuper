import { KeyValue } from '@angular/common';

export class Job {
  job_id: number = 0;
  status: string = '';
  assigned_to: string[] = [];
  location: string = '';
}

export class JobStatus {
  count_by_status: KeyValue<string, number> = {} as KeyValue<string, number>;
  count_by_person: KeyValue<string, number> = {} as KeyValue<string, number>;
  count_by_location: KeyValue<string, number> = {} as KeyValue<string, number>;
}
