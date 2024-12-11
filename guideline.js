**** START THE PROJECT **** 
    - npm init
    **Note: package.json file will be created.

**** CREATE README FILE 
    - root directory 
        - Readme.md file

**** INITIALIZE THE GIT REPOSITORY 
    - Open the terminal 
        - git init

**** ADD ALL FILES 
    - Open the terminal 
        - git add .

**** SEND THE COMMIT MESSAGE 
    - Open the terminal 
        - git commit -m "add initial files for backend"

**** CHANGE THE GIT BRANCH NAME 
    - Open the terminal 
        - git branch -M main

**** SET THE REMOTE OF THE GIT 
    - Open the terminal 
        - git remote add origin https://github.com/Mahfuj85/video-channel-backend.git

**** PUSH THE CODE TO GIT REPOSITORY 
    - Open the terminal 
        - git push -u origin main 

**** CREATE FOLDER 
    - root directory 
        - public folder 
            - temp folder under public 
                - .gitkeep file under temp (an empty file) 

**** CREATE A GIT IGNORE FILE 
    - root directory 
        - .gitignore 

**** GENERATE THE GIT IGNORE 
    - Go to the "https://mrkandreev.name/snippets/gitignore-generator"
        - Search node 
            - Click on create button 
                - Copy the code & paste it into .gitignore file 

**** CREATE ENV FILE 
    - root directory 
        - .env

**** CREATE SOURCE FOLDER 
    - root directory 
        - src 

**** CREATE FILES UNDER SRC 
    - open the terminal 
        - cd src 
        - ls 
        - touch app.js constants.js index.js 
    **Note: touch is used to create files using command line. 

**** ADD SCRIPT ON PACKAGE.JSON
    - package.json 
        - "type": "module"
    **Note: This type help us to import in "import" method, not in "require".

**** INSTALL NODEMON DEVLOPMENT DEPENDENCY 
    - Open the terminal 
        - npm i -D nodemon

**** CHANGE THE TEST SCRIPT 
    - package.json 
        - "dev": "nodemon src/index.js"

**** CREATE FOLDER UNDER SRC 
    - Open the terminal 
        - mkdir controllers db middlewares models routes utils 

**** DOWNLOAD PRETTIER 
    - Open the terminal 
        - npm i -D prettier 
**** CREATE FILES FOR PRETTIER SETTINGS 
    - root directory 
        - .prettierrc 
            - {
                "singleQuote": false,
                "bracketSpacing": true,
                "tabWidth": 2,
                "trailingComma": "es5",
                "semi": true
            } 
        - .prettierignore 
            - /.vscode
            /node_modules
            ./dist
            *.env 
            .env 
            .env* 

**** 