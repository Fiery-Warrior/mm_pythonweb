const whoiser = require('whoiser');
const fs = require('fs');

(async () => {
  let domaininfo = await whoiser('dbu.edu');
  let domaininfo2 = await whoiser.domain('blog.dbu.edu', { host: 'whois.nic.dbu', follow: 1 });

  // Create the output string with required formatting
  let outputString = 'First domain information:\n\n' + JSON.stringify(domaininfo, null, 2) + '\n\n======================\n\nSecond domain information:\n\n' + JSON.stringify(domaininfo2, null, 2);

  // Write output to file
  fs.writeFileSync('domaininfo.txt', outputString);

  // Write JSON output to file
  fs.writeFileSync('domaininfo.json', JSON.stringify({domaininfo, domaininfo2}, null, 2));
})();
