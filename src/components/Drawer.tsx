import * as React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "astro-feather";

export function Drawer() {
    return(
          <Sheet>
            <SheetTrigger>Menu</SheetTrigger>
            <SheetContent side={"right"}>
            <SheetTitle>Menu</SheetTitle>
            </SheetContent>
          </Sheet>
    );
}
