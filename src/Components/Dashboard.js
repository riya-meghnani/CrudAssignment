import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom'
import CreateStudent from './CreateStudent'
import Tables from './Tables'
export class Dashboard extends Component {
    render() {
        return (
            <div>
                 <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
        
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            
                            
                           
                           
                            <div class="sb-sidenav-menu-heading">Actions</div>
                            <Link to='/createfaq' className="nav-link">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Create FAQ
                            </Link>
                            <Link to='/listfaq' class="nav-link" >
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                List All FAQ
                            </Link>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
<Switch>
<Route path='/createfaq' component={CreateStudent}></Route>
<Route path='/updatefaq/:id' component={CreateStudent}></Route>
<Route path='/listfaq' component={Tables}></Route>
</Switch>

    </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
            </div>
        )
    }
}

export default Dashboard
