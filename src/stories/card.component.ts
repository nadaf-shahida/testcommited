import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `

    <div class="row">
	<div class="container">
		<h1>Login</h1>
		<form #f="ngForm" (ngSubmit)="onSubmit(f)">
			<div class="form-group">
				<label for="usernamelogin">
				Username</label>
				<input type="text"
				name="username"
				ngModel
				#username required id="usernamelogin"
				class="inputdetails"
				 placeholder="user or admin">
			</div>
			<div class="form-group">
				<label for="passwordlogin">
				Password</label>
				<input type="password" name="password"
				 ngModel #password required
				 id="passwordlogin"
				 class="inputdetails"
				  placeholder="Password"
					   autocomplete>
			</div>
			<div class="allbtn">
				<button type="submit" [disabled]=f.invalid class="btn"><span>Login <i class="fas fa-sign-in-alt"></i></span></button>
          </div>
		</form>

	</div>
</div>
    `,
    styleUrls: ['./card.component.scss'],
})
export class CardComponent { }