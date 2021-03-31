module.exports = {
    allowedHardcoded: function() {
        var allowedHardcodedStrings = [];

        allowedHardcodedStrings.push(/^Veritas.*$/gi);          // ignore case
        allowedHardcodedStrings.push(/^Globalization.*$/gi);    // ignore case
        allowedHardcodedStrings.push(/^Created by.*$/gi);       // ignore case
        allowedHardcodedStrings.push('cancel');                 // cancel icon

        return allowedHardcodedStrings;
    },
    allowedChars: function() {
        var allowedCorruptChars = [];

        allowedCorruptChars.push('☰');

        return allowedCorruptChars;
    }
}