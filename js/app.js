$(document).ready(function(){

    $('#search1').click(function(){
        let name=$('#name').val();

        if(name.length<=0){
            alert("enter something");
        }else{
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://trains.p.rapidapi.com/",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "x-rapidapi-key": "b4e4cf8c61msh5c770a3fe0f1d6cp147f47jsn55215babb77f",
                    "x-rapidapi-host": "trains.p.rapidapi.com"
                },
                "processData": false,
                "data": "{\r\n    \"search\": \""+name+"\"\r\n}"
            };

            $.ajax(settings).done(function (response) {
                let blob;


                for(let i=0;i<response.length;i++){

                    blob = blob +`<tr>
<td>${response[i].train_num}</td>
<td>${response[i].name}</td>
<td>${response[i].train_from}</td>
<td>${response[i].train_to}</td>
<td>${response[i].data.arriveTime}</td>
</tr>`;

                    $('#display').html(`<table class="table table-striped">
                            <tr>
                                <th>Train No.</th>
                                <th>Train Name</th>
                                <th>Departing Station</th>
                                <th>Destination Station</th>
                                <th>Arrival Time</th>
                            </tr>
                            ${blob}

                        </table>`

                    )


                    console.log(response);



                }
            });
        }



    })
});