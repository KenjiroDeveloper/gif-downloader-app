import { useState } from "react"
import { getRandomWord } from "../helpers"

export const Hero = ({ setCategory }) => {

    const [randomWord] = useState(getRandomWord)

    const serachRandomWord = () => {
        setCategory(randomWord)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hi!</h1>
                    <p className="py-6">
                        Search and download gifs of any kind, try searching for something like: <span className="font-bold">{randomWord}</span>
                    </p>
                    <button onClick={serachRandomWord} className="btn btn-primary">Lest Do It!</button>
                </div>
            </div>
        </div>
    )
}
