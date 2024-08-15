import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard(){
    return(
        <>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 ">
            <Card>
                <CardHeader className="flex flex-row items-center  justify-between pb-2 ">
                    <CardTitle className="text-3xl">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-green-400 "></DollarSign>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">$100.000</p>
                    <p className="text-xs text-muted-foreground">Based on 100 Charges</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center  justify-between pb-2 ">
                    <CardTitle className="text-3xl">Total Sales</CardTitle>
                    <ShoppingBag className="h-4 w-4  text-blue-500"></ShoppingBag>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">+90</p>
                    <p className="text-xs text-muted-foreground">Total Sales on CloneDecanted</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center  justify-between pb-2 ">
                    <CardTitle className="text-3xl">Total Product</CardTitle>
                    <PartyPopper className="h-4 w-4  text-indigo-500"></PartyPopper>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">62</p>
                    <p className="text-xs text-muted-foreground">Total Products on Created</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center  justify-between pb-2 ">
                    <CardTitle className="text-3xl">Total Users</CardTitle>
                    <User2 className="h-4 w-4  text-orange-500"></User2>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">170</p>
                    <p className="text-xs text-muted-foreground">Total Users Signed Up</p>
                </CardContent>
            </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
            <Card className="xl:col-span-2">
                <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>Recent transactions from your store</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-8 ">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium">Carl Jackson</p>
                        <p className="text-sm text-muted-foreground">test@gmail.com</p>
                    </div>
                    <p className="ml-auto font-medium">+$67.99</p>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium">Carl Jackson</p>
                        <p className="text-sm text-muted-foreground">test@gmail.com</p>
                    </div>
                    <p className="ml-auto font-medium">+$67.99</p>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium">Carl Jackson</p>
                        <p className="text-sm text-muted-foreground">test@gmail.com</p>
                    </div>
                    <p className="ml-auto font-medium">+$67.99</p>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden sm:flex h-9 w-9">
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium">Carl Jackson</p>
                        <p className="text-sm text-muted-foreground">test@gmail.com</p>
                    </div>
                    <p className="ml-auto font-medium">+$67.99</p>
                </div>
                </CardContent>
            </Card>
        </div>
        </>
    );
}