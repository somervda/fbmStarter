import { UserService } from './../services/user.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersDataSource } from '../services/users.datasource';
import { MatPaginator, MatSort } from '@angular/material';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit , AfterViewInit {
  
  dataSource: UsersDataSource;
  displayedColumns= ["displayName", "isActivated"];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private userService : UserService) { }
  
  ngOnInit() {
    this.dataSource = new UsersDataSource(this.userService);
    
    this.dataSource.loadUsers( '', 'asc', 0, 3);
  }
  
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

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
        tap(() => this.loadUsersPage())
    )
    .subscribe();
  }

  loadUsersPage() {
    this.dataSource.loadUsers(
        "",
        "asc",
        this.paginator.pageIndex,
        this.paginator.pageSize);
}

}
