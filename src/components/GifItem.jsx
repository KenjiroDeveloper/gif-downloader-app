

export const GifItem = ({ title, url }) => {
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
                  <button className="btn btn-primary">Download</button>
              </div>
          </div>
      </div>
  )
}
