To start app locally:

1. Install dependencies (only before app initialization): 'yarn install'
2. Type 'yarn next dev'
3. App starts on http://localhost:3000/

To deploy app:

1. Push changes to master
2. Run 'npm run deploy'
3. Create in branch gh-pages empty file .nojekyll in \_next directory

Next export script does not convert .nojekyll file, so we need to create it manually.

Possible troubles:

1. 404 error - probably page is still in deployment, GitHub needs some time :) If waiting about 10 minutes does not help - check if CNAME file is in root directory in gh-pages branch and its content is valid URL.
2. No assets - check if empty .nojekyll file exists in \_next directory in gh-pages branch. If it is present, please create the same file in root directory.
