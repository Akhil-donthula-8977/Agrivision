"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { oauth } from '@/lib/users.action';
import { nunito } from '@/lib/fontsCustom';
 

const AuthForm = () => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" className={`${nunito.className} tracking-normal text-back border-2 border-green-600 text-green-600 hover:bg-green-800 hover:text-white  mt-5 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-bold rounded-lg text-sm px-5 py-2.5`}>
          sign in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">sign in</DialogTitle>
        </DialogHeader>
        <form action={oauth}>
          <div className={`${nunito.className}grid gap-4 py-4 space-y-5`}>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Your email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
            <button type="submit" name="action" value="credentials" className="w-full border-2 border-green-500 hover:text-white hover:bg-green-600 text-green-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              login 
            </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
