	var changeOpacity = function(patternUnit){
		patternUnit.style.opacity = 1;

	}
    
    var getLines = function() {
        var lines = "";
        for(var j = 0; j < 19; j++) {
			var changeColor = (j / 19) * 255;
			var changeAngle = 90 + (10 * j);
			lines += `<div class="patternUnit" 
			               style="opacity: 0; background-color: rgb(${255 - changeColor}, 0, ${changeColor}); 
			               transform: rotate(${changeAngle}deg);">
			          </div>`;
		}
    	return lines;
    }
	
	var getCollection = function(lines, ii) {
		//console.log(i);
		var collection = `<div id="collection-${ii}" class="myCollection" 
		                       style="transform: rotate(${ii * 180}deg);">${lines}
		                  </div>`;
        return collection;
	}

	var appendToX = function(id, lines) {
        var collection = getCollection(lines, i);

		document.getElementById(id).insertAdjacentHTML('beforeend', collection);

        var collectionId = `collection-${i}`;
		var lines_ = document.querySelectorAll(`#${collectionId} .patternUnit`);

		for (var k = 0; k < lines_.length; k++) {
		    setTimeout(changeOpacity, 200 * k, lines_[k]);
	    }

		i = i + 1;
	}

    var i = 0;
    var lines = getLines();
    setInterval(appendToX, 300, "line", lines);

