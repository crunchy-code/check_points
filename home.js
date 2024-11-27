document.getElementById('phone').onchange=function(){
    value = document.getElementById('phone').value;
    phone_regex = new RegExp("^1\\d{1,2}\\d{7,8}$");
    console.log(value);
    if (phone_regex.test(value)) {
        document.getElementById('button').disabled = false;
    }else {
        document.getElementById('button').disabled = true;
        console.log('invalid');
    }
}