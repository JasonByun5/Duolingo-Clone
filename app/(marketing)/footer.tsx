import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className = "max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" >
                    <Image 
                    src="/china.png" 
                    alt="chinese" 
                    height={32} 
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Chinese
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image 
                    src="/flag.png" 
                    alt="spanish" 
                    height={32} 
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image 
                    src="/japan.png" 
                    alt="japanese" 
                    height={32} 
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image 
                    src="/south-korea.png" 
                    alt="korean" 
                    height={32} 
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Korean
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image 
                    src="/united-kingdom.png" 
                    alt="english" 
                    height={32} 
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    English
                </Button>
            </div>
        </footer>
    );
};