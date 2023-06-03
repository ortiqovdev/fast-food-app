import { Request, Response, NextFunction } from "express";

export function product(req: Request, res: Response , next: NextFunction) {
   res.render('product/productUp',{
      title:"New Product"
  })
}