const access = () => {
    return (req, res, next) => {
      if (req.isAuthenticated()) {
        next();
      } else {
        res.redirect("/ingresar");
      }
    };
  };


  app.get("/borrararticulo", access(), postController.deleteArticleById); // ok



  ////////////////////////////////////////////////////////////////////////////////////

  const role1 = () => {
    return (req, res, next) => {
      if (req.user.role === "1") {
        next();
      } else {
          console.log("NO SOS ADMIN ///////////////////////////////////////")
        res.redirect("/ingresar");
      }
    };
  };
