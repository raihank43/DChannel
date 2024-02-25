const { Thread, Post, User } = require("../models");

class Controller {
  static async boards(req, res) {
    try {
      const user = await User.findOrCreate({
        where: { ip_address: req.clientIp },
      });
      //   console.log(user);

      const data = await Thread.findAll({ order: [["createdAt", "DESC"]] });

      //   const ip = req.clientIp;
      //   console.log(ip, "<<homepage");
      //   res.send(`I GOT YOUR IP: ${ip}`);
      res.render("boards", { data });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async addPost(req, res) {
    const { subject, desc, threadImage } = req.body;
    try {
      const user = await User.findOne({
        where: { ip_address: req.clientIp },
      });

      await Thread.create({
        UserId: user.id,
        subject,
        desc,
        threadImage,
      });
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
