import { UserService } from './../services/user.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersDataSource } from '../services/users.datasource';
import { MatPaginator, MatSort, MatTable, MatRow } from '@angular/material';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit , AfterViewInit {
  
  dataSource: UsersDataSource;
  displayedColumns= ["email","displayName", "isActivated","dateCreated"];
  lastEmail = "";
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private userService : UserService) { }
  
  ngOnInit() {
    this.dataSource = new UsersDataSource(this.userService);
    
    this.dataSource.loadUsers( '', 'asc', 3, this.lastEmail);
  }
  
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      // Change in sort direction reset lastEmail
       this.paginator.pageIndex = 0;
       this.lastEmail="";
    });

    // fromEvent(this.input.nativeElement,'keyup')
    //     .pipe(
    //         debounceTime(150),
    //         distinctUntilChanged(),
    //         tap(() => {
    //             this.paginator.pageIndex = 0;
    //             this.loadLessonsPage();
    //         })
    //     )
    //     .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
        tap(() => {
          this.lastEmail=this.dataSource.usersSubject.value[this.dataSource.usersSubject.value.length -1].email;
          console.log("tap:",this.lastEmail);
          this.loadUsersPage();
        })
    )
    .subscribe();
  }

  loadUsersPage() {
    this.dataSource.loadUsers(
        "",
        this.sort.direction==""? "asc" : this.sort.direction ,
        this.paginator.pageSize,
        this.lastEmail);
}

}
