import GoTrue from 'gotrue-js';

auth = new GoTrue({
	APIUrl: "https://www.firstmyk.in/.netlify/netlify",
	audience: '',
	setCookie: true
})

class LoginComponent extends Component {
     
     constructor() {
         super();
	 let shadowRoot = this.attachShadow({mode: 'open'});
	 let loginform = document.createElement('form');
	 let emailinput = document.createElement('input');
	 let passwordinput = document.createElement('input');
	 let submitbutton = document.createElement('button');
	 submitbutton.addEventListener("click", function(){
             let email = emailinput.value;
             let password = passwordinput.value;
             auth.login(email,password).then((response)=> {}).catch((error) => {})		 
	 });    
	 loginform.appendChild(emailinput);
	 loginform.appendChild(passwordinput);    
	 shadowRoot.appendChild(loginform);
     }	

}

class RegisterComponent extends Component {
     
     constructor() {
         super();
	 let shadowRoot = this.attachShadow({mode: 'open'});
	 let registerform = document.createElement('form');
	 let emailinput = document.createElement('input');
	 let passwordinput = document.createElement('input');
	 let submitbutton = document.createElement('button);
	 submitbutton.addEventListener("click", function(){
             let email = emailinput.value;
             let password = passwordinput.value;
             auth.register(email,password).then((response)=>{}).catch((error)=>{})	 
	 });
	 registerform.appendChild(emailinput);
	 registerform.appendChild(passwordinput);
	 shadowRoot.appendChild(registerform);    
     }

}

