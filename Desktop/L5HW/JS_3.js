/*cache images for crossfade*/
var cache = {
	"c11/img/SJ.jpg": {
		"$img": jQuery object,
		"isLoading": false},

	"c11/img/Easter.jpg": {
		"$img": jQuery object,
		"isLoading": false},

	"c11/img/ShanaWP.jpg": {
		"$img": jQuery object,
		"isLoading": false}
	}



/*centering fade in & out animation*/
var request;
var $current;
var cache = {}
var $frame = $('#us');
var $thumbs =$('thumb');

function crossfade ($img) {

	if ($current) {
		$current.stop().fadeout('slow');
	}

	$img.css({
		marginLeft: -$img.width() /2,
		marginTop: -$img.height() /2
	});

	$img.stop().fadeTo('slow', 1);

	$current = $img;
}