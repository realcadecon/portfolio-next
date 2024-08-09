"use client"

import TransitionLink from "@/components/TransitionLink";

export default function About() {
    return (
        <div>
            <div className="text-center p-6 text-primary">
                <TransitionLink href="/">Back to Home</TransitionLink>
                <div className="mt-10 flex flex-col w-[100%] md:w-[80%] lg:w-[700px] mx-auto gap-10 items-center">
                    <div className="flex gap-4 w-full justify-center">
                        <div className="w-10 flex-none bg-primary"></div>
                        <div className="flex flex-col flex-initial text-left">
                            <div className="font-black text-4xl">Cade Conner</div>
                            <div className="text-xl">Software Developer</div>
                        </div>
                    </div>
                    <article className="text-lg text-left flex flex-col gap-6">
                        <p>
                            {`Hey there! I’m a software developer with a passion for building things that work behind the scenes. Specializing in backend and full-stack development with Java, Spring Boot, React, C++, and Tailwind CSS, I enjoy bringing ideas to life and making sure everything runs smoothly under the hood.`}</p>
                        <p>
                            {`When I’m not working on the next big thing, I love shifting gears to video game development using Unreal Engine 5, and diving into 3D modeling and animation with Blender and Rive, combining creativity with code.`}</p>
                        <p>
                            {`But there's more to me than just tech. Away from the keyboard, you might find me playing volleyball, ice hockey, or whipping up something delicious in the kitchen. Whether it’s on the court, the rink, or with a rolling pin, I’m all about bringing a bit of creativity and energy into everything I do.`}
                        </p>
                        <p>
                           {`This is my little corner of the internet, where I showcase the things I’ve built and what I’m passionate about.`}
                        </p>
                        <p>{`Take a look around, and if you like what you see, let’s connect!`}</p>
                    </article>
                </div>
            </div>
        </div>
    );
}