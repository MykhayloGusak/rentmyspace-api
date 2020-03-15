const express = require("express");
const router = express.Router();
const controller = require("../../controller/booking");
const auth_one = require("../../midleware/auth_one");

/* Crate a new room */
router.post("/", auth_one, controller.create_booking);

// /* Modify a room by id*/
// router.put("/:roomId", auth_one, controller.update_room_by_id);

// /* Read a room by id*/
// router.get("/:roomId", auth_one, controller.get_room_by_id);

// /* Read a room by user id*/
// router.get("/user", auth_one, controller.get_room_by_userId);

module.exports = router;
