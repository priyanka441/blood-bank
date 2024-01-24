
// //isse koi bhi route ko protect krskte hai
// //jb token verify nhi milega tb tk nhi execute hoga
// const JWT = require("jsonwebtoken");

// module.exports = async (req, res, next) => {  //middleware m hume next milta h jb next call hoga tbhi func execute hoga
//   try {
//     const token = req.headers["authorization"].split(" ")[1];    //tokrn m array ko split krke jo first index p aaya wo store hoga
//     JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {  //decoding password
//       if (err) {
//         return res.status(401).send({
//           success: false,
//           message: "Auth Failed",
//         });
//       } else {
//         req.body.userId = decode.userId;    //decoded id store hui h
//         next();
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(401).send({
//       success: false,
//       error,
//       message: "Auth Failedd",
//     });
//   }
// };

const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "Authorization header is missing or not formatted correctly.",
      });
    }

    const token = authorizationHeader.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failed",
    });
  }
};
