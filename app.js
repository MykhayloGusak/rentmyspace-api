const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const usersRouter = require("./routes/user");
const roomsRouter = require("./routes/room");
const bookingRouter = require("./routes/booking");
const authRouter = require("./routes/auth");

const uri =
  "mongodb+srv://mike:posada73@cluster0-3fjyh.mongodb.net/schedule?retryWrites=true&w=majority";
const urilocal = "mongodb://localhost:27017/myapp";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", usersRouter);
app.use("/room", roomsRouter);
app.use("/booking", bookingRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
