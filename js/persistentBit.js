
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
