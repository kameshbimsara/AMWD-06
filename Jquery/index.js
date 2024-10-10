// $('#show-btn').click(function () {
//     $('#view').show();
// })

// $('#show-btn').click(function () {
//     $('#view').Hide();
// })

$(document).ready(function (){
    $('#about').hide();
    $('#add-coustomer').hide();
    $('#add-item').hide();
})

$('#About-btn').click(function (){
    $('#about').show();
    $('#home').hide();
    $('#add-coustomer').hide();
    $('#add-item').hide();
})

$('#Home-btn').click(function (){
    $('#home').show();
    $('#about').hide();
    $('#add-coustomer').hide();
    $('#add-item').hide();
})

$('#cus-btn').click(function (){
    $('#home').hide();
    $('#about').hide();
    $('#add-coustomer').show();
    $('#add-item').hide();
})

$('#Item-btn').click(function (){
    $('#home').hide();
    $('#about').hide();
    $('#add-coustomer').show();
    $('#add-item').hide();
})
