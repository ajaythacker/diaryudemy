Deploy to firebase 
From inside your folder :
1. npm run build
  That way, the prod build is done and generates the 'build' folder

2. npm i -g firebase-tools
3. firebase login
4. firebase init
  when it asks "What do you want to use as your public directory?" Answer : build
              "Single page app" - y
              File "build/index.html" already exists. Overwrite ? - N

5. Once 4 is complete, open database.rules.json and change both the true to null
  auth != null means that authentication is needed

6. firebase deploy

=== Deploying to 'diary-e138f'...

i  deploying database, hosting
i  database: checking rules syntax...
+  database: rules syntax for database diary-e138f is valid
i  hosting: preparing build directory for upload...
+  hosting: 9 files uploaded successfully
i  database: releasing rules...
+  database: rules for database diary-e138f released successfully

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/diary-e138f/overview
Hosting URL: https://diary-e138f.firebaseapp.com