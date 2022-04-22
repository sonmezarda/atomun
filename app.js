//const mun_date = [4,30,17,0] //month day hour minute

var mun_date = new Date(2022,3,22,4,0);



function get_date_difference(mun_date){
    const current_date = new Date();
    const current_date_list = Date().split(' ');
    const current_year = Number(current_date_list[3]);
    const current_day = Number(current_date_list[2]);
    var date1 = new Date(current_year,current_date.getMonth(),current_day,current_date.getHours(),current_date.getMinutes(),current_date.getSeconds());
    var diff = mun_date - date1;
    var seconds = diff/(1000);
    var minute = seconds/60;
    seconds = seconds%60;
    var hour = minute/60;
    minute = minute%60;
    var day =Math.floor( hour/24);
    hour = hour % 24;
    return  [day, hour, minute, seconds];
}

function set_timer(remaining_date){
    
}
set_timer(get_date_difference(mun_date));
console.log(get_date_difference(mun_date));