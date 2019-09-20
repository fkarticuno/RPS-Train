/*
        TTD
`           > Name Trains in array
            > Make title jumbotron   
            > make table of 
            Current Train Schedule
                Train Name
                Destination
                Freqency (min)
                Next Arrival
                Minutes Away
            > make table to add trains
                Train name
                input text
                destination
                input text
                first train time
                input text
                frequency
                input text
                SUBMIT BUTTON   
*/
/*
var trains = [];

trains.push('Lambtrak',
    'PainTrain',
    'Batman',
    'NightMan',
    'DayMan',
    'ColeTrain',);
var inputfields = [];

inputfields.push (
    'trainname',
    'destination',
    'firsttraintime',
    'frequency',
);
document.write('JS read success');
function MainDisplay() {
    // build jumbotron
    var jumbotron = $('<div>');
    jumbotron.addClass('row')
    jumbotron.addClass('jumbotron'); // reseach jumbotron construction
    jumbotron.text('CHoo Chooo');
    jumbotron.css('background-color:brown')
    jumbotron.css('color:white')
    
    //  building blank lines
    var blank = $('<div>');
    blank.addClass('row')
    blank.addClass('col-md-12');
    blank.css('background-color:#fff');
    blank.html('&nbsp;');

    //  build main train display
    var traindisplay =  $('<div>');
    traindisplay.addClass('row');
    traindisplay.addClass('col-md-12');
    
    // build train display headers
    var traindisplayheaders = $('<div>');
    traindisplayheaders.addClass('col-md-3');
    for (var i=0; i<inputfields.length; i++){
        $(traindisplay).append(traindisplayheaders.text(inputfields[i]));    
    };
    // build trainchild
    var trainchild = $('<div>');
    trainchild.addClass('col-md-3');


    // build train input
    var traininput = $('<div>');
    traininput.addClass('row');
    

    // build page
    $('.container').append(jumbotron);
    $('.container').append(blank);
    $('.container').append(traindisplay);
    $(traindisplay).append(traindisplayheaders);
    $('.container').append(blank);
    $('.container').append();
    $('.container').append();


    // line color change - not yet implemented 4:31 PM 9/18/2019
    function lightordark() {
    ((tableline%2==0) ? light() : dark() )
        function light() {
            return '#778899'
        }
        function dark() {
            return '#708090'
        }
    }
}
MainDisplay();
*/

///


var firebaseConfig = {
    apiKey: "AIzaSyAQSWHrrXes_C3tMYqhF_dia7C3jI2wMkc",
    authDomain: "starterfka.firebaseapp.com",
    databaseURL: "https://starterfka.firebaseio.com",
    projectId: "starterfka",
    storageBucket: "",
    messagingSenderId: "584403285589",
    appId: "1:584403285589:web:12f58acc15bb74cd6f46dc"
};
// var then = moment();
// var howlong = moment().then.fromNow();

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var name = 0;
var rate = 0;
var date = 0;
var monthly = 0;

//database.ref().on('value',function(snapshot){
    //  On DB change
//});

//$('.submit-button').on('click',function() {
$('.submit-button').on('click',function() {
// function clickSubmit() { 
    console.log("clicked");
    event.preventDefault();
    name = $('#user-entry-name').val();
    rate = $('#user-entry-rate').val();
    date = $('#user-entry-start').val();
    monthly = $('#user-entry-monthly').val();

    alert(`Train: ${name} submitted.`);
// Push new values to 'table'
    function mkp(value){
        return '<p>'+ value + '</p>'
    }
    $('#em-name').append(mkp(name));
    $('#em-rate').append(mkp(rate));
    $('#em-start').append(mkp(date));
    $('#em-worked').append(mkp(5));
    $('#em-monthly').append(mkp(monthly));
    $('#em-total').append(mkp(monthly*5));

    database.ref().push({
        user:{
            name:name,
            rate:rate,
            date:date,
            monthly:monthly,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        }    
    });
});