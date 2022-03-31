import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/services/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
})
export class ShowInspectionComponent implements OnInit {
  // $ means this will be a string
  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  // This will be used to hold the data for the map
  inspectionTypesList: any = [];
  // Map to display data associated with foreign keys
  // Map holds the id of the inspection type as the key and the value is the inspection type name
  inspectionTypesMap: Map<number, string> = new Map();

  closeResult = '';

  // Variables (Properties)

  //Modal Title
  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;

  constructor(
    private service: InspectionApiService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // Initializing the lists
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();

    // map initialize
    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap() {
    this.service.getInspectionTypesList().subscribe((data) => {
      // store the data from the list into a array
      this.inspectionTypesList = data;
      // loop through the array and assign id and name of inspection type in a map
      for (let i = 0; i < data.length; i++) {
        // This will set the id and the inspection name
        this.inspectionTypesMap.set(
          this.inspectionTypesList[i].id,
          this.inspectionTypesList[i].inspectionName
        );
      }
    });
  }

  // Modal Methods

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  modalAdd(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null,
    };

    this.modalTitle = 'Add Inspection';
    this.activateAddEditInspectionComponent = true;
  }
}
