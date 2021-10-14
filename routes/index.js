const express = require("express");

const VacancyController = require("../controllers/vacancy.Controller");
const UserController = require("../controllers/user.Controller");
const AuthController = require("../controllers/auth.Controller");

const router = express.Router();

router.get('/vancancy', VacancyController.getVacancy);
router.post('/auth/signup', UserController.createUser);
router.post("/auth/signin", AuthController.signIn);
router.post("/vancancy/create", VacancyController.createVacancy);

// router.post(
//       "/auth/signup", () =>{
//       [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
//       authCtrl.signUp
//       });

// router.get("/vancancy/:vacancyId", () =>{ vacancyCtrl.getvacancyById });

// router.post(
//   "/vancancy/", () =>{
//   [authJwt.verifyToken, authJwt.isModerator],
//   vacancyCtrl.createVacancy
//   });

// router.put(
//   "/vancancy/:vacancyId", () => {
//   [authJwt.verifyToken, authJwt.isModerator],
//   vacancyCtrl.updateVacancyById
//   });

// router.delete(
//   "/vancancy/:vacancyId", () =>{
//   [authJwt.verifyToken, authJwt.isAdmin],
//   vacancyCtrl.deleteVacancyById
//   });

// router.post(
//   "/user/", () => {
//   [
//     authJwt.verifyToken,
//     authJwt.isAdmin,
//     verifySignup.checkDuplicateUsernameOrEmail,
//   ],
//   usersCtrl.createUser
//   });

// router.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

// router.post(
//   "/auth/signup", () =>{
//   [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
//   authCtrl.signUp
//   });

// router.post("/auth/signin", () =>{ authCtrl.signin});

module.exports = router;
