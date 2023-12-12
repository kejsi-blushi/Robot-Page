const Card = ({ robot }) => {
  const { name, username, email, id } = robot;
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}`} alt="photo" />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
