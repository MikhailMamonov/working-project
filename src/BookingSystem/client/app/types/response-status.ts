export class ResponseStatus {
  status: number;
  statusText: string;

  date: Date;

  constructor(status: number, statusText: string) {
    this.status = status;
    this.statusText = statusText;
    this.date = new Date();
  }

  isSuccess(): boolean {
    return this.status >= 200 && this.status < 300;
  }
}
