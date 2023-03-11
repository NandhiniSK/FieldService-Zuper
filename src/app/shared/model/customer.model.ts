export class Customer {
  id: number = 0;
  name: string = "";
  email: string = ""
  phone_number: string = "";
  gender: string = "";
  location: string = "";
  rating: number = 0;
  total_request: number = 0;
}

export class CustomerDetails {
    id: number = 0;
    name: string = "";
    email: string = ""
    phone_number: string = "";
    gender: string = "";
    location: string = "";
    rating: number = 0;
    total_request: number = 0;
    pending_request: number = 0;
    completed_request: number = 0;
    on_progress_request: number = 0;
    feedback: string[] = [];
}

export class FilterList{
    nameList: string[] = [];
    locationList: string[] = [];
    genderList: string[] = [];
}