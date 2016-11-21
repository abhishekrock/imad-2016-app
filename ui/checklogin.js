function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
    
            <div class="collapse navbar-collapse navbar-ex1-collapse">
									<ul class="nav navbar-nav navbar-right">
										
									   
										<li><a href="/about">About</a>
										</li>
										
										<li><a href="/contact">Contact</a>
										</li>
                                        <li class="dropdown">
											<a class="dropdown-toggle" data-toggle="dropdown">${username} <i class="fa fa-user-o" aria-hidden="true"><b class="caret"></b></i></a>
											<ul class="dropdown-menu">
												<li><a href="/blog">List of Posts</a>
												</li>
												<li><a href="/logout">Logout</a>
												</li>
											</ul>
										</li>
                                            
                    
										
									</ul>
								</div>
    
        
        
        
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                console.log("Go and login ");
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}


loadlogin();
