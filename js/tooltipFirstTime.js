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
onload();

console.log('End of js');