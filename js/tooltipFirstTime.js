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

timer = new createTimer();

function createPersistentBitSetByDefault() {
    this.cookieStr = 'persistentBitSetByDefault';
    this.clear = function() {
        Cookies.set(this.cookieStr, null);
    };
    this.get = function() {
        var cookieExists = Cookies.get(this.cookieStr) != null;
        return !cookieExists;
    };
    this.set = function() {
        Cookies.remove(this.cookieStr);
    };
}

var persistentDisplayState = {
    'isDisplayed': new createPersistentBitSetByDefault(),

    // The following method needs to be called once the object is declared
    'onload': function() {
        console.log('in persistentDisplayState.onload');
        console.log(this);
        if (this.isDisplayed.get()) {
            showTooltip();
        }
        else {
            hideTooltip();
        }
    },

    'setToHide': function() {
        hideTooltip();
        this.isDisplayed.clear();
    },

    'setToShow': function() {
        showTooltip();
        this.isDisplayed.set();
    }
}
persistentDisplayState.onload();

$("#content").click(persistentDisplayState.setToHide);
onload();

console.log('End of js');