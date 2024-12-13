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

**** USING EXPRESS **** 
    - app.js 
STEP-1: IMPORT EXPRESS 
    - import express from "express";
STEP-2: CREATE APP 
    - const app = express() 
STEP-3: EXPORT APP 
    - export { app }; 

**** USING APP INTO INDEX FILE 
    - index.js 
STEP-1: IMPORT APP 
    - import { app } from "./app.js";
STEP-2: ADD THEN & CATCH AFTER CONNECTDB 
    - connectDB()
    .then()
    .catch() 
STEP-3: HANDLE ERROR 
    - catch 
        - console.log("MongoDB connection failed !!! ", err); 
STEP-4: START THE APP 
    - then 
        - app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
          }); 
STEP-5: SEND ERROR MESSAGE 
    - then 
        - app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
          });

*** INSTALL COOKIE-PARSER AND CORS ***
    - Open the terminal,  type the code & press Enter 
        - npm i cookie-parser cors
*** USING COOKIE-PARSER AND CORS *** 
    - app.js 
STEP-1: IMPORT COOKIE-PARSER AND CORS 
    - import cors from "cors"
    - import cookieParser from "cookie-parser";
STEP-2: CONFIGURE THE CORS 
    - app.use(cors()) 
    **Note: Whenever you use a middleware, you should to use "app.use()"
STEP-3: CREATE OPTION FOR CORS 
    - cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      }) 
STEP-4: CREATE CORS_ORIGIN AT ENV FILE 
    - CORS_ORIGIN=* 
STEP-5: MAKE CONFIGURATION FOR JSON FILE LIMIT  
    - app.use(express.json({ limit: "16kb" })); 
STEP-6: MAKE CONFIGURATION FOR URL ENCODE 
    - app.use(express.urlencoded({ extended: true, limit: "16kb" }));
    **Note: Here, extended: true is used for nested object, that means you can make objects under an object. 
STEP-7: MAKE CONFIGURATION FOR PUBLIC FOLDER 
    - app.use(express.static("public"));
STEP-8: MAKE CONFIGURATION FOR COOKIE PARSER 
    - app.use(cookieParser());

    **** CREATING UTILS **** 
*** CREATE ASYNCHANDLER AS A WRAPPING FUNCTION *** 
STEP-1: CREATE FILE 
    - utils 
      - asyncHandler.js 
STEP-2: CREATE A FUNCTION AND EXPORT IT 
    - asyncHandler.js 
      - const asyncHandler = () => {};
      - export { asyncHandler };
STEP-3: CREATE A HIGHER ORDER ASYNCRONUS FUNCTION AS A PARAMETER 
    - const asyncHandler = (fn) => async (req, res, next) => {}
    **Note: This function is combined for 3 functions 
    - const asyncHandler = () => {}
    - const asyncHandler = (fn) => () => {}
    - const asyncHandler = (fn) => async () => {}
    A function can take 4 parameter(error, request, response, next). next is used for using middleware. 
STEP-4: CREATE TRY CATCH BLOCK 
    - try {
        
    } catch (error) {
        
    }
STEP-5: HANDLE THE ERROR 
    - catch (error) {
        res.status(error.code || 500).json({
          success: false,
          message: error.message,
        });
      }
    **Note: If the user pass an error code, it will send the code or send 500. We will have a json response also. We have 2 flags in the json  response (success: false, message: error.message)
STEP-6: EXECUTE THE FUNCTION USED AS PARAMETER 
    - try block 
      - try {
        await fn(req, res, next)
      }

STEP-7: FORMATE THE ASYNCHANDLER FUNCTION INTO PROMISE 
    - const asyncHandler = (requestHandler) => {
        (req, res, next) => {
          Promise.resolve(requestHandler(req, res, next)).catch((error) =>
            next(error)
          );
        };
      };

**** HANDLING API ERRORS **** 
STEP-1: CREATE FILE 
    - utils 
      - ApiError.js 
STEP-2: CREATE A CLASS 
    - ApiError.js 
      - class ApiError extends Error {}
STEP-3: CREATE CONSTRUCTOR 
    - ApiError.js 
      - constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){}
STEP-4: OVERWRITE THE FIELDS OF THE CONSTRUCTOR 
    - {
        super(message)
        this.statusCode
        this.data = null 
        this.message = message
        this.success = false,
        this.errors = this.errors
    } 
STEP-5: CREATE CONDITION FOR STACK 
    - if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
STEP-6: EXPORT THE API ERROR 
    - export { ApiError };

**** HANDLING API RESPONSE **** 
STEP-1: CREATE FILE 
    - utils 
      - ApiResponse.js
STEP-2: CREATE A CLASS 
    - ApiError.js
        - class ApiResponse {
    
      }
STEP-3: CREATE CONSTRUCTOR 
    - ApiResponse.js 
      - constructor(statusCode, data, message = "Success") {}
STEP-4: OVERWRITE THE FIELDS OF THE CONSTRUCTOR 
    - {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
      }