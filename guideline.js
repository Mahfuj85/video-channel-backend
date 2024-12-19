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

**** CREATING MODELS **** 
    *** CREATE USER MODEL *** 
STEP-1: CREATE FILE 
    - models 
      - user.model.js
      - video.model.js 
STEP-2: CREATE USER MODEL 
    - user.model.js 
STEP-3: CREATE VIDEO MODEL 
    - video.model.js 
STEP-4: INSTALL MONGOOSE AGRREGATE PAGINATE 
    - Open the terminal, paste the code & press Enter 
      - npm i mongoose-aggregate-paginate-v2 
STEP-5: IMPORT MONGOOSE AGGREGATE PAGINATE 
    - import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
STEP-6: USE MONGOOSE AGGREGATE PAGINATE 
    - videoSchema.plugin(mongooseAggregatePaginate);

**** INSTALLATION OF BCRYPT & JWT 
    - Open the terminal, paste the code & press Enter 
      - npm i bcrypt jsonwebtoken

**** USE BCRYPT **** 
STEP-1: IMPORT BCRYPT 
    - user.model.js 
      - import bcrypt from "bcrypt";
STEP-2: USE MONGOOSE HOOK 
    - user.model.js 
      - userSchema.pre() 
    **Note: Pre middleware functions are executed one after another, when each middleware calls next. That means: pre is a hook which work just before execution a function. In example: when we are going to save a user, it will bcypt the password of the user just before saving. 
STEP-3: USING THE EVENT 
    - user.model.js 
        - userSchema.pre() 
            - userSchema.pre("save")
STEP-4: USING ASYNCHRONOUS CALL BACK FUNCTION 
    - user.model.js 
        - userSchema.pre() 
            - userSchema.pre("save", async function () {});
STEP-5: PASS THE MIDDLEWARE FLAG 
    - user.model.js 
        - userSchema.pre() 
            - userSchema.pre("save", async function (next) {});
STEP-6: ENCRYPT THE PASSWORD 
    - user.model.js 
        - userSchema.pre() 
            - function 
                - this.password = bcrypt.hash(this.password, 10)
            **Note: We need two things to hash a password. The first one is the password(this.password) and the second one is number of rounds(10).
STEP-7: CALL NEXT 
    - user.model.js 
        - userSchema.pre() 
            - function 
                - next(); 
    **Note: It will encrypt the password whenever you save the user. That means whenever you update the user, it will update the password also. We need to create a condition to solve the problem. 
STEP-8: CREATE A CONDITION 
    - user.model.js 
        - userSchema.pre() 
            - function 
                - if (!this.isModified("password")) return next();
    **Note: It will return the function if the password is not modified. If modified, it will encrypt the password.  
STEP-9: DESIGN CUSTOM METHODS TO CHECK THE PASSWORD 
    - user.model.js 
      - userSchema.methods.isPasswordCorrect = async function(password){
  
      }
STEP-10: COMPARE THE PASSWORD & RETURN IT 
    - user.model.js 
      - function 
        - return await bcrypt.compare(password, this.password);
    **Note: compare takes two value(String data, encrypted data)

**** USING JSON WEB TOKEN **** 
STEP-1: CREATE VARIABLE 
    - .env 
      - ACCESS_TOKEN_SECRET=0TUCJkahkdhhMOhabuiueb-92048YODkhapu_haneEH3jsueHKksho0
      - ACCESS_TOKEN_EXPIRY= 1d
      - REFRESH_TOKEN_SECRET=CKEHkjkhohd934_hskhSHJH4jkajhfdbjh-03RfjhoUOjfjhjbf0khKL
      - REFRESH_TOKEN_EXPIRY=10d 
    **Note: ACCESS_TOKEN_SECRET & ACCESS_TOKEN_EXPIRY wont go to the database. 
STEP-2: IMPORT jwt
    - user.model.js 
      - import jwt from "jsonwebtoken";
STEP-3: DESIGN CUSTOM METHODS TO GENERATE ACCESS TOKEN
    - user.model.js 
      - userSchema.methods.generateAccessToken = function(){}
STEP-4: GENERATE TOKEN 
    - user.model.js 
      - function 
        - jwt.sign();
STEP-5: STORE PAY LOAD  
    - user.model.js
      - sign
        - {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
          }
STEP-6: STORE ACCESS TOKEN & EXPIRY 
    - user.model.js
        - sign
            - process.env.ACCESS_TOKEN_SECRET,
            - {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
              }
            **Note: ACCESS_TOKEN_EXPIRY must have to be stored in an object 
STEP-7: RETURN THE TOKEN 
    - user.model.js
        - return jwt.sign 
STEP-8: DESIGN CUSTOM METHODS TO GENERATE REFRESH TOKEN
    - user.model.js
        - userSchema.methods.generateRefreshToken = function () {
            return jwt.sign(
              {
                _id: this._id,
              },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
              }
            );
          };

**** USING CLOUDINARY **** 
STEP-1: CREATE ACCOUNT WITH GOOGLE ACCOUNT 
STEP-2: INSTALL CLOUDINARY & MULTER 
    - npm i cloudinary
    - npm i multer 
STEP-3: CREATE FILE 
    - utils 
        - cloudinary.js
STEP-4: IMPORT V2 & FS 
    - cloudinary.js 
        - import { v2 as cloudinary } from "cloudinary";
        - import fs from "fs";
STEP-5: USE CLOUDINARY CONFIGURATION 
    - .env 
        - CLOUDINARY_CLOUD_NAME=
        - CLOUDINARY_API_KEY=
        - CLOUDINARY_API_SECRET=
STEP-6: USE ENV DATA INTO CLOUDINARY CONFIG 
    - cloudinary.js
        - cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
          }); 
STEP-7: CREATE A FUNCTION 
    - cloudinary.js
        - const uploadOnCloudinary = async (localFilePath) => {}
STEP-8: CREATE TRY CATCH BLOCK 
    - cloudinary.js
        - function 
          - try {
        
          } catch (error) {
              
          }
STEP-9: CREATE A CONDITION & RETURN 
    - cloudinary.js
        - try block 
          - if(!localFilePath) return null
        **Note: Our files will be stored at our local storage at first. Then it will be uploaded into cloudinary database using multer. The condition means: if a file stored in local storage, it must have a local file pathname. If the file does not have any pathname, the function will return null 
STEP-10: UPLOAD THE FILE IN CLOUDINARY 
    - cloudinary.js
        - try block 
            - const response = await cloudinary.uploader.upload(
                localFilePath, {
                    resource_type: "auto"
                }
            )
        **Note: The uploader contains two data. One is file url and other one is options. The "resource_type" may be Image, video, raw. The function will check the file type, so we use "auto". 
STEP-11: SEND SUCCESSFUL MESSAGE 
    - cloudinary.js
        - try block 
            - console.log("File uploaded successfully on cloudinary", response.url);
STEP-12: RETURN THE RESPONSE 
    - cloudinary.js
        - try block 
            - return response;
STEP-13: REMOVE THE LOCALLY SAVED FILE & RETURN 
    - cloudinary.js
        - try block 
            - fs.unlinkSync(localFilePath); 
            - return null; 
        **Note: This will remove the locally saved temporary file when the upload operation got failed.
STEP-14: EXPORT THE METHOD 
    - cloudinary.js
        - export { uploadOnCloudinary };

**** USE OF MIDDEWARE USING MULTER **** 
STEP-1: CREATE FILE 
    - middlewares 
        - multer.middleware.js 
STEP-2: IMPORT MULTER 
    - multer.middleware.js 
        - import multer from "multer";
STEP-3: CREATE METHOD 
    - multer.middleware.js
        - const storage = multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, "./public/temp");
          },
          filename: function (req, file, cb) {
            cb(null, file.originalname);
          },
        });
        
        - export const upload = multer({ storage });

**** CREATE CONTRLLER FOR USER **** 
STEP-1: CREATE FILE 
    - controllers 
        - user.controller.js
STEP-2: IMPORT ASYNCHANDLER 
    - user.controller.js
        - import {asyncHandler} from "../utils/asyncHandler.js"
STEP-3: CREATE A METHOD TO REGISTER USER 
    - user.controller.js
        - const registerUser = asyncHandler(async (req, res) => {
            res.status(200).json({
              message: "ok",
            });
          });
STEP-4: EXPORT THE METHOD 
    - user.controller.js
        - export { registerUser };

**** CREATE ROUTE FOR USER **** 
STEP-1: CREATE FILE 
    - routes 
        - user.route.js 
STEP-2: IMPORT ROUTER FROM EXPRESS 
    - user.route.js 
        - import { Router } from "express";
STEP-3: CREATE "router" FROM ROUTER 
    - user.route.js 
        - const router = Router();
STEP-4: EXPORT ROUTER 
    - user.route.js 
        - export default router;
STEP-5: IMPORT ROUTER 
    - app.js 
        - import userRouter from "./routes/user.route.js" 
STEP-6: DECLARE THE ROUTER 
    - app.js 
        - app.use("/users", userRouter); 
    STANDARDIZE THE ROUTE: app.use("/api/v1/users", userRouter); 
    The register route will be: http://localhost:8000/api/v1/users/register 
    **Note: We use "app.use" to declare the router. We can use "app.get". When we write the routes in the same file, we can use "app.get". But we write the router in separate file. That why, we are using a middleware(app.use) to declare the router. 
STEP-7: CREATE ROUTE FOR REGISTER 
    - user.route.js 
        - router.route("/register").post(registerUser); 
    **Note: Here we got a error. The error is "Route.post() requires a callback function but got a [object Undefined]". This may be for import & export case. But our import & export function have no issue to error. Problem is in asyncHandler file. Cause, we write the asyncHandler as a higher function. But we didnt return the object. Thats why the error shows "[object Undefined]". To solve this error, er return the object of the asyncHandler function. 
        - const asyncHandler = (requestHandler) => {import { upload } from './src/middlewares/multer.middleware';

            return (req, res, next) => {
              Promise.resolve(requestHandler(req, res, next)).catch((error) =>
                next(error)
              );
            };
          };

**** REGISTER THE USER **** 
STEP-1: GET USER DETAILS FROM FRONTEND 
    - user.controller.js 
        - const { username, email, fullname, password } = req.body;
        - console.log(
          "email: ",
          email,
          "username: ",
          username,
          "fullname: ",
          fullname,
          "password: ",
          password
        );
    **Note: We will get user details in our cmd prompt 
STEP-2: HANDLE FILES 
    - user.route.js 
    Step-1: Import upload 
        - import { upload } from "../middlewares/multer.middleware.js";
    Step-2: Use the upload 
        - router.route("/register").post(
            upload.fields([
              {
                name: "avatar",
                maxCount: 1,
              },
              {
                name: "coverImage",
                maxCount: 1,
              },
            ]),
            registerUser
          );
STEP-3: VALIDATE THE FIELDS 
    - user.controller.js 
        - if (
            [fullname, email, username, password].some((field) => field?.trim() === "")
          ) {
            throw new ApiError(400, "All fields are required");
          }
        **Note: At first, we create an array with the user details. Then we use "some" method in it. Some is used instead of map. We wil get field after using some. Finally trim the field. trim is a string method that removes leading and trailing whitespace from a string. If the field after trimming are null, then throw a new Api Error message. 
STEP-4: CHECK IF USER ALREADY EXISTS 
    - user.controller.js 
    Step-1: Import User 
        - import { User } from './../models/user.model';
    Step-2: Use findOne method on User 
        - User.findOne()
    Step-3: Find username or email using operator 
        - User.findOne({
            $or: [{ username }, { email }],
          }); 
        **Note: or operator will be an array. Put number of object how many value you want to check. We use two object, cause we want to check two value. 
    Step-4: Store this method into a variable 
        - const existedUser = User.findOne({
            $or: [{ username }, { email }],
          });
    Step-5: Check existedUser if belongs or not 
        - if(existedUser){}
    Step-6: Throw an Error message 
        - if(existedUser){
            throw new ApiError(409, "User with this email or username already exists");
          }
STEP-5: CHECK THE AVATAR FILE & COVER IMAGE 
    - user.controller.js 
    Step-1: Get the avatar file path & store it in a variable 
        - const avatarLocalPath = req.files?.avatar[0]?.path;
        **Noter: The avatar image will come through request & it may be multiple files, thats why we use "req.files". We use first file, thats why we use "avatar[0]". 
    Step-2: Get the coverImage file path & store it in a variable 
        - const coverImageLocalPath = req.files?.coverImage[0]?.path;
        **Noter: Same procedure. 
    Step-3: Throw error message if avatarLocalPath does not exists 
        - if (!avatarLocalPath) {
            throw new ApiError(400, "Avatar file is required");
          }
STEP-6: UPLOAD AVATAR & COVER IMAGE ON CLOUDINARY 
    - user.controller.js 
    Step-1: Import uploadOnCloudinary 
        - import { uploadOnCloudinary } from "../utils/cloudinary.js";
    Step-2: Upload avatar & coverImage
        - const avatar = await uploadOnCloudinary(avatarLocalPath);
        - const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    Step-3: Check avatar is exists 
        - if (!avatar) {
            throw new ApiError(400, "Avatar file is required");
          } 
STEP-7: CREATE AN OBJECT AND STORE IT IN A VARIABLE 
    - user.controller.js 
        - const user = await User.create({
            fullname,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase(),
          });
STEP-8: REMOVE PASSWORD & REFRESH TOKEN FROM THE USER 
    - user.controller.js 
        - const createdUser = await user
        .findById(user._id)
        .select("-password -refreshToken");
    **Note: At first, we will find the user with its id in the db. Then we will select the properties which we dont want to show and the property must be in string. 
STEP-9: CHECK THE USER CREATED OR NOT 
    - user.controller.js 
        - if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user");
          }
STEP-10: RETURN THE RESPONSE 
    - user.controller.js 
        - return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "User registered successfully"));
    
STEP-11: REMOVE FILES FROM CLOUDINARY 
    - cloudinary.js 
        - try block 
          - comment the console 
          - fs.unlinkSync(localFilePath);
        **Note: It will help to remove the files if it uploaded successfully or failed in the future. 

**** CREATE COLLECTION ON POSTMAN **** 
STEP-1: CREATE COLLECTION 
    - Click on Collection from left side menu 
        - Click on plus(+) icon 
          - Click on Blank collection 
            - Rewrite the collection name(Videotube) on New Collection 
STEP-2: ADD A REQUEST 
    - Click on "Add a request" 
        - Rewrite the request name(register) on New Request 
          - Click on Save button 
STEP-3: CREATE FOLDER IN VIDEOTUBE 
    - Click on down arrow after Save button 
        - Click on Save as 
          - Click on Videotube 
            - Click on New Folder 
                - Write the folder name(users) and click on Create 
                    - Click on Save 
        - Now delete the previous "register" request 
STEP-4: CREATE AN ENVIRONMENT  
    - Click on Environments from left side menu 
        - Click on plus(+) icon 
          - Rewrite the variable name(Videotube) on New Environment  
STEP-5: ADD AN ENVIRONMENT 
    - Fill up the form on Videotube environment 
        - Write variable name(server) on "Variable"
        - Paste the url code(http://localhost:8000/api/v1) on Initial value & Current vale 
        - Click on Save button 
STEP-6: LINK UP THE ENVIRONMENT 
    - Click on the down arrow after No environment 
        - Click on Videotube 
STEP-7: USE THE ENVIRONMENT ON THE COLLECTION 
    - Click on register collection 
        - Delete the v1 part of the url 
            - Type two curly bracket({{), server option will be seen, press on it 
STEP-8: CREATE A REGISTER 
    - Click on Body 
        - Click on form-data 
            - Add Key & Value 
    
**** LOGIN THE USER **** 
STEP-1: CREATE A FUNCTION WITH ASYNC HANDLER 
    - user.controller.js 
        - const loginUser = asyncHandler(async(req, res) => {})
STEP-2: EXPORT THE FUNCTION 
    - user.controller.js 
        - export { registerUser, loginUser };
STEP-3: GET THE DATA FROM REQ BODY 
    - user.controller.js 
        - const { email, username, password } = req.body;
STEP-4: CHECK IF USERNAME OR EMAIL IS COMING 
    - if (!username || !email) {
        throw new ApiError(400, "username or email is required")
      }
STEP-5: FIND THE USER ON DB 
    - const user = await User.findOne({
        $or: [{username}, {email}]
      })
STEP-6: CHECK THE USER EXISTS 
    - if (!user) {
        throw new ApiError(404, "User does not exist")
      }
STEP-7: CHECK THE PASSWORD 
    - const isPasswordValid = await user.isPasswordCorrect(password); 
STEP-8: THROW AN ERROR IF PASSWORD DOES NOT MATCH 
    - if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
      }
STEP-9: CREATE A METHOD TO GENERATE ACCESS AND REFRESH TOKEN 
    Step-1: Create a async function 
      - const generateAccessAndRefreshToken = async (userId) => {}
    Step-2: Create try-catch block and throw error message 
      - try {
    } catch (error) {
      throw new ApiError(
        500,
        "Something went wrong while generating refresh and access token"
      );
    }
    Step-3: Find the user 
        - try block     
            - const user = await User.findById(userId);
    Step-4: Generate access and refresh token 
        - try block 
            - const accessToken = user.generateAccessToken();
            - const refreshToken = user.generateRefreshToken();
    Step-5: Store the refreshToken into refreshToken of db 
        - try block 
            - user.refreshToken = refreshToken;
    Step-6: Save the user on db 
        - try block 
            - await user.save({validateBeforeSave: false})
        **Note: It will give a command to save the user without any validation. 
    Step-7: Return the tokens 
        - return { accessToken, refreshToken }; 
STEP-10: GET ACCESS AND REFRESH TOKEN 
    - loginUser function 
        - const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
            user._id
          );
STEP-11: SEND COOKIE 
    Step-1: Select the data that want to send the user 
        - const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    Step-2: Create options
        - const options = {
            httpOnly: true,
            secure: true,
          };
        **Note: It helps the cookie to modify only from server, not from frontend 
    Step-3: Return a response 
        - return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            {
              user: loggedInUser,
              accessToken,
              refreshToken,
            },
            "User Logged In Successfully"
          )
        );
STEP-12: CREATE ROUTE FOR LOGIN 
    - user.route.js 
        - router.route("/login").post(loginUser); 

**** CREATE A MIDDLEWARE **** 
It will check if user logged in or not. When we logged in an user, we give him an access token and refresh token. We verify the user if he has the right token in the basis of the token. If he has the right token, he is the true logged in. If he has the true logged in, we add an new object under the request(req.user). 
STEP-1: CREATE A FILE 
    - middleware 
        - auth.middleware.js 
STEP-2: CREATE METHOD 
    - auth.middleware.js
        - export const verifyJWT = asyncHandler(async(req, res, next) => {})
STEP-3: IMPORT ASYNCHANDLER 
    - import { asyncHandler } from "../utils/asyncHandler.js";
STEP-4: GET THE ACCESS TOKEN 
    - const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
STEP-5: THROW ERROR MESSAGE 
    - if (!token) {
        throw new ApiError(401, "Unauthorized request");
      }
STEP-6: GET THE JWT 
    - const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
STEP-7: FIND THE USER ON DB 
    - const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
      );
    **Note: _id is coming from the jwt method of user model 
STEP-8: THROW AN ERROR MESSAGE 
    - if (!user) {
        throw new ApiError(401, "Invalid Access Token");
      } 
    **Note: 
STEP-9: ADD THE USER ON REQUEST AND CALL THE NEXT 
    - req.user = user;
    - next();

**** LOG OUT THE USER **** 
STEP-1: CREATE A METHOD 
    - user.controller.js 
      - const logoutUser = asyncHandler(async (req, res) => {});
STEP-2: UPDATE THE REFRESH TOKEN 
    - await User.findByIdAndUpdate(
        req.user._id,
        {
          $set: {
            refreshToken: undefined,
          },
        },
        {
          new: true,
        }
      ); 
STEP-3: SET UP OPTIONS 
    - const options = {
        httpOnly: true,
        secure: true,
      }; 
STEP-4: RETURN THE RESPONSE 
    - return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out Successfully"));
STEP-5: CREATE ROUTE FOR LOGOUT 
    - user.route.js 
        - router.route("/logout").post(verifyJWT, logoutUser);

**Note: Sometimes we will find that req & next are being used, but res is not being used. In that case we can write "_" instead of res. 

**** CREATE AN END POINT WHERE USER CAN REFRESH HIS ACCESS TOKEN **** 
STEP-1: CREATE A METHOD 
    - user.controller.js 
      - const refreshAccessToken = asyncHandler(async(req, res)=> {})
STEP-2: ACCESS THE REFRESH TOKEN 
    - const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
STEP-3: THROW AN ERROR MESSAGE 
    - if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
      } 
STEP-4: VERIFY THE INCOMING REFRESH TOKEN WITH OUR DB REFRESH TOKEN 
    - const decodedToken = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
STEP-5: ACCESS THE USER FROM DB 
    - const user = await User.findById(decodedToken?._id);
STEP-6: THROW AN ERROR MESSAGE 
    - if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }
STEP-7: MATCH THE INCOMING REFRESH TOKEN WITH USERS REFRESH TOKEN AND THROW AN ERROR 
    - if (incomingRefreshToken !== user?.refreshToken) {
        throw new ApiError(401, "Refresh token is expired or used");
      }
STEP-8: CREATE OPTIONS 
    - const options = {
        httpOnly: true,
        secure: true,
      };
STEP-9: GENERATE TOKENS 
    - const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(
        user._id
      );
STEP-10: SEND RESPONSE 
    - return res
    .status(200)
    .clearCookie("accessToken", accessToken, options)
    .clearCookie("refreshToken", newRefreshToken, options)
    .json(
      new ApiResponse(
        200,
        { accessToken, refreshToken: newRefreshToken },
        "Access token refreshed successfully"
      )
    );
STEP-11: EXPORT REFRESH ACCESS TOKEN 
    - export { registerUser, loginUser, logoutUser, refreshAccessToken };
STEP-12: CREATE ROUTE FOR REFRESH ACCESS TOKEN 
    - user.route.js 
        - router.route("/refresh-token").post(refreshAccessToken);

**** CREATE MODEL FOR SUBSCRIPTION **** 
STEP-1: CREATE FILE 
    - models 
        - subscription.model.js
STEP-2: IMPORT MONGOOSE & SCHEMA  
    - import mongoose, {Schema} from "mongoose";
STEP-3: CREATE MODEL 
    - const subscriptionSchema = new Schema({}, {timestamps: true})
STEP-4: CREATE OBJECT 
    - subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User",
      },
    - channel: {
        type: Schema.Types.ObjectId,  // one to whom 'subscriber' is subscribing 
        ref: "User",
      },
STEP-5: EXPORT THE SCHEMA 
    - export const Subscription = mongoose.model("Subscription", subscriptionSchema);

**** CREATE METHOD TO CHANGE PASSWORD **** 
    - user.controller.js 
STEP-1: CREATE METHOD 
    - const changeCurrentPassword = asyncHandler(async(req, res) => {})
STEP-2: ACCESS INFORMATION FROM BODY 
    - const { oldPassword, newPassword } = req.body;
STEP-3: GET THE USER FROM DB 
    - const user = await User.findById(req.user?._id)
STEP-4: CHECK THE PASSWORD IF CORRECT OR NOT 
    - const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
STEP-5: THROW ERROR MESSAGE 
    - if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password");
      }
STEP-6: SET NEW PASSWORD AND SAVE IT 
    - user.password = newPassword
    - await user.save({validateBeforeSave: false})
STEP-7: SEND RESPONSE 
    - return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
STEP-8: EXPORT THE METHOD

**** GET THE CURRENT USER **** 
    - user.controller.js 
STEP-1: CREATE METHOD 
    - const getCurrentUser = asyncHandler(async(req, res)=> {})
STEP-2: SEND THE RESPONSE 
    - return res
    .status(200)
    .json(200, req.user, "Current user fetched successfully");
STEP-3: EXPORT THE METHOD

**** UPDATE ACCOUNT DETAILS **** 
    - user.controller.js 
STEP-1: CREATE METHOD 
    - const updateAccountDetails = asyncHandler(async(req, res)=> {})
STEP-2: ACCESS THE INFO 
    - const { fullname, email } = req.body;
STEP-3: THROW ERROR MESSAGE 
    - if (!fullname || !email) {
        throw new ApiError(400, "All fields are required");
      }
STEP-4: FIND THE USER AND UPDATE 
    - const user = User.findByIdAndUpdate(
        req.user?._id,
        {
          $set: {
            fullname,
            email,
          },
        },
        { new: true }
      ).select("-password");
STEP-5: SEND THE RESPONSE 
    - return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully")); 
STEP-6: EXPORT THE METHOD 

**** UPDATE FILE **** 
    - user.controller.js 
STEP-1: CREATE METHOD 
    - const updateUserAvatar = asyncHandler(async(req, res)=> {})
STEP-2: ACCESS THE FILE 
    - const avatarLocalPath = req.file?.path;
STEP-3: THROW ERROR MESSAGE 
    - if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing");
      }
STEP-4: UPLOAD THE FILE IN CLOUDINARY 
    - const avatar = await uploadOnCloudinary(avatarLocalPath);
STEP-5: SEND ERROR MESSAGE ON UPLOADING 
    - if (!avatar.url) {
        throw new ApiError(400, "Error while uploading on avatar");
      } 
STEP-6: FIND THE USER AND UPDATE 
    - const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
          $set: {
            avatar: avatar.url,
          },
        },
        {
          new: true,
        }
      ).select("-password");
STEP-7: SEND THE RESPONSE 
    - return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated successfully"));
STEP-8: EXPORT THE METHOD 

**** UPDATE COVER IMAGE SAME AS AVATAR 
