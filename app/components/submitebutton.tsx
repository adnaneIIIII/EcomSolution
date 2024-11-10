"use client"
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Loadable } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { useFormStatus } from "react-dom"

export function SubmiteBotton({text}:{text:string}) {

    const {pending} = useFormStatus(); 
    return (

        <>
        {pending ? (
            <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
            Please wait
            </Button>
        ):(
            <Button type="submit">{text}</Button>
        )}
        </>
    )
}