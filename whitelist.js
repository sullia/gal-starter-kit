var whitelist = function() {
    var hardcodedWhitelist = [];
    hardcodedWhitelist.push('Veritas');
    hardcodedWhitelist.push('API');
    hardcodedWhitelist.push('Resiliency Domain: Domain1');
    hardcodedWhitelist.push('VMware');
    hardcodedWhitelist.push('SLA');
    hardcodedWhitelist.push('RG1...');
    hardcodedWhitelist.push('London DC');
    hardcodedWhitelist.push('admin@vrp.local');
    hardcodedWhitelist.push('Resiliency Manager : RM @New York');
    hardcodedWhitelist.push('OK');
    hardcodedWhitelist.push('MB');
    hardcodedWhitelist.push('MSDP');
    hardcodedWhitelist.push('VMWARE_SIMULATED_WWID_');
    hardcodedWhitelist.push('IPMI');
    hardcodedWhitelist.push('nbappg11n01');
    hardcodedWhitelist.push('KLNP');
    hardcodedWhitelist.push('NDMP');
    hardcodedWhitelist.push('nbappg11n02');

    var dateFormats = [];
    dateFormats.push("M/D/YYYY");
    dateFormats.push("D MMMM, YYYY");
    
    this.hardcodelist = function() {
        return hardcodedWhitelist;
    };

    this.dateFormats = function() {
        return dateFormats;
    };
}

module.exports = new whitelist();