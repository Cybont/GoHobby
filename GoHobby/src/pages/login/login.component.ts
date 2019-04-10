import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.css"]
})
export class LoginComponent implements OnInit {

    constructor(private router : Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public login(): void {
        this.router.navigate(["discovery"]);
    }
}
