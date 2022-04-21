import { Request, Response } from "express";

class HomeController{

  public home(req:Request, res:Response) {
    
    return res.render("home");

  }

}

export const homeController = new HomeController();