<?php

echo "<div id=\"nav\">";

    # source folder
    $source = "fonts/";

    # glob each famille folder in source folder	
    $familles = glob($source . "*", GLOB_ONLYDIR);

    # iterate each famille 
    foreach ($familles as $famille) {
	
	# remove $source
	$familleName = substr($famille,6);

	# create div
	echo "<div class=\"familleDiv\" id=\"$familleName\">";

	    echo "<p class=\"familleName\">$familleName</p>";

	    # glob each font file in famille folder
	    $fonts = glob($famille . "/" . "*", GLOB_ONLYDIR);
    	
	    # iterate each font
	    foreach ($fonts as $font) {

		# remove extension
		$fontName = pathinfo($font, PATHINFO_FILENAME);

		# create p
		echo "<p class=\"fontName\" id=\"$fontName\">$fontName</p>";

	    };

	echo "</div>";

    };
    
echo "</div>";

?>
