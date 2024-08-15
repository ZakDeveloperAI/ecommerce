import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OrdersPage() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>Recent orders</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <p className="font-bold">Carl Jackson</p>
                                <p className="hidden md:flex text-sm text-muted-foreground">test@gmail.com</p>
                            </TableCell>
                            <TableCell>
                                <p className="font-bold">Sale</p>
                            </TableCell>
                            <TableCell>
                                <p className="font-bold">Succesfull</p>
                            </TableCell>
                            <TableCell>
                                <p className="font-bold"> 2024-08-15</p>
                            </TableCell>
                            <TableCell className="text-right">
                                <p className="font-bold">$45.00</p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
    
};
