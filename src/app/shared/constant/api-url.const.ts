let baseURL = '/';
export let APIURL = {
  getJob: function () {
    return baseURL + 'assets/data/job.json';
  },
  getCustomers: function () {
    return baseURL + 'assets/data/customer.json';
  },
  getEmployee: function () {
    return baseURL + 'assets/employee.json';
  },
  getSchedule: function () {
    return baseURL + 'assets/data/schedule.json';
  },
  getServices: function () {
    return baseURL + 'assets/service.json';
  },
  getory: function () {
    return baseURL + 'assets/history.json';
  },
  getInvoices: function () {
    return baseURL + 'assets/invoice.json';
  },
};
