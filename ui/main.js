function calTimee(time){
    var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        
        var string = month[time.getMonth()];
        string += " "+time.getDate();
        //console.log(string);
        string += ", "+time.getFullYear();
        //console.log(string);
        return string;
    
}



function loadArticles (count) {
        // Check if the user is already logged in
    
   
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) 
            {
                var content =`
                        <section class="expertise-wrapper section-wrapper">
                            <div class="container">
                        `;
                var articleData = JSON.parse(this.responseText);
                
                for (var i=0; i< articleData.length; i++) {
                    /*content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;*/
                    
                    var trimmedString = articleData[i].content.substring(0, 300);
                    var time = new Date(articleData[i].date);
                    
                    var newtime = calTimee(time);

                    content+=`

                 <div class="row">
                        <div class="col-md-3">
                            <div class="section-title">
                                <h2>${articleData[i].category}</h2>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                
                                    <div class="expertise-item">
                                        <h3><a href="/articles/${articleData[i].title}">${articleData[i].title}</a></h3>

                                        <p>
                            
                        
                            Posted on ${newtime}  at ${time.toLocaleTimeString()} by ${articleData[i].username}
                                         
                                        </p>


                                        <h4>

                                                ${trimmedString}
                                        <a href="/articles/${articleData[i].title}"> Read More</a>
                                       
                                        </h4>
                                    </div>
                               
                             
                            </div>
                           
                        </div>
                    </div>

                    <hr>

                    `;


                }
                content +=`
                        </div>
                    </section>
                    `;
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    //request.open('GET', '/get-articles', true);
    //request.send(null);
    
    //
    
        request.open('POST', '/get-articles', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({count: count}));  
}




function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
    
            <div class="collapse navbar-collapse navbar-ex1-collapse">
									<ul class="nav navbar-nav navbar-right">
										
									   
										<li><a href="/about">About</a>
										</li>
										
										<li><a href="/">Blog</a>
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

//next button

var nextbutton = document.getElementById('next_btn');
    nextbutton.onclick = function (){
        console.log("i am in next btn");
        console.log(count);
        count+=3;
        loadArticles(count);
        
        
    }
    

//previous button
    
    
var prevbutton = document.getElementById('prev_btn');
    prevbutton.onclick = function (){
        console.log("i am in prev btn");
         console.log(count);
          count-=3;
        loadArticles(count);
       
        
    }
 
loadLogin ();   

var article= 1;
var count = -3;
 
if(article===1){
    
   count+=3;
   loadArticles(count);
   
   article++; 
   //console.log(article);
}


//test();






