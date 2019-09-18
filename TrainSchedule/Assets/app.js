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
alert('JS read');
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