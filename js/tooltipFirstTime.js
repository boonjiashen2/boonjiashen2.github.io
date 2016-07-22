CONTENT = $("#content");
TIMER_COOKIE = 'timer';
MAX_ELAPSED_TIME_IN_SECONDS = 3;


// Need to do such that content is not displayed onload, then maybe display when js executes
function onload() {
    if (timer.hasStarted() && timer.getElapsedInSeconds() > MAX_ELAPSED_TIME_IN_SECONDS) {
        tooltipPersistentState.setToClosed();
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

timer = {
    'start': function() {
        Cookies.set(TIMER_COOKIE, getEpochTimeNowInMilliseconds());
    },

    'getElapsedInSeconds': function() {
        if (!this.hasTimerStarted()) {
            return null;
        }
        else {
            var elapsedTimeInMilliseconds = (getEpochTimeNowInMilliseconds() - Cookies.get(TIMER_COOKIE));
            return elapsedTimeInMilliseconds / 1000;
        }
    },

    'hasStarted': function() {
        return Cookies.get(TIMER_COOKIE) != null;
    }
}

tooltipPersistentState = {
    'cookieStr': 'isDiscovered',

    'onload': function() {
        var cookieExists = Cookies.get(this.cookieStr) != null;
        if (cookieExists) {
            hideTooltip();
        }
        else {
            showTooltip();
        }
    },

    'setToClosed': function() {
        hideTooltip();
        Cookies.set(this.cookieStr, null);
    },

    'setToOpen': function() {
        showTooltip();
    }
}
tooltipPersistentState.onload();

$("#content").click(tooltipPersistentState.setToClosed);

console.log('End of js');