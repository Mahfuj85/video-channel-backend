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

**** CREATE DATABASE 
    - .env 
        - PORT= 8000
       -MONGODB_URI=mongodb+srv://mahfijurm886:Mahfuj123@cluster0.ar1zj.mongodb.net
    **Note: We use mongodb compass here. 

**** CREATE DATABASE NAME 
    - constants.js 
        - export const DB_NAME = "videotube";

**** CREATE CONNECTION WITH DATABASE 
    *** FIRST APPROCH TO CONNECT DATABASE ***
    - index.js 
STEP-1: IMPORT MONGOOSE 
    - import mongoose from "mongoose";
STEP-2: CREATE A CALL BACK FUNCTION 
    - (async()=>{

    })()
STEP-3: CREATE TRY-CATCH BLOCK 
    - try {
        
    } catch (error) {
        
    }
STEP-4: CONSOLE & THROW ERROR 
    - catch (error) {
        console.log("ERROR:",error)
        throw error
    }
STEP-5: CONNECT TO DATABASE WITH MONGOOSE 
    - try block 
        - await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
STEP-6: IMPORT DB NAME 
    - import { DB_NAME } from "./constants";
STEP-7: IMPORT & INITIALIZE EXPRESS 
    - import express from "express";
    - const app = express() 
STEP-8: CREATE APP LISTENER 
    - try block 
        - app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
          });
STEP-9: SEND CONNECTION MESSAGE 
    - try block 
        - app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
          }); 
**Note: We dont use this process. We use another process. 

    *** SECOND APPROACH TO CONNECT DATABASE *** 
STEP-1: CREATE A FILE 
    - db 
        - db.js 

    - db.js 
STEP-2: IMPORT MONGOOSE & DB NAME 
    - import mongoose from "mongoose";
    - import { DB_NAME } from "../constants";
STEP-3: CREATE AN ASYNCRONUS FUNCTION 
    - const connectDB = async () => {};
STEP-4: CREATE TRY CATCH BLOCK 
    - try {
        
    } catch (error) {
        
    }
STEP-5: HANDLE THE ERROR 
    - catch block 
        - console.log("MONGODB connection error", error);
        - process.exit(1);
    **Note: Here, process is work as like throw.
STEP-6: CONNECT THE DATABASE & STORE IT IN A VARIABLE 
    - try block 
        - const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
STEP-7: CONSOLE THE VARIABLE 
    - try block 
        - console.log(
            `\n MongoDB connected !!! DB HOST: ${connectionInstance.connection.host}`
          );
STEP-8: EXPORT THE DATABASE 
    - export default connectDB; 

*** USE DB.JS INTO INDEX FILE ***
    - index.js 
STEP-1: IMPORT DOT ENV 
    - require('dotenv').config({path: './env'}) 
    **Note: We use import method rather than require method
    - import dotenv from "dotenv" 
STEP-2: USE THE CONFIG OF DOT ENV 
    - dotenv.config({
        path: './env'
    }) 
STEP-3: CHANGE THE DEV SCRIPT
    - package.json 
        - dev script 
            - "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
STEP-4: IMPORT THE CONNECTDB 
    - import connectDB from "./db/db.js";
STEP-5: CALL THE CONNECTDB 
    - connectDB(); 
