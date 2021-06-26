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
                let blob="";


                for(let i=0;i<response.length;i++){

                    blob =blob+`<tr>
<td>${response[i].train_num}</td>
<td>${response[i].name}</td>
<td>${response[i].train_from}</td>
<td>${response[i].train_to}</td>
<td>${response[i].data.departTime}</td>
<td>${response[i].data.arriveTime}</td>
</tr>`;

                    $('#display').html(`<table class="table table-striped">
                            <tr>
                                <th>Train No.</th>
                                <th>Train Name</th>
                                <th>Departing Station</th>
                                <th>Destination Station</th>
                                <th>Departure Time</th>
                                <th>Arrival Time</th>
                            </tr>
                            ${blob}

                        </table>`

                    )






                }
            });
        }



    }) //for Train Name//
    $('#search2').click(function(){

        let number=$('#number').val();
console.log(number.length);
        if(number.length<=0||number.length<=4||number.length > 5){
            alert("enter valid Train Number");
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
                "data": "{\r\n    \"search\": \""+number+"\"\r\n}"
            };

            $.ajax(settings).done(function (response) {
                let blobnumber="";



                for(let i=0;i<response.length;i++){


                    blobnumber = blobnumber +`<tr>
<td>${response[i].train_num}</td>
<td>${response[i].name}</td>
<td>${response[i].train_from}</td>
<td>${response[i].train_to}</td>
<td>${response[i].data.arriveTime}</td>
<td>${response[i].data.classes}</td>

<td><table class="table">
<th>Sunday</th>
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>FriDay</th>
<th>Saturday</th>
<tr>
<td>${response[i].data.days.Sun}</td>
<td>${response[i].data.days.Mon}</td>
<td>${response[i].data.days.Tue}</td>
<td>${response[i].data.days.Wed}</td>
<td>${response[i].data.days.Thu}</td>
<td>${response[i].data.days.Fri}</td>
<td>${response[i].data.days.Sat}</td>
</tr>
</tr>

</table></td>


</tr>`;

                    $('#display2').html(`<table class="table table-striped">
                            <tr>
                                <th>Train No.</th>
                                <th>Train Name</th>
                                <th>Departing Station</th>
                                <th>Destination Station</th>
                                <th>Arrival Time</th>
                                <th>Travel Class Availabale</th>
                                <th>Days On Which The Trains Are Available</th>
                            </tr>
                            ${blobnumber}

                        </table>`

                    )


















                }
            });
        }



    })//Details from Train Number//
    $('#search3').click(function(){
        let pnr=$('#pnr').val();

        if(pnr.length<=0 ||pnr.length<=9 || pnr.length>10){
            alert("enter valid PNR number");
        }else{
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://indianrailways.p.rapidapi.com/index.php?pnr=1234567890",
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "b4e4cf8c61msh5c770a3fe0f1d6cp147f47jsn55215babb77f",
                    "x-rapidapi-host": "indianrailways.p.rapidapi.com"
                },
                "processData": false,
                "data": "{\r\n    \"search\": \""+pnr+"\"\r\n}"
            };

            $.ajax(settings).done(function (response) {

                console.log(response);
                let blobpnr="";


                for(let i=0;i<response.length;i++){

                    blobpnr =blobpnr+`<tr>
<td>${response[i].train_num}</td>
<td>${response[i].name}</td>
<td>${response[i].train_from}</td>
<td>${response[i].train_to}</td>
<td>${response[i].data.departTime}</td>
<td>${response[i].data.arriveTime}</td>
</tr>`;

                    $('#displaypnr').html(`<table class="table table-striped">
                            <tr>
                                <th>Train No.</th>
                                <th>Train Name</th>
                                <th>Departing Station</th>
                                <th>Destination Station</th>
                                <th>Departure Time</th>
                                <th>Arrival Time</th>
                            </tr>
                            ${blobpnr}

                        </table>`

                    )






                }
            });
        }



    })
});