CONTENT = $("#content");
DISCOVERY_COOKIE = 'isDiscovered';
TIMER_COOKIE = 'timer';
MAX_ELAPSED_TIME_IN_SECONDS = 3;


function getEpochTimeNowInMilliseconds() {
    return (new Date).getTime();
}


// Need to do such that content is not displayed onload, then maybe display when js executes
function onload() {
    if (discoveredBit.get()) {
        hideTooltip();
    }
    else if (timer.hasStarted() && timer.getElapsedInSeconds() > MAX_ELAPSED_TIME_IN_SECONDS) {
        hideTooltip();
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

function hideTooltipForever() {
    hideTooltip();
    discoveredBit.set();
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

discoveredBit = {
    'set': function() {
        Cookies.set(DISCOVERY_COOKIE, null);
    },

    'get': function() {
        return Cookies.get(DISCOVERY_COOKIE) != null;
    }
}

$("#content").click(hideTooltipForever);

console.log('End of js');