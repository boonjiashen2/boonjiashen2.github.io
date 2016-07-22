CONTENT = $("#content");
MAX_ELAPSED_TIME_IN_SECONDS = 3;


// Need to do such that content is not displayed onload, then maybe display when js executes
function onload() {
    if (timer.hasStarted() && timer.getElapsedInSeconds() > MAX_ELAPSED_TIME_IN_SECONDS) {
        persistentDisplayState.setToHide();
    }
    else {
        timer.start();
    }
}

function showTooltip() {
    CONTENT.css('display', 'block');
}

function hideTooltip() {
    CONTENT.css('display', 'none');
}

function getEpochTimeNowInMilliseconds() {
    return (new Date).getTime();
}

function createTimer() {
    this.cookieStr = 'timer';
    this.start = function() {
        Cookies.set(this.cookieStr, getEpochTimeNowInMilliseconds());
    };
    this.getElapsedInSeconds = function() {
        if (!this.hasStarted()) {
            return null;
        }
        var elapsedTimeInMilliseconds = (getEpochTimeNowInMilliseconds() - Cookies.get(this.cookieStr));
        return elapsedTimeInMilliseconds / 1000;
    };
    this.hasStarted = function() {
        return Cookies.get(this.cookieStr) != null;
    }
}

function clearAllCookies() {
    var cookies = document.cookie.split(";");
    for(var i=0; i < cookies.length; i++) {
        var equals = cookies[i].indexOf("=");
        var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function createPersistentDisplayState(persistentDisplayBit) {
    this.isDisplayed = persistentDisplayBit;

    // The following method needs to be called once the object is declared
    this.onload = function() {
        if (persistentDisplayBit.get()) {
            showTooltip();
        }
        else {
            hideTooltip();
        }
    };

    this.setToHide = function() {
        hideTooltip();
        persistentDisplayBit.clear();
    };

    this.setToShow = function() {
        showTooltip();
        persistentDisplayBit.set();
    };
}

timer = new createTimer();
persistentDisplayBit = new createPersistentBitSetByDefault();
persistentDisplayState = new createPersistentDisplayState(persistentDisplayBit);
persistentDisplayState.onload();

$("#content").click(persistentDisplayState.setToHide);
$("#clearAllCookies").click(function() {
    clearAllCookies();
    $("#clearAllCookies").html("All cookies cleared.");
});
onload();

console.log('End of js');