const fs = require('fs');

(async function () {
  fs.writeFileSync('./build/.nojekyll', '');
  fs.writeFileSync('./build/_next/.nojekyll', '');
  fs.writeFileSync('./build/CNAME', 'nowldz.com');
})();
