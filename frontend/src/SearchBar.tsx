import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex justify-center">
        <div 
        className="relative w-80" >
            <input className="w-full h-full bg-white text-grey placeholder:text-white-500 border-grey p-2 border-1  rounded-2xl hover:cursor-pointer" 
            type="text" 
            placeholder="Where do you want to go?" />
            <button className="bg-green-500 rounded-xl p-1 absolute right-2 top-1/2 -translate-y-1/2 border-1 hover:cursor-pointer"
            type="submit">
                <Search size={20} color="white" />
            </button>
        </div>
        </div>
    );
}

