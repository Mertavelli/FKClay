'use client'

import Question from "@/app/components/shared/Question"
import Help from "@/app/components/sections/shop/Help"

export default function FAQPage() {

    return (
        <div className="mt-[5rem] min-h-screen">
            <h1 className="text-center text-[4rem] mb-[5rem]">Any Questions?</h1>

            <div className="flex justify-center">
                <div className="flex flex-col w-[60rem] border-t border-[#CECECE]">
                    <Question
                        question={"How can I change my order?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet. Turpis egestas sed tempus urna et. Enim tortor at auctor urna nunc. Feugiat in fermentum posuere urna nec."}
                    />

                    <Question
                        question={"How can I change delivery address?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet. Turpis egestas sed tempus urna et. Enim tortor at auctor urna nunc. Feugiat in fermentum posuere urna nec."}
                    />

                    <Question
                        question={"What is the return policy?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet. Turpis egestas sed tempus urna et. Enim tortor at auctor urna nunc. Feugiat in fermentum posuere urna nec."}
                    />
                </div>
            </div>

            <Help />
        </div>
    )
}