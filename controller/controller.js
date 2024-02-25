const { Thread, Post, User } = require("../models");

class Controller {
  static async boards(req, res) {
    try {
      const user = await User.findOrCreate({
        where: { ip_address: req.clientIp },
      });
      console.log(user)

      const data = await Thread.findAll({ order: [["createdAt", "ASC"]] });

    //   const ip = req.clientIp;
    //   console.log(ip, "<<homepage");
    //   res.send(`I GOT YOUR IP: ${ip}`);
        res.render("boards", { data });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
