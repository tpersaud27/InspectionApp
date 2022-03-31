import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  // This is the url for the .NET Api we created
  // Note: This is the url when its running on local host
  readonly inspectionAPIURL = 'https://localhost:7277/api';

  // Constructor
  constructor(private http: HttpClient) {}

  // Note: if you are using swagger, you can simply reference the endpoints from there

  // Inspection HTTP Methods

  // Method to get the list of inspections
  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/inspections');
  }
  // Post to add inspection
  addInspection(data: any) {
    return this.http.post(this.inspectionAPIURL + '/inspections', data);
  }
  // Put request to update inspection
  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/inspections/${id}`, data);
  }
  // Delete inspection
  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/inspections/${id}`);
  }

  // InspectionTypes Http Methods

  // Method to get the list of inspection types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/inspectiontypes');
  }
  // Post to add inspection types
  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIURL + '/inspectiontypes', data);
  }
  // Put request to update inspection types
  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(
      this.inspectionAPIURL + `/inspectiontypes/${id}`,
      data
    );
  }
  // Delete inspection types
  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/inspectiontypes/${id}`);
  }

  // Status Http methods

  // Get all statuses

  // Method to get the list of inspection types
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/status');
  }
  // Post to add inspection types
  addStatus(data: any) {
    return this.http.post(this.inspectionAPIURL + '/status', data);
  }
  // Put request to update inspection types
  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/status/${id}`, data);
  }
  // Delete inspection types
  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/status/${id}`);
  }
}
