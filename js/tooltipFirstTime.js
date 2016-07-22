CONTENT = $("#content");
DISCOVERY_COOKIE = 'isDiscovered';
TIMER_COOKIE = 'timer';
MAX_ELAPSED_TIME_IN_SECONDS = 3;

function onload() {
    if (getDiscoveredBit()) {
        hideTooltip();
    }
    else if (hasTimerStarted() && getElapsedTimeInSeconds() > MAX_ELAPSED_TIME_IN_SECONDS) {
        hideTooltip();
    }
    else {
        startTimer();
    }
}

function hideTooltip() {
    CONTENT.css('display', 'none');
}

function hideTooltipForever() {
    hideTooltip();
    setDiscoveredBit();
}

function getEpochTimeNowInMilliseconds() {
    return (new Date).getTime();
}

function startTimer() {
    Cookies.set(TIMER_COOKIE, getEpochTimeNowInMilliseconds());
}

function getElapsedTimeInSeconds() {
    if (!hasTimerStarted()) {
        return -1;
    }
    else {
        var elapsedTimeInMilliseconds = (getEpochTimeNowInMilliseconds() - Cookies.get(TIMER_COOKIE));
        return elapsedTimeInMilliseconds / 1000;
    }
}

function hasTimerStarted() {
    return Cookies.get(TIMER_COOKIE) != null;
}

function setDiscoveredBit() {
    Cookies.set(DISCOVERY_COOKIE, null);
}

function getDiscoveredBit() {
    return Cookies.get(DISCOVERY_COOKIE) != null;
}

$("#content").click(hideTooltipForever);

onload();
setDiscoveredBit();
getDiscoveredBit();
getEpochTimeNowInMilliseconds();
getElapsedTimeInSeconds();
startTimer();
hasTimerStarted();
console.log('End of js');