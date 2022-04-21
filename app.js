//const mun_date = [4,30,17,0] //month day hour minute

var date2 = new Date(2022,4,22,3,0);



function get_date_difference(mun_date){
    var date1 = new Date(2022,4,22,2,0);
    var diff = mun_date - date1;
    var seconds = diff/(1000);
    //var remaining_time = [diff/(1000*60*60*24),diff/(1000*60*60),diff/(1000*60)]

    return remaining_time;
}

console.log(get_date_difference(date2));