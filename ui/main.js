
function loadArticles () {
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
                    
                    var trimmedString = articleData[i].content.substring(0, 50);
                    

                    content+=`

                 <div class="row">
                        <div class="col-md-3">
                            <div class="section-title">
                                <h2>My Specialities</h2>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                
                                    <div class="expertise-item">
                                        <h3><a href="/articles/${articleData[i].title}">${articleData[i].title}</a></h3>

                                        <p>
                                            Posted 10 minutes ago by ${articleData[i].author_id}, Contributor
                                        </p>


                                        <h4>

                                                ${trimmedString}

                                        
                                            
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
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}



function test(){
 var content = '';
    for (var i=0; i< 3; i++) {
                    /*content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;*/
                    
                      var str ="echCrunch was told that the service being provided to the FBI is different from that requested by the CIA, which was turned away before. The FBI would receive “a limited version of our breaking news alerting product";
                      
                      var trimmedString = str.substring(0, 10);

                    content +=`

                 <div class="row">
                        <div class="col-md-3">
                            <div class="section-title">
                                <h2>My Specialities</h2>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                                
                                    <div class="expertise-item">
                                        <h3>FBI will receive ‘limited’ Twitter firehose access through Dataminr, but has to watch its step</h3>

                                        <p>
                                            Posted 10 minutes ago by Devin Coldewey, Contributor
                                        </p>


                                        <h4>


                                            ${trimmedString}

                                        </h4>
                                    </div>
                               
                             
                            </div>
                           
                        </div>
                    </div>

                    `;

                }
 var articles = document.getElementById('articles');
 articles.innerHTML = content;

}
loadArticles();

test();






