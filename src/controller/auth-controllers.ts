import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { Auth, createAcc } from "../service/auth-service";
export function getLogin(req: Request, res: Response) {
  res.render("auth/kirish", {
    title: "Kirish",
    loginErr: req.flash("loginError"),
  });
}
export async function postKirish(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;
  const { username, phone } = body;
  if (!username || !phone) {
    req.flash("loginError", "All requried ");
    res.redirect("/kirish");
    return;
  }
  try {
    const body = req.body as Auth;
    await createAcc(body);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}
