import { Request, Response , NextFunction } from "express";
import { findAllUser } from "../service/auth-service";

export function getIndex(req: Request, res: Response) {
   res.render("partials/index", {
     title: "Fast food",
     onAdmin: true
   });
}

export function admin(req: Request, res: Response) {
   res.render('admin-pages/admin-index',{
      title:"Admin Page",
      adminOn: true,
      dashboard:true
  })
}
export function active(req: Request, res: Response) {
   res.render('partials/active',{
      title:"Active",
      adminOn: true,
      active: true
  })
}
export function update(req: Request, res: Response) {
   res.render('partials/update',{
      title:"Update",
      adminOn: true,
      update: true
  })
}
export async function allUsers(req: Request, res: Response) {

   const allUser = await findAllUser();
   res.render('partials/all-users',{
      title:"All users",
      adminOn: true,
      allUsers: true,
      allUser
  })
}