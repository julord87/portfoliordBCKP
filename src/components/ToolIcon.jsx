
const ToolIcon = ({name}) => {
  return (
    <>
        <div className="">
            <svg className="svg-icon2" viewBox="0 0 20 20">
                <path fill="none" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
            </svg>
            <p className="Tools-9999">{name}</p>
        </div>
    </>

  )
}

export default ToolIcon