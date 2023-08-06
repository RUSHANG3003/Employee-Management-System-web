import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// addEmployee12=new FormGroup({})
  empDetail !: FormGroup;
  empobj: Employee = new Employee();
  empList: Employee[] = [];
  // resetForm: [' '] | undefined
  // empform: any;
  // empDetail: FormGroup | undefined;


  constructor(private formBuilder: FormBuilder, private empService: EmployeeService) { }
  ngOnInit(): void {
    this.getAllEmployee();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      gender: [''],
      age: [''],
      designation: [''],
      address: [''],
      phoneNo: [''],
      pinCode: ['']

    });
  }

  // onDataAddedSuccessfully() {
  //   // Reset the form to its initial state
  //   this.empDetail.reset();
  // }

  addemployee() {
    debugger
    console.log(this.empDetail);
    // this.empobj.id = this.empDetail.value.id;
    this.empobj.name = this.empDetail.value.name;
    this.empobj.email = this.empDetail.value.email;
    this.empobj.phoneNo = this.empDetail.value.phoneNo.toString();
    this.empobj.gender = this.empDetail.value.gender;
    this.empobj.age = this.empDetail.value.age.toString();
    this.empobj.designation = this.empDetail.value.designation;
    this.empobj.address = this.empDetail.value.address;
    this.empobj.pinCode = this.empDetail.value.pinCode;


    this.empService.addemployee(this.empobj).subscribe(res => {
      // this.addEmployee12.reset({})
      // console.log(res);
      // alert("Employee Added Sucessfuslly");
      // this.empform.resetForm = true;
      this.getAllEmployee();
      this.empDetail = this.formBuilder.group({
        id: [''],
        name: [''],
        email: [''],
        gender: [''],
        age: [''],
        designation: [''],
        address: [''],
        phoneNo: [''],
        pinCode: ['']
  
      });
    }, err => {
      console.log(err);

    });
  }
  
  

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res => {
      this.empList = res;
    }, err => {
      console.log("error while fetching deta")
    });

  }
  
  editEmployee(emp: Employee) {
    debugger
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['age'].setValue(emp.age);
    this.empDetail.controls['address'].setValue(emp.address);
    this.empDetail.controls['designation'].setValue(emp.designation);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['gender'].setValue(emp.gender);
    this.empDetail.controls['phoneNo'].setValue(emp.phoneNo);
    this.empDetail.controls['pinCode'].setValue(emp.pinCode);
    console.log(this.empDetail);
 
  }
  updateEmployee() {

    this.empobj.id = this.empDetail.value.id;
    this.empobj.name = this.empDetail.value.name;
    this.empobj.email = this.empDetail.value.email;
    this.empobj.phoneNo = this.empDetail.value.phoneNo.toString();
    this.empobj.gender = this.empDetail.value.gender;
    this.empobj.age = this.empDetail.value.age.toString();
    this.empobj.designation = this.empDetail.value.designation;
    this.empobj.address = this.empDetail.value.address;
    this.empobj.pinCode = this.empDetail.value.pinCode;

    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      gender: [''],
      age: [''],
      designation: [''],
      address: [''],
      phoneNo: [''],
      pinCode: ['']

    });
    this.empService.updateEmployee(this.empobj).subscribe(res => {
      console.log(res);
      this.getAllEmployee();
      
    }, err => {
      console.log(err);

    });
    
  }
  deleteEmployee(id:string,Employee:any) {

    this.empService.deleteEmployee(id).subscribe(res=>{
      console.log(res);
      // if(confirm('Are you sure you want to delete ' + Employee.name + '?'))
      this.getAllEmployee();
    },err => {
      console.log(err);
    });
 

    
  }
    // {
      // submit(from: NgForm){

      //   this.empService.addemployee(this.empDetail.value)


      // }
      // // onSubmit(){
      // //   debugger
      // //   if (this.empList) {
      // //     console.log(this.empList)
      // //     // this.empService.addEmployee(this.empList., this.companyForm.value)
      // //     //   .subscribe({
      // //     //     next: (result) => {
      // //     //      // alert("Company Updated")
      // //     //       this.dialogRef.close(true)
      // //     //       this.toaster.success("Data Updated Successfully")
      // //     //     }
      // //     //   })
      // //   }
      // //   else {
      // //     console.log(this.empList)
      // //     this.empService.addemployee(this.empList)
      // //       .subscribe({
      // //         next: (result) => {
      // //           // alert("Company Added Successfully")

      // //         }
      // //       })
      // //   }
      // // }
      
  }
