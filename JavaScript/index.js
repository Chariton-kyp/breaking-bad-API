fetch(
    'https://www.breakingbadapi.com/api/characters/',
    { method: 'GET' }
)
    .then(response => response.json())
    .then(breaking => {
        let content = '';
        count = (Object.keys(breaking).length);
        for (i = 0; i <= count; i = i + 1) {
            
            if (i % 3 === 0) {
                if (i === 0) {
                    content += `
                    <div class="card-deck pb-5 ">
                    <div class="card rounded border-0 mx-auto" style="width:18rem;" >
                        <a type="button" class="bg-secondary text-decoration-none ps-5 border-0 shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                        <div class="w-100">
                            <img class="img-fluid px-1 rounded w-100" style="height: 18rem; object-fit: cover;" src="${breaking[i].img}" class="card-img-top" alt="breaking bad card with name and nickname">
                        </div>    
                        <div class="card-body bg-white rounded">
                                <h6 class="card-title text-center text-dark"><b>${breaking[i].name}</b></h6>
                                <p class="card-text text-center text-dark">${breaking[i].nickname}</p>
                            </div> 
                        </a>
                    </div>     
                </div>
                    <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"><b>${breaking[i].name}</b></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-4 md-auto col-6 ">
                                            <div class="col-3 col-md-none"></div>
                                            <img class="img-fluid px-1 rounded w-100" style="height: 18rem; object-fit: cover;" src="${breaking[i].img}" class="card-img-top" alt="breaking bad card with name and nickname"><br>
                                                <div class=" mb-5">
                                                <b>birthday:</b> ${breaking[i].birthday}<br>
                                                <b>occupation:</b> ${breaking[i].occupation}<br>
                                                <b>status:</b> ${breaking[i].status}<br>
                                                <b>nickname:</b> ${breaking[i].nickname}<br>
                                                <b>appearance:</b> ${breaking[i].appearance}<br>
                                                <b>portrayed:</b> ${breaking[i].portrayed}<br>
                                                <b>category:</b> ${breaking[i].category}<br>
                                                </div>
                                            <div class="col-3 col-md-none"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 md-auto col-sm-12">
                                        <div class="d-none">
                                            ${getQuotes(breaking[i].name, i)}
                                        </div> 
                                        <ul class="list-group">
                                            <li class="list-group-item"> <b>Quotes</b></li>  
                                            <div id="quotes${i}" >
                                            </div>
                                        </ul> 
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `} 
            };           
        };
        document.querySelector("#ajaxButton").innerHTML = content;
    })
    .catch(error => console.error('error:', error))


function getQuotes(author_break,ii) {

let quoteContent = '';

    
    fetch(
        'https://www.breakingbadapi.com/api/quotes/',
        { method: 'GET' }
    ).then(response_quotes => response_quotes.json())
        .then(quotes => {
            char_quotes = author_break+" quotes"
            count = (Object.keys(quotes).length);
            for (i = 0; i <= count - 1; i = i + 1) {
                if (quotes[i].author === author_break) {
                    
                    quoteContent += `
                        <li class="list-group-item">${quotes[i].quote}</li>
                    `
                }
            }
           
        document.querySelector("#quotes"+ii).innerHTML = quoteContent;
        }).catch(error => console.error('error:', error))
    
        
    
}