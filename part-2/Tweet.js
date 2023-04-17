function Tweet({username, name, date, message}) {
  return (
    <div>
      <span><h1>{username}</h1></span>
      <span><h2>{name}</h2></span>
      <span>{date}</span>
      <p style={{color: "red"}}>{message}</p>
    </div>
  )
}