import Dashboard from "@/components/DashboardMenu"

export default function DashboardLayout({children}) 
{
    return (
    <div className="flex"> 
        <Dashboard />
        <div className="ml-[25%] w-3/4">
        {children}
        </div>
    </div>  
    )
}