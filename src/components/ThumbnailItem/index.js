import './index.css'

const ThumbnailItem = props => {
  const {item, toDisplay, selected} = props

  const changeItem = () => {
    toDisplay(item)
  }

  return (
    <li className={selected === item ? 'selectedli' : 'li'}>
      <button type="button" className="button">
        <img
          src={item.thumbnailUrl}
          alt={item.thumbnailAltText}
          className="thumbnailimg"
          onClick={changeItem}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
