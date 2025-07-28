import { useState } from "react"
import { handleDownload } from "../helpers"
import { DownloadAnimation } from "./index"

export const GifItem = ({ title, url }) => {

    const [play, setPlay] = useState(false)

    const donwloadGif = () => {
        handleDownload(url, title)
        setPlay(true)

        setTimeout(() => setPlay(false), 1000);
    }

    return (
        <div className="card bg-base-200 w-96 shadow-sm rounded-3xl">
            <figure className="px-10 pt-10">
                <img
                    src={url}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                    <button onClick={donwloadGif} className="btn btn-primary">
                        Download
                        {play && (
                            <DownloadAnimation />
                        )
                        }
                    </button>

                </div>
            </div>
        </div>
    )
}
