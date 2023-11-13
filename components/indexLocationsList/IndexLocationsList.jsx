const locations = [
  "Burlington",
  "Caledon",
  "Halton Hills",
  "Brampton",
  "Oakville",
  "Milton",
  "Vaughn",
  "Markham",
  "Richmond Hill",
  "Mississauga",
  "Bolton",
  "George Town",
  "Newmarket",
  "Etobicoke",
];

const IndexLocationsList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 content-around">
      {locations.map((location, i) => (
        <div key={i} className="hidden-element location">
          {location}
        </div>
      ))}
    </div>
  );
};

export default IndexLocationsList;
