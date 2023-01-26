import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  constructor(private http: HttpClient) { }

  GetweatherData() {
    return this.http.get<any>('https://localhost:44350/weatherforecast/viewforecast')
  }

  insertuserdata(data: any) {
    this.http.post('https://localhost:44350/api/User/insertuser', data).toPromise().then(result => { alert("Registration done Successfully!"),window.location.href='/Home/Login' })
  }

  getUserdata() {
    return this.http.get<any>('https://localhost:44350/api/User/viewuser')
  }

  getconfirmeduserdata(){
    return this.http.get<any>('https://localhost:44350/api/User/viewconfirmeduser')
  }

  insertproductdata(data: any) {
    this.http.post('https://localhost:44350/api/Product/insertproduct', data).toPromise().then(result => { alert("Product Registered Successfully!"),window.location.href='/adminhome/viewproduct' })
  }

  getproductdata() {
    return this.http.get<any>('https://localhost:44350/api/Product/viewproduct')
  }

  getproductbaseid(productid: any) {
    return this.http.get<any>('https://localhost:44350/api/Product/ViewProductByid/' + productid)
  }

  updateproductdata(productid: any) {
    this.http.post('https://localhost:44350/api/Product/updateproduct', productid).toPromise().then(result => { alert("Product Details Updated Successfully!"),window.location.href='/adminhome/viewproduct' })
  }

  deleteproductdata(productid: any) {
    this.http.post('https://localhost:44350/api/Product/deleteproduct', productid).toPromise().then(result => { alert("Product Deleted!"),window.location.href='/adminhome/viewproduct' })
  }

  confirmuser(loginId: any) {
    this.http.post('https://localhost:44350/api/User/confirmuser', loginId).toPromise().then(result => { alert("User Confirmed Successfully!"),window.location.href='/adminhome/viewuser' })
  }

  removeuser(loginId:any){
    this.http.post('https://localhost:44350/api/User/removeuser', loginId).toPromise().then(result => { alert("User Removed!"),window.location.href='/adminhome/confirmedusers' })
 
  }

  login(loginInfo: Array<string>) {
    return this.http.post("https://localhost:44350/api/User/login", {
      UserName: loginInfo[0],
      Password: loginInfo[1],

    },
      {
        responseType: 'text',
      }
    );
  }

  insertcomplaintdata(data:any)
  {
    this.http.post('https://localhost:44350/api/NewComplaint/insertnewcomplaint',data).toPromise().then(result=>{alert("Your Complaint Has Been Registered Successfully!"),window.location.href='/userhome/viewcomplaintstatus'})
  }

  getcomplaintsdata()
  {
    return this.http.get<any>('https://localhost:44350/api/User/getcomplaints')
  }

  getpendingcomplaints()
  {
    return this.http.get<any>('https://localhost:44350/api/User/getpendingcomplaints')
  }

  getcompletedcomplaints()
  {
    return this.http.get<any>('https://localhost:44350/api/User/getcompletedcomplaints')
  }

  showallcomplaints()
  {
    return this.http.get<any>('https://localhost:44350/api/User/showallcomplaints')
  }

  getcomplaintstatus(id: any) {
    return this.http.get<any>('https://localhost:44350/api/NewComplaint/getstatuscomplaint/'+id)
  }

  statuspending(complaintId:any){
    this.http.post('https://localhost:44350/api/NewComplaint/updatestatuspending',complaintId).toPromise().then(result=>{alert("Complaint Status Changed to Pending!"),window.location.href='/adminhome/viewcomplaints'})
  }

  statuscompleted(complaintId:any){
    this.http.post('https://localhost:44350/api/NewComplaint/updatestatuscompleted',complaintId).toPromise().then(result=>{ alert("Complaint Status Changed to Completed!"),window.location.href='/adminhome/pendingcomplaints'})
 
  }
}
