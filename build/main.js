require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/postController.js":
/*!*******************************************!*\
  !*** ./src/controllers/postController.js ***!
  \*******************************************/
/*! exports provided: createPost, getAllPosts, findOnePost, deletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOnePost", function() { return findOnePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/postModel */ "./src/models/postModel.js");

const createPost = async (req, res) => {
  try {
    let newPost = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].create(req.body);
    console.log(newPost);
    res.json({
      message: "Post created successfully",
      newPost
    });
  } catch (error) {
    res.status(505).json({
      message: "Error creating post",
      error
    });
  }
};
const getAllPosts = async (req, res) => {
  try {
    let allPosts = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].find();
    console.log(allPosts);
    res.json({
      message: "Posts found",
      allPosts
    });
  } catch (error) {
    res.status(500).json({
      message: "Error finding all posts",
      error
    });
  }
};
const findOnePost = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    let findPost = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id: id
    });
    console.log(findPost.pseudo);
    console.log(findPost);
    res.json({
      message: "Post found successfully",
      findPost
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const deletePost = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    let deletePost = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOneAndDelete({
      _id: id
    });
    console.log(deletePost.pseudo);
    console.log(deletePost);
    res.json({
      message: "Post deleted successfully",
      deletePost
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/***/ }),

/***/ "./src/controllers/userController.js":
/*!*******************************************!*\
  !*** ./src/controllers/userController.js ***!
  \*******************************************/
/*! exports provided: createUser, findAllUsers, findOneUser, updateUser, deleteUser, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllUsers", function() { return findAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOneUser", function() { return findOneUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);




const createUser = async (req, res) => {
  try {
    const {
      pseudo
    } = req.body;
    const {
      email
    } = req.body;
    const existingUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
      pseudo
    });
    const existingEmail = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
      email
    });
    if (existingUser) {
      return res.status(400).json({
        message: "Pseudo already exists"
      });
    }
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }
    let newUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].create(req.body);
    console.log(newUser.pseudo);
    console.log(newUser);
    res.json({
      message: "User created successfully",
      newUser
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const findAllUsers = async (req, res) => {
  try {
    let findAllUsers = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].find();
    console.log(findAllUsers.pseudo);
    console.log(findAllUsers);
    res.json({
      message: "User found successfully",
      findAllUsers
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const findOneUser = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    let findUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id: id
    });
    console.log(findUser.pseudo);
    console.log(findUser);
    res.json({
      message: "User found successfully",
      findUser
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const updateUser = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    firstname,
    lastname,
    pseudo,
    email
  } = req.body;
  try {
    let updateUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndUpdate({
      _id: id
    }, {
      firstname,
      lastname,
      pseudo,
      email
    }, {
      new: true
    });
    if (!updateUser) {
      res.status(404).json({
        error: "User not found"
      });
    }
    console.log(updateUser.pseudo);
    console.log(updateUser);
    updateUser.save();
    res.json({
      message: "User updated successfully",
      updateUser
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const deleteUser = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    let deleteUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOneAndDelete({
      _id: id
    });
    console.log(deleteUser.pseudo);
    console.log(deleteUser);
    res.json({
      message: "User deleted successfully",
      deleteUser
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  console.log(email);
  try {
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
      email
    });
    console.log(user);
    if (user && (await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default.a.compare(password, user.password))) {
      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({
        email: user.email
      }, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      console.log({
        user,
        token
      });
      res.json({
        user,
        token
      });
    } else {
      res.status(401).json({
        error: "Vos identifiants ou votre mot de passe sont invalides"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Aïe Aïe Aïe, veuillez réessayer"
    });
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_userRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/userRoute */ "./src/routes/userRoute.js");
/* harmony import */ var _routes_postRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/postRoute */ "./src/routes/postRoute.js");






main().catch(err => console.log(err));
async function main() {
  await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI);
  console.log("[SERVER] Database 🔫 connection established !!!");
}
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
const port = process.env.PORT;
app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
  extended: false
}));
app.get("/", (req, res) => {
  res.send("Yoooooo 🔥 !");
});
app.use("/users", _routes_userRoute__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use("/posts", _routes_postRoute__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use("/login", _routes_userRoute__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));

/***/ }),

/***/ "./src/models/postModel.js":
/*!*********************************!*\
  !*** ./src/models/postModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const postSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  pseudo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
const Post = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("Post", postSchema);
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);


const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  pseudo: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
userSchema.pre("save", async function (next) {
  try {
    const password = this.password;
    const hashPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, 10);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});
const User = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("User", userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/routes/postRoute.js":
/*!*********************************!*\
  !*** ./src/routes/postRoute.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_postController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/postController */ "./src/controllers/postController.js");


const postRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
postRouter.post("/createPost", _controllers_postController__WEBPACK_IMPORTED_MODULE_1__["createPost"]);
postRouter.get("/allPosts", _controllers_postController__WEBPACK_IMPORTED_MODULE_1__["getAllPosts"]);
postRouter.put("/:id", _controllers_postController__WEBPACK_IMPORTED_MODULE_1__["findOnePost"]);
postRouter.delete("/:id/deletePost", _controllers_postController__WEBPACK_IMPORTED_MODULE_1__["deletePost"]);
/* harmony default export */ __webpack_exports__["default"] = (postRouter);

/***/ }),

/***/ "./src/routes/userRoute.js":
/*!*********************************!*\
  !*** ./src/routes/userRoute.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/userController */ "./src/controllers/userController.js");


const userRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
userRouter.post("/createUser", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["createUser"]);
userRouter.get("/all-Users", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["findAllUsers"]);
userRouter.get("/:id", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["findOneUser"]);
userRouter.put("/:id/updateUser", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["updateUser"]);
userRouter.delete("/:id/deleteUser", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["deleteUser"]);
userRouter.post("/login", _controllers_userController__WEBPACK_IMPORTED_MODULE_1__["login"]);
/* harmony default export */ __webpack_exports__["default"] = (userRouter);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raphaelgarnier--fagour/Documents/Dev.web/BACKEND/Reddit_BackEnd/src/index.js */"./src/index.js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map