import React from "react";

function Cards() {
return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 items-center my-10 px-4">
        <div className="w-full sm:w-1/3">
            <p className="text-center py-2 text-lg font-medium">Name</p>
            <img
                className="w-full h-auto rounded-lg shadow-md"
                src="https://www.w3schools.com/w3images/bandmember.jpg"
                alt="Band Member"
            />
        </div>
        <div className="w-full sm:w-1/3">
            <p className="text-center py-2 text-lg font-medium">Name</p>
            <img
                className="w-full h-auto rounded-lg shadow-md"
                src="https://www.w3schools.com/w3images/bandmember.jpg"
                alt="Band Member"
            />
        </div>
        <div className="w-full sm:w-1/3">
            <p className="text-center py-2 text-lg font-medium">Name</p>
            <img
                className="w-full h-auto rounded-lg shadow-md"
                src="https://www.w3schools.com/w3images/bandmember.jpg"
                alt="Band Member"
            />
        </div>
    </div>
);
}

export default Cards;
